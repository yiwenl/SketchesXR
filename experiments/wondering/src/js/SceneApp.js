import {
  GL,
  Scene,
  Draw,
  Geom,
  DrawBall,
  // DrawAxis,
  DrawCopy,
  EaseNumber,
  TweenNumber,
  FboPingPong,
} from "alfrid";
import { resize } from "./utils";

import { isARSupported, setCamera, hitTest } from "./ARUtils";
import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";

import Config from "./Config";
import Assets from "./Assets";

// draw calls
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";

// shaders
import vs from "shaders/mask.vert";
import fs from "shaders/mask.frag";
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.5);
    this.orbitalControl.ry.setTo(0.5);
    this.orbitalControl.radius.setTo(1);

    // hit
    this.mtxHit = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -0.2, 0]);
    this.mtx = mat4.create();
    this.mtxScale = mat4.create();

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetColor = new EaseNumber(0);
    this._offsetOpening = new TweenNumber(1, "circInOut", 0.01);
    this._offsetParticles = new TweenNumber(1, "circInOut", 0.01);
    this._offsetTouch = new EaseNumber(1, 0.2);
    this._hasStarted = true;
    this._seed = Math.random() * 0xff;
    this._prevIndex = 9;
    this._currIndex = 9;
    this._tColorPrev = Assets.get(`00${this._prevIndex}`);
    this._tColorCurr = Assets.get(`00${this._currIndex}`);

    // set size
    this.resize();
  }

  present() {
    if (!isARSupported) {
      this._hasStarted = true;
    } else {
      this._offsetOpening.setTo(0);
      this._offsetParticles.setTo(0);
      this._hasStarted = false;
      const s = 0.5;
      mat4.scale(this.mtxScale, this.mtxScale, [s, s, s]);
      window.addEventListener("touchstart", (e) => this._onTouch());
    }
  }

  _onTouch() {
    if (!this._hasStarted) {
      const mtxHit = hitTest();
      if (mtxHit !== null) {
        mat4.copy(this.mtxHit, mtxHit);
        this._hasStarted = true;
        this._offsetHit.value = 0.5;
        this._offsetOpening.value = 1;

        setTimeout(() => {
          this._offsetParticles.value = 1;
        }, 500);
      }
    } else {
      this._randomColor();
      this._offsetTouch.setTo(3);
      this._offsetTouch.value = 1;
    }
  }

  _initTextures() {
    const { numParticles: num } = Config;
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 4);
  }

  _randomColor() {
    const index = Math.floor(Math.random() * 10);
    this._prevIndex = this._currIndex;
    this._currIndex = index;
    this._tColorPrev = Assets.get(`00${this._prevIndex}`);
    this._tColorCurr = Assets.get(`00${this._currIndex}`);

    this._offsetColor.setTo(0);
    this._offsetColor.value = 1;
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    // this._dAxis = new DrawAxis();
    this._dSave = new DrawSave();

    this._drawMask = new Draw().setMesh(Assets.get("mask")).useProgram(vs, fs);
    this._drawRender = new DrawRender();
    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 1);

    // init particles
    new DrawSave()
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(this._fbo.read)
      .draw();
  }

  update() {
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uTime", Scheduler.getElapsedTime() + this._seed)
      .uniform("uCenterY", Config.centerY)
      .uniform("uOffsetOpen", this._offsetParticles.value)
      .uniform("uOffsetTouch", this._offsetTouch.value)
      .draw();

    this._fbo.swap();
  }

  render() {
    let s;
    if (!isARSupported) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);

      if (!this._hasStarted) {
        const mtxHit = hitTest();
        if (mtxHit !== null) {
          this._offsetHit.value = 1;
          mat4.copy(this.mtxHit, mtxHit);
        }
      }
    }

    mat4.mul(this.mtx, this.mtxHit, this.mtxScale);
    GL.setModelMatrix(this.mtx);
    // this._dAxis.draw();
    s = this._offsetHit.value * 0.01;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 0, 0]);

    if (this._hasStarted) {
      this._drawMask.uniform("uOffset", this._offsetOpening.value).draw();
      this._drawRender
        .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
        .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
        .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
        .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
        .bindTexture("uColorCurrMap", this._tColorCurr, 5)
        .bindTexture("uColorPrevMap", this._tColorPrev, 6)
        .uniform("uOffsetColor", this._offsetColor.value)
        .uniform("uOffsetOpen", this._offsetParticles.value)
        .draw();
    }

    // s = 200;
    // GL.viewport(0, 0, s, s);
    // this._dCopy.draw(this._fbo.read.getTexture(0));
  }

  resize() {
    // const { innerWidth, innerHeight } = window;
    // if (GL.isMobile) {
    resize(innerWidth, innerHeight);
    // } else {
    //   resize(1080, 1920);
    // }
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
