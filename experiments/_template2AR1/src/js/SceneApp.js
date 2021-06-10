import {
  GL,
  Scene,
  Draw,
  Geom,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  EaseNumber,
  CameraOrtho,
  FrameBuffer,
  Object3D,
} from "alfrid";
import { resize, saveImage, getDateString, biasMatrix } from "./utils";
import TouchScale from "./utils/TouchScale";

import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";

import DrawMark from "./DrawMark";

import vsFloor from "shaders/basic.vert";
import fsFloor from "shaders/floor.frag";

let hasSaved = false;
let canSave = false;

const LIGHT_HEIGHT = 0.7;
const DEFAULT_Y = 0.31;

const SHADOW = {
  boundary: 0.25,
  near: 0.1,
  far: 0.8,
};

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1, 0.05);
    this.globalScale = new TouchScale();
    this._hasStarted = false;
    this._hasPresented = false;

    // shadow
    this._lightPos = vec3.create();
    this._lightTarget = vec3.create();
    this._mtxShadow = mat4.create();
    const r = SHADOW.boundary;
    const { near, far } = SHADOW;
    this._cameraLight = new CameraOrtho(-r, r, r, -r, near, far);

    // hit
    this._mtxHit = mat4.create();
    this._mtxWorld = mat4.create();
    mat4.translate(this._mtxHit, this._mtxHit, [0, -DEFAULT_Y, 0]);

    this._container = new Object3D();
    this._container.y = DEFAULT_Y;

    // set size
    this.resize();

    if (!GL.isMobile) {
      setTimeout(() => {
        canSave = true;
      }, 500);
    }
  }

  present() {
    this._offsetOpen.setTo(0);
    window.addEventListener("touchstart", (e) => this._onTouch());
    this._hasPresented = true;
  }

  _initTextures() {
    const fboSize = GL.isMobile ? 2048 : 4096;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dCamera = new DrawCamera();
    this._drawMark = new DrawMark();

    let s;

    s = 5;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vsFloor, fsFloor);
  }

  _onTouch() {
    if (this._hasStarted) {
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

  _updateShadowMap() {
    // update camera position
    let s = this.globalScale.value;
    this._container.y = DEFAULT_Y * s;
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = s;

    const mtxLight = mat4.clone(this._mtxHit);
    mat4.scale(mtxLight, mtxLight, [s, s, s]);

    vec3.transformMat4(this._lightTarget, [0, 0, 0], mtxLight);
    vec3.transformMat4(this._lightPos, [0, LIGHT_HEIGHT * s, 0], mtxLight);
    this._cameraLight.lookAt(this._lightPos, this._lightTarget, [0, 0, 1]);

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
    GL.setModelMatrix(this._mtxWorld);
    s = 0.1;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    // this._renderText(true);
    this._fboShadow.unbind();

    // reset camera
    GL.setMatrices(this.camera);
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

  render() {
    this._updateShadowMap();

    let s;
    if (!isARSupported) {
      const g = 0.2;
      GL.clear(g, g, g, 1);
    } else {
      this._checkHit();
      setCamera(GL, this.camera);
    }

    mat4.mul(this._mtxWorld, this._mtxHit, this._container.matrix);

    // debug
    s = 0.005;
    this._dBall.draw(this._lightPos, [s, s, s], [1, 0.8, 0]);
    this._dBall.draw(this._lightTarget, [s, s, s], [1, 0.8, 0]);
    this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this._mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dAxis.draw();
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._drawMark.uniform("uOffset", this._offsetHit.value).draw();

    // draw floor
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uOpacity", 1.0 - this._offsetHit.value)
      .draw();

    GL.setModelMatrix(this._mtxWorld);
    s = 0.1;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    const pixelRatio = 2.0;
    if (GL.isMobile || !Config.autoSave) {
      const { innerWidth, innerHeight } = window;
      resize(innerWidth * pixelRatio, innerHeight * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    } else {
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
