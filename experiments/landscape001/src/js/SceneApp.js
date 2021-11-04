import {
  GL,
  Scene,
  Geom,
  Draw,
  DrawBall,
  DrawCopy,
  DrawAxis,
  DrawCamera,
  CameraOrtho,
  FboPingPong,
  FrameBuffer,
} from "alfrid";
import { resize, biasMatrix, iOS } from "./utils";
import { random } from "randomutils";
import Scheduler from "scheduling";

import Config from "./Config";
import Assets from "./Assets";
import { vec3, mat4 } from "gl-matrix";

// fluid simulation
import FluidSimulation from "./fluid-sim";

// draw calls
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";
import DrawFloor from "./DrawFloor";

// shaders
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    let r = 0.8;
    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.rx.limit(-r, r);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(12);
    // this.orbitalControl.radius.limit(10, 10);

    this._camFluid = new CameraOrtho();
    r = 4;
    this._camFluid.ortho(-r, r, r, -r, 1, 8);

    // light
    r = 4.5;
    this._camLight = new CameraOrtho();
    this._camLight.ortho(-r, r, r, -r, 0.5, 9);
    this._lightPos = [0, 4, 0.5];
    this._camLight.lookAt(this._lightPos, [0, 0, 0]);

    // matrices
    this._mtxFluid = mat4.create();
    this._mtxShadow = mat4.create();
    mat4.mul(this._mtxShadow, this._camLight.projection, this._camLight.view);
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    // fluid
    this._fluid = new FluidSimulation({
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_DISSIPATION: 0.98,
    });

    setInterval(() => this._updateParticles(), 1000 / 60);

    this.seed = random(100, 10000);

    // set size
    this.resize();
  }

  _initTextures() {
    const { numParticles: num } = Config;
    const type = iOS() ? GL.HALF_FLOAT : GL.FLOAT;
    const oSettings = {
      type,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
      mipmap: false,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 4);
    this._fboPos = new FrameBuffer(num, num, oSettings);

    let fboSize = 1024;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dCamera = new DrawCamera();

    this._drawRender = new DrawRender();
    this._drawFloor = new DrawFloor();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 1);

    this._drawSave = new DrawSave()
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 1)
      .draw();

    this._fboPos.bind();
    GL.clear(0, 0, 0, 1);
    this._dCopy.draw(this._fbo.read.getTexture(0), 0);
    this._fboPos.unbind();
  }

  _updateParticles() {
    let speed = 1;
    if (GL.isMobile) {
      // speed = iOS() ? 1 : 0.1;
    }
    // update particles
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uPosOrgMap", this._fboPos.texture, 4)
      .bindTexture("uFluidMap", this._fluid.velocity, 5)
      // .bindTexture("uDensityMap", this._fluid.density, 6)
      .uniform("uTime", Scheduler.getElapsedTime() + this.seed)
      .uniform("uFluidMatrix", this._mtxFluid)
      .uniform("uSpeed", speed)
      .draw();
    this._fbo.swap();
  }

  _updateFluid() {
    const { sin, cos } = Math;
    const t = 0.3;
    const speed = 0.15;
    const t0 = Scheduler.getElapsedTime() * 0.5 * speed + this.seed;
    const t1 = Scheduler.getElapsedTime() * 0.75 * speed + this.seed;
    const t2 = Scheduler.getElapsedTime() * 0.6 * speed + this.seed;
    const noise = 0.2;

    let x = sin(t0) * 0.2 + 0.5;
    this._fluid.updateFlow([x, t], [cos(t0) * 0.2, 1], random(1, 3), 3, noise);

    let y = sin(t2) * 0.2 + 0.5;
    this._fluid.updateFlow([t, y], [1, cos(t2) * 0.25], random(1, 3), 3, noise);

    x = cos(t1) * 0.3 + 0.5;
    this._fluid.updateFlow(
      [x, 1 - t],
      [sin(t0) * 0.2, -1],
      random(1, 3),
      3,
      noise
    );

    this._fluid.update();
  }

  _renderParticles(mWithShadow) {
    const tDepth = mWithShadow
      ? this._fboShadow.depthTexture
      : this._fboPos.texture;

    this._drawRender
      .uniform("uViewport", [GL.width, GL.height])
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 1)
      .bindTexture("uDepthMap", tDepth, 2)
      .bindTexture("uParticleMap", Assets.get("particle"), 3)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uShadowStrength", 0.25)
      .draw();
  }

  _updateShadowMap() {
    GL.setMatrices(this._camLight);
    this._fboShadow.bind();
    GL.clear(1, 0, 0, 1);
    this._renderParticles(false);
    this._fboShadow.unbind();
  }

  update() {
    this._updateFluid();

    // update fluid camera
    const posCam = vec3.clone(this.camera.position);
    vec3.normalize(posCam, posCam);
    vec3.scale(posCam, posCam, 2);
    this._camFluid.lookAt(posCam, [0, 0, 0]);
    mat4.mul(this._mtxFluid, this._camFluid.projection, this._camFluid.view);

    this._updateShadowMap();
  }

  render() {
    GL.setMatrices(this.camera);
    let s = 0.75;
    GL.clear(s, s, s * 1.05, 1);

    s = 0.2;

    this._renderParticles(true);
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uShadowStrength", 0.25)
      .draw();

    s = 300;
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._fluid.density);
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    resize(innerWidth, innerHeight);
  }
}

export default SceneApp;
