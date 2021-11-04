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
  FboPingPong,
  FrameBuffer,
  Object3D,
  CameraOrtho,
} from "alfrid";
import { resize, saveImage, getDateString } from "./utils";
import Scheduler from "scheduling";
import { random } from "randomutils";

import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";

// fluid simulation
import FluidSimulation from "./fluid-sim";

// draw calls
import DrawMark from "./DrawMark";
import DrawMoon from "./DrawMoon";
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";

// shaders
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);

    // camera fluid
    this._camOrtho = new CameraOrtho();
    const { moonPosition: r } = Config;
    this._camOrtho.ortho(-r / 2, r / 2, r / 2, -r / 2, 0.25, 1);
    this._posCam = vec3.create();
    this._mtxFluid = mat4.create();

    // hit
    this.mtxHit = mat4.create();
    this.mtxWorld = mat4.create();

    mat4.translate(this.mtxHit, this.mtxHit, [0, -r, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    this._container = new Object3D();
    this._container.y = r;

    // fluid
    this._fluid = new FluidSimulation({
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_DISSIPATION: 0.98,
    });

    // set size
    this.resize();

    if (!GL.isMobile) {
      setTimeout(() => {
        canSave = true;
      }, 500);
    }
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    const { numParticles: num } = Config;
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
      mipmap: false,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 4);
    this._fboPos = new FrameBuffer(num, num, oSettings);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dMark = new DrawMark();
    this._dCamera = new DrawCamera();

    this._drawMoon = new DrawMoon();
    this._drawRender = new DrawRender();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim);

    // init particles
    this._drawSave = new DrawSave()
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 1)
      .draw();
  }

  _onTouch() {
    if (this._hasStarted) return;
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
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
        mat4.copy(this.mtxHit, mtxHit);
      }
    }
  }

  _updateFluid() {
    this._fluid.updateFlow([0.5, 0.75], [0, -1], 1, 2, 0.2);

    let num = 5;
    let x,
      y,
      dx,
      radius,
      strength,
      r = 0.1;

    while (num--) {
      x = random(0.5 - r, 0.5 + r);
      y = random(0.8);
      dx = random(-0.2, 0.2);
      radius = random(1, 2);
      strength = random(1, 2) * 0.1;
      this._fluid.updateFlow([x, y], [dx, -1], strength, radius, 0.2);
    }

    this._fluid.update();
  }

  _update() {
    mat4.mul(this.mtxWorld, this.mtxHit, this._container.matrix);

    this._updateFluid();

    // screen shot of the moon

    // update particles
    GL.setModelMatrix(this.mtxHit);
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      // .bindTexture("uPosOrgMap", this._fboPos.texture, 4)
      .bindTexture("uDensityMap", this._fluid.density, 5)
      .bindTexture("uFluidMap", this._fluid.velocity, 6)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uFluidMatrix", this._mtxFluid)
      .draw();

    this._fbo.swap();
  }

  _updateFluidCamera() {
    // update fluid camera position
    vec3.copy(this._posCam, this.camera.position);
    this._posCam[1] *= 0;
    vec3.normalize(this._posCam, this._posCam);
    vec3.scale(this._posCam, this._posCam, 0.5);
    const { moonPosition: r } = Config;
    this._posCam[1] = r / 2;

    // update fluid projection matrix
    this._camOrtho.lookAt(this._posCam, [0, r / 2, 0]);
    mat4.mul(this._mtxFluid, this._camOrtho.projection, this._camOrtho.view);
  }

  render() {
    let s;
    if (!isARSupported) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    this._updateFluidCamera();

    GL.setModelMatrix(this.mtxHit);
    s = 0.02;
    this._dBall.draw(this._posCam, [s, s, s], [1, 0, 0]);
    this._dCamera.draw(this._camOrtho, [1, 1, 0.2]);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    this._drawRender
      .uniform("uViewport", [GL.width, GL.height])
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 1)
      .draw();

    GL.setModelMatrix(this.mtxWorld);
    this._drawMoon.draw();

    s = 300;
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._fluid.density);
    GL.viewport(s, 0, s, s);
    this._dCopy.draw(this._fluid.velocity);

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
      const pixelRatio = 1.5;
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
