import {
  GL,
  Scene,
  Geom,
  Draw,
  DrawBall,
  DrawCopy,
  DrawAxis,
  DrawCamera,
  EaseNumber,
  TweenNumber,
  CameraOrtho,
  Object3D,
  FrameBuffer,
} from "alfrid";
import {
  resize,
  saveImage,
  getDateString,
  biasMatrix,
  getColorTexture,
} from "./utils";
import Scheduler from "scheduling";
import Assets from "./Assets";
import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import { randomFloor } from "randomutils";
import TouchScale from "./utils/TouchScale";

// draw calls
import DrawMark from "./DrawMark";
import DrawRing from "./DrawRing";

// shaders
import vsFloor from "shaders/basic.vert";
import fsFloor from "shaders/floor.frag";

let hasSaved = false;
let canSave = false;

const LIGHT_HEIGHT = 0.8;
const DEFAULT_Y = 0.4;

const SHADOW = {
  boundary: 0.3,
  near: 0.1,
  far: 0.9,
};

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);

    // hit
    this._mtxHit = mat4.create();
    this._mtxWorld = mat4.create();
    mat4.translate(this._mtxHit, this._mtxHit, [0, -DEFAULT_Y, 0]);

    // shadow
    this._lightPos = vec3.create();
    this._lightTarget = vec3.create();
    this._mtxShadow = mat4.create();
    const r = SHADOW.boundary;
    const { near, far } = SHADOW;
    this._cameraLight = new CameraOrtho(-r, r, r, -r, near, far);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new TweenNumber(1, "linear", 0.01);
    this._globalScale = new TouchScale(1);
    this._hasStarted = false;
    this._hasPresented = false;
    this._container = new Object3D();

    // set size
    this.resize();

    if (!GL.isMobile) {
      setTimeout(() => {
        canSave = true;
      }, 500);
    } else {
      Config.colorIndex = randomFloor(2);
    }
  }

  present() {
    this._globalScale.setTo(3);
    window.addEventListener("touchstart", (e) => this._onTouch());

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    const fboSize = 2048;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);

    this._textureWhite = getColorTexture();
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dMark = new DrawMark();
    this._dCamera = new DrawCamera();

    this._drawRing = new DrawRing();

    const s = 5;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vsFloor, fsFloor);
  }

  _onTouch() {
    if (this._hasStarted) {
      this._offsetOpen.value = this._offsetOpen.targetValue === 1 ? 0 : 1;
      return;
    }
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this._mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this._offsetOpen.value = 1;
    }
  }

  _checkHit() {
    if (!this._hasStarted) {
      const mtxHit = hitTest();
      if (mtxHit !== null) {
        this._offsetHit.value = 1;
        mat4.copy(this._mtxHit, mtxHit);
      }
    }
  }

  _drawScene(mShadow) {
    const tDepth = mShadow ? this._fboShadow.depthTexture : this._textureWhite;
    GL.setModelMatrix(this._mtxWorld);
    this._drawRing
      .bindTexture("uDepthMap", tDepth, 0)
      .bindTexture("uColorMap", Assets.get(`00${Config.colorIndex}`), 1)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uOffsetOpen", this._offsetOpen.value)
      .draw();
  }

  update() {
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = this._globalScale.value;
    this._container.y = DEFAULT_Y * this._globalScale.value;
    mat4.mul(this._mtxWorld, this._mtxHit, this._container.matrix);

    this._updateShadowMap();
  }

  _updateShadowMap() {
    let s = this._globalScale.value;
    const mtxLight = mat4.clone(this._mtxHit);
    // mat4.scale(mtxLight, mtxLight, [s, s, s]);

    const t = 0.1;
    vec3.transformMat4(this._lightTarget, [0, 0, -t * s], mtxLight);
    vec3.transformMat4(this._lightPos, [0, LIGHT_HEIGHT * s, t * s], mtxLight);
    this._cameraLight.lookAt(this._lightPos, this._lightTarget);

    const near = SHADOW.near * s;
    const far = SHADOW.far * s;
    const r = SHADOW.boundary * s;
    this._cameraLight.ortho(-r, r, r, -r, near, far);

    // update shadow matrix
    mat4.mul(
      this._mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    // set camera to light camera
    GL.setMatrices(this._cameraLight);

    // update shadow map
    this._fboShadow.bind();
    GL.clear(0, 0, 0, 0);
    this._drawScene(false);
    this._fboShadow.unbind();

    // reset camera
    GL.setMatrices(this.camera);
  }

  render() {
    // update
    this.update();

    let s;
    if (!isARSupported) {
      const g = 0.1;
      GL.clear(g, g, g, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    // debug
    // s = 0.005;
    // this._dBall.draw(this._lightPos, [s, s, s], [1, 0.8, 0]);
    // this._dBall.draw(this._lightTarget, [s, s, s], [1, 0.8, 0]);
    // this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this._mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    // this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    // draw floor
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uOpacity", 1.0 - this._offsetHit.value)
      .draw();

    this._drawScene(true);

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    if (GL.isMobile || !Config.autoSave) {
      const { innerWidth, innerHeight } = window;
      resize(innerWidth, innerHeight);
      this.camera.setAspectRatio(GL.aspectRatio);
    } else {
      const pixelRatio = 2.0;
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
