import {
  GL,
  Scene,
  Geom,
  GLShader,
  Draw,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  Object3D,
  CameraOrtho,
  EaseNumber,
  TweenNumber,
  FrameBuffer,
  FboPingPong,
} from "alfrid";
import Config from "./Config";
import Assets from "./Assets";
import { resize, biasMatrix, saveImage, getDateString } from "./utils";
import TouchScale from "./utils/TouchScale";
import Scheduler from "scheduling";
import { randomFloor } from "randomutils";

import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";
import DrawSave from "./DrawSave";
import DrawParticles from "./DrawParticles";

import vs from "shaders/basic.vert";
import fs from "shaders/diffuse.frag";
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";
import vsFloor from "shaders/basic.vert";
import fsFloor from "shaders/floor.frag";

const GENERAL_SCALE = 1.0;
const LIGHT_HEIGHT = 1.0;

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.radius.setTo(1);
    this.orbitalControl.rx.limit(-0.2, Math.PI / 2);
    this.orbitalControl.rx.value = -0.2;
    // this.orbitalControl.lock();

    // shadow
    this._lightPos = vec3.create();
    this._lightTarget = vec3.create();
    this._mtxShadow = mat4.create();
    const r = 0.5 * GENERAL_SCALE;
    this._cameraLight = new CameraOrtho(-r, r, r, -r, 0.1, 1);

    // hit
    this.mtxHit = mat4.create();
    this.mtxWorld = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -0.3, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._hasStarted = false;
    this._needUpdateShadow = true;
    this._seed = Math.random() * 0xff;
    this.globalScale = new TouchScale();
    this.globalScale.lock();

    this._offsetParticles = new TweenNumber(1, "circInOut", 0.01);
    this._offsetTouch = new EaseNumber(1, 0.2);

    // set size
    this.resize();

    this.touch();
  }

  touch() {
    this._offsetTouch.setTo(3);
    this._offsetTouch.value = 1;
    const delay = randomFloor(1000, 4000);

    setTimeout(() => this.touch(), delay);
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());
    this.globalScale.lock(false);
  }

  _initTextures() {
    const fboSize = GL.isMobile ? 2048 : 4096;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);

    const { numParticles: num } = Config;
    const oSettings = {
      type: GL.HALF_FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 4);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dCamera = new DrawCamera();
    this._dMark = new DrawMark();
    this._dParticles = new DrawParticles();

    const shader = new GLShader(vs, fs);

    const getDraw = (mId, mNormalScale) => {
      return new Draw()
        .setMesh(Assets.get(mId))
        .useProgram(shader)
        .bindTexture("uNormalMap", Assets.get("handNormal"), 0)
        .uniform("uNormalScale", mNormalScale);
    };
    this._draws = [getDraw("ecoute_head", 0), getDraw("ecoute_hand", 1)];

    let s = 5;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vsFloor, fsFloor);

    // container

    s = 0.1;
    this._container = new Object3D();
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = s;
    this._container.rotationY = -Math.PI / 2;

    // particles
    new DrawSave()
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 1)
      .draw();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 1);

    setTimeout(() => {
      canSave = true;
    }, 1500);
  }

  _onTouch() {
    if (this._hasStarted) {
      return;
    }

    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.5;
    }
  }

  _updateShadowMap() {
    if (!this._needUpdateShadow) {
      return;
    }

    let s = this.globalScale.value * 0.1;
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = s;

    // update camera position
    s = this.globalScale.value;
    const mtxLight = mat4.clone(this.mtxHit);
    mat4.scale(mtxLight, mtxLight, [s, s, s]);

    vec3.transformMat4(this._lightTarget, [0, 0, 0], mtxLight);
    vec3.transformMat4(
      this._lightPos,
      [
        -0.15 * GENERAL_SCALE,
        LIGHT_HEIGHT * GENERAL_SCALE,
        0.25 * GENERAL_SCALE,
      ],
      mtxLight
    );
    this._cameraLight.lookAt(this._lightPos, this._lightTarget);

    const r = 0.5 * GENERAL_SCALE * s;
    this._cameraLight.ortho(-r, r, r, -r, 0.1 * s, 1.5 * s);

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
    this._drawStatue();
    this._fboShadow.unbind();

    // reset camera
    GL.setMatrices(this.camera);
  }

  _drawStatue() {
    GL.setModelMatrix(this.mtxWorld);
    const lightPos = vec3.create();
    vec3.sub(lightPos, this._lightPos, this._lightTarget);
    this._draws.forEach((draw) => {
      draw.uniform("uLightPos", lightPos).draw();
    });

    this._dParticles
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uLightPos", lightPos)
      .draw();
  }

  _update() {
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .uniformTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .uniformTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .uniformTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .uniformTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uTime", "float", Scheduler.getElapsedTime() + this._seed)
      .uniform("uCenterY", 5)
      .uniform("uOffsetOpen", this._offsetParticles.value)
      .uniform("uOffsetTouch", this._offsetTouch.value)
      .draw();

    this._fbo.swap();
  }

  render() {
    let s;
    this._update();
    if (!isARSupported) {
      this._updateShadowMap();
      const g = 0.1;
      GL.clear(g, g, g, 1);
    } else {
      if (!this._hasStarted) {
        const mtxHit = hitTest();
        if (mtxHit !== null) {
          this._offsetHit.value = 1;
          mat4.copy(this.mtxHit, mtxHit);
        }
      }

      this._updateShadowMap();
      setCamera(GL, this.camera);
    }

    // update statue matrix
    mat4.mul(this.mtxWorld, this.mtxHit, this._container.matrix);

    // debugs
    s = 0.01;
    this._dBall.draw(this._lightPos, [s, s, s], [1, 1, 0]);
    this._dBall.draw(this._lightTarget, [s, s, s], [1, 1, 0]);
    // this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();
    // this._dAxis.draw();

    // draw floor and hide
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .draw();

    this._drawStatue();

    s = 400;
    // GL.viewport(0, 0, s, s);
    // this._dCopy.draw(this._fbo.read.getTexture(0));
    // GL.viewport(s, 0, s, s);
    // this._dCopy.draw(this._fbo.read.getTexture(2));

    if (!hasSaved && canSave && !GL.isMobile) {
      // saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    if (GL.isMobile) {
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
