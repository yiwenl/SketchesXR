import {
  FboPingPong,
  GL,
  Draw,
  Geom,
  DrawCamera,
  DrawBall,
  FrameBuffer,
  CameraOrtho,
} from "alfrid";
import { iOS, biasMatrix } from "./utils";
import Assets from "./Assets";
import Config from "./Config";
import DrawSwarm from "./DrawSwarm";
import DrawSwarmSave from "./DrawSwarmSave";
import DrawDebug from "./DrawDebug";
import Scheduler from "scheduling";

import vsPass from "shaders/pass.vert";
import fsSim from "shaders/swarmSim.frag";
import { mat4, vec3 } from "gl-matrix";

class SceneSwarm {
  constructor() {
    this._drawSwarm = new DrawSwarm();

    // init
    const { numSwarm: num } = Config;
    const type = iOS() ? GL.HALF_FLOAT : GL.FLOAT;
    // const type = GL.FLOAT;
    const oSettings = {
      type,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    this._seed = Math.random() * 0xff;

    this._fbo = new FboPingPong(num, num, oSettings, 4);
    const fboSize = 1024 * 2;
    this._fboShadow = new FrameBuffer(fboSize, fboSize, {
      minFilter: GL.LINEAR,
      magFilter: GL.LINEAR,
    });
    this._fboShadow.bind();
    GL.clear(0, 0, 0, 1);
    this._fboShadow.unbind();

    this._drawSave = new DrawSwarmSave()
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(this._fbo.read)
      .draw();

    this._drawDebug = new DrawDebug();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .uniform("uMaxHeight", Config.maxHeight)
      .setClearColor(0, 0, 0, 1);

    // shadow
    const r = 2;
    this._cameraLight = new CameraOrtho();
    this._cameraLight.ortho(-r, r, r, -r, 1, 5);
    this._cameraPos = vec3.fromValues(0, 2, 0.5);
    this._cameraTarget = vec3.fromValues(0, 0, -0.3);
    this._mtxShadow = mat4.create();

    // debug
    this._light = vec3.create();
    this._center = vec3.create();
    this._drawBall = new DrawBall();
    this._drawCamera = new DrawCamera();
  }

  open() {
    this._drawSwarm.open();
  }

  close() {
    this._drawSwarm.close();
  }

  reset() {
    this._drawSave
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(this._fbo.read)
      .draw();
  }

  update(mMtx, mMtxHit) {
    const s = mMtx[0];
    // console.log("scale", s);
    const r = 12 * s;
    this._cameraLight = new CameraOrtho();
    this._cameraLight.ortho(-r, r, r, -r, 1 * s, 30 * s);

    const camPos = vec3.create();
    const camTarget = vec3.create();
    vec3.transformMat4(camPos, this._cameraPos, mMtxHit);
    vec3.transformMat4(camTarget, this._cameraTarget, mMtxHit);
    vec3.transformMat4(this._light, this._cameraPos, mMtxHit);
    vec3.transformMat4(this._center, [0, 0, 0], mMtxHit);
    this._cameraLight.lookAt(camPos, camTarget);

    mat4.mul(
      this._mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uTime", "float", Scheduler.getElapsedTime() + this._seed)
      .uniform("uOffsetCircle", "float", 0)
      .uniform("uSpeed", GL.isMobile ? 2 : 1.5)
      .draw();

    this._fbo.swap();

    this._fboShadow.bind();
    GL.clear(0, 0, 0, 1);
    GL.setMatrices(this._cameraLight);
    GL.setModelMatrix(mMtx);
    this._drawButterflies(false);
    this._fboShadow.unbind();
  }

  _drawButterflies(mWithShadow) {
    const tShadow = mWithShadow
      ? this._fboShadow.depthTexture
      : this._fbo.read.getTexture(3);

    this._drawSwarm
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDepthMap", tShadow, 3)
      .bindTexture("uColorMap", Assets.get(`00${Config.colorIndex}`), 4)
      .bindTexture("uMap", Assets.get(`butterfly`), 5)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uContrast", Config.contrast)
      .uniform("uBrightness", Config.brightness)
      .uniform("uScale", Config.bufferflySwarmScale)
      .uniform("uMaxHeight", Config.maxHeight)
      .draw();
  }

  render(mOffsetCircle) {
    this._drawSwarm.uniform("uOffsetCircle", mOffsetCircle);

    this._drawButterflies(true);

    // const s = 0.05;
    // GL.setModelMatrix(mat4.create());
    // this._drawCamera.draw(this._cameraLight, [1, 0, 0]);
    // this._drawBall.draw(this._light, [s, s, s], [1, 0.5, 0]);
    // this._drawBall.draw(this._center, [s, s, s], [1, 0, 0]);
  }

  getTexture(mIndex) {
    return this._fbo.read.getTexture(mIndex);
  }

  get fbo() {
    return this._fbo;
  }

  get mtxShadow() {
    return this._mtxShadow;
  }

  get shadowMap() {
    return this._fboShadow.depthTexture;
  }
}

export default SceneSwarm;
