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
  FboPingPong,
} from "alfrid";
import { resize, saveImage, getDateString, biasMatrix } from "./utils";
import TouchScale from "./utils/TouchScale";

import Assets from "./Assets";
import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4, mat3 } from "gl-matrix";
import Scheduler from "scheduling";

// draw calls
import DrawMark from "./DrawMark";
import DrawSave from "./DrawSave";
import DrawParticles from "./DrawParticles";

import vsBasic from "shaders/basic.vert";
import vsPass from "shaders/pass.vert";
import fsFloor from "shaders/floor.frag";
import fsCopy from "shaders/copy.frag";
import fsSim from "shaders/sim.frag";

let hasSaved = false;
let canSave = false;

const LIGHT_HEIGHT = 0.7;
const DEFAULT_Y = 0.3;

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
    this._particleScale = 0.4;

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
    this._particleScale = 1.0;
    this._offsetOpen.setTo(0);
    window.addEventListener("touchstart", (e) => this._onTouch());
    this._hasPresented = true;
  }

  _initTextures() {
    let fboSize = GL.isMobile ? 2048 : 4096;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);

    const { numParticles: num } = Config;
    const oSettings = {
      type: GL.HALF_FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 5);
    this._fboOrgPos = new FrameBuffer(num, num, oSettings);

    fboSize = 2048;
    this._fboMoon = new FrameBuffer(fboSize, fboSize, oSettings);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dCamera = new DrawCamera();
    this._drawMark = new DrawMark();

    // particles
    this._drawSave = new DrawSave()
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 1)
      .draw();

    // save origin position
    this._fboOrgPos.bind();
    GL.clear(0, 0, 0, 1);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboOrgPos.unbind();

    this._drawParticles = new DrawParticles();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim);

    let s;

    s = 5;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vsBasic, fsFloor)
      .uniform("uScale", [1, 1, 1]);

    s = 0.1;
    this._drawMoon = new Draw()
      .setMesh(Assets.get("moon"))
      .useProgram(vsBasic, fsCopy)
      .bindTexture("uColorMap", Assets.get("color"), 0)
      .uniform("uScale", [s, s, s]);
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

    mat4.mul(this._mtxWorld, this._mtxHit, this._container.matrix);

    vec3.transformMat4(this._lightTarget, [0, 0, 0], this._mtxHit);
    vec3.transformMat4(this._lightPos, [0, LIGHT_HEIGHT * s, 0], this._mtxHit);
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
    this._drawScene();
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

  _drawScene() {
    GL.setModelMatrix(this._mtxWorld);
    this._drawMoon.draw();
  }

  _updateMoonMap() {
    this._fboMoon.bind();
    GL.clear(0, 0, 0, 0);
    this._drawScene();
    this._fboMoon.unbind();
  }

  update() {
    // update moon map
    this._updateMoonMap();

    GL.setModelMatrix(this._mtxHit);
    // update particle
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .setClearColor(0, 0, 0, 1)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uDataMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 4)
      .bindTexture("uMoonMap", this._fboMoon.texture, 5)
      .bindTexture("uPosOrgMap", this._fboOrgPos.texture, 6)
      .uniform("uTime", Scheduler.getDeltaTime())
      .uniform("uCenter", [0, DEFAULT_Y, 0])
      .uniform("uRadius", Config.moonRadius)
      .draw();

    this._fbo.swap();

    // update shadow map
    this._updateShadowMap();
  }

  render() {
    this.update();

    let s;
    if (!isARSupported) {
      const g = 0.1;
      GL.clear(g, g, g, 1);
    } else {
      this._checkHit();
      setCamera(GL, this.camera);
    }

    // debug
    // s = 0.005;
    // this._dBall.draw(this._lightPos, [s, s, s], [1, 0.8, 0]);
    // this._dBall.draw(this._lightTarget, [s, s, s], [1, 0.8, 0]);
    // this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this._mtxHit);
    s = this._offsetHit.value * 0.005;
    // this._dAxis.draw();
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._drawMark.uniform("uOffset", this._offsetHit.value).draw();

    // // draw floor
    // this._drawFloor
    //   .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
    //   .uniform("uShadowMatrix", this._mtxShadow)
    //   .uniform("uOpacity", 1.0 - this._offsetHit.value)
    //   .draw();

    this._drawParticles
      .uniform("uViewport", [GL.width, GL.height])
      .uniform("uParticleScale", this._particleScale)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(2), 1)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 2)
      .draw();

    const mtx = mat4.create();
    s = 0.995;
    mat4.scale(mtx, this._mtxWorld, [s, s, s]);
    GL.setModelMatrix(mtx);
    this._drawMoon.draw();

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    const pixelRatio = 1.0;
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
