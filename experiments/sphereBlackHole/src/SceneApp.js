import {
  GL,
  Draw,
  Geom,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  Scene,
  EaseNumber,
  GLShader,
  FrameBuffer,
  FboPingPong,
  CameraOrtho,
} from "alfrid";
import Config from "./Config";

import { isARSupported, setCamera, hitTest, getCameraTexture } from "./ARUtils";
import { random } from "./utils";
import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";
import DrawFloor from "./DrawFloor";
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";

import { ShaderLibs } from "./alfrid/shader";
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";
import { vec2, vec3 } from "gl-matrix";

// fluid simulation
import FluidSimulation from "./fluid-sim";

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // this.orbitalControl.lock();
    this.orbitalControl.rx.value = -0.4;
    this.orbitalControl.ry.value = -0.4;
    this.orbitalControl.radius.setTo(10);
    this.particleScale = 3;

    // hit
    this.mtxIdentity = mat4.create();
    this.mtxHit = mat4.create();
    this.mtxModel = mat4.create();
    this.mtxAR = mat4.create();
    const s = 0.01;
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);
    mat4.translate(this.mtxModel, this.mtxModel, [0, -1, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;
    this._pulse = new EaseNumber(1, 0.05);
    this._pulse.limit(0.7, 1.5);

    // fluid
    const DISSIPATION = 0.985;
    this._fluid = new FluidSimulation({
      DENSITY_DISSIPATION: DISSIPATION,
      VELOCITY_DISSIPATION: DISSIPATION,
      PRESSURE_DISSIPATION: DISSIPATION,
    });

    let num = 8;
    this._emitPositions = [];
    while (num--) {
      this._emitPositions.push(random(Math.PI * 2));
    }

    // fluid camera
    this._cameraFluid = new CameraOrtho();
    const r = 0.7;
    this._cameraFluid.ortho(-r, r, r, -r, 0.1, 100);

    setTimeout(() => {
      canSave = true;
    }, 500);

    this.pulsing();
  }

  pulsing() {
    this._pulse.value += random(-1, 1) * 0.4;
    console.log(this._pulse.targetValue);
    setTimeout(() => this.pulsing(), random(2000, 1000));
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
    this.particleScale = 1;
    mat4.identity(this.mtxModel, this.mtxModel);
  }

  _initTextures() {
    this.resize();

    this._fboCamera = new FrameBuffer(GL.width, GL.height);
    this._fboComposed = new FrameBuffer(GL.width, GL.height);
    const fboSize = 2048;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
    this._fboShadow.bind();
    GL.clear(0, 0, 0, 0);
    this._fboShadow.unbind();

    this._fboCamera.bind();
    GL.clear(0, 0, 0, 0);
    this._fboCamera.unbind();

    const { numParticles: num } = Config;
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 5);
    this._fboPosOrg = new FrameBuffer(num, num, oSettings);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    this._dCamera = new DrawCamera();

    this._drawFloor = new DrawFloor();
    this._drawRender = new DrawRender();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 0);

    new DrawSave()
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 0)
      .draw();

    this._fboPosOrg.bind();
    GL.clear(0, 0, 0, 0);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPosOrg.unbind();
  }

  _onTouch = () => {
    // console.log("on Touch", this._hasPresented, this._hasStarted);
    if (this._hasStarted) return;
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this._offsetOpen.value = 1;
    }
  };

  _checkHit() {
    if (!this._hasStarted) {
      const mtxHit = hitTest();
      if (mtxHit !== null) {
        this._offsetHit.value = 1;
        mat4.copy(this.mtxHit, mtxHit);
      }
    }
  }

  update() {
    this.camTexture = getCameraTexture();

    if (!this.meshTri) {
      this.meshTri = Geom.bigTriangle();
      this.shaderCopy = new GLShader(
        ShaderLibs.bigTriangleVert,
        ShaderLibs.copyFrag
      );
    }

    if (this.camTexture) {
      const { gl } = GL;
      this._fboCamera.bind();
      GL.clear(0, 0, 0, 1);

      this.shaderCopy.bind();
      gl.activeTexture(gl.TEXTURE0);
      const uniformLoc = gl.getUniformLocation(
        this.shaderCopy.shaderProgram,
        "texture"
      );
      gl.uniform1i(uniformLoc, 0);
      this.shaderCopy.uniform("texture", "int", 0);
      GL.draw(this.meshTri);
      this._fboCamera.unbind();
    }

    this.updateFluid();
    this.updateParticles();
    this.updateShadowMap();
  }

  updateFluid() {
    const num = 6;
    const { PI } = Math;
    const center = [0.55, 0.15];
    const r = 0.25;
    for (let i = 0; i < num; i++) {
      // this._emitPositions.forEach((a) => {
      // const a = (i / num) * PI * 2;
      const a = random(PI * 2.0);
      const pos = [r, 0];
      const dir = [0, 1];
      vec2.rotate(pos, pos, [0, 0], a);
      vec2.rotate(dir, dir, [0, 0], a);
      vec2.rotate(dir, dir, [0, 0], random(1.0, 1.4));
      vec2.add(pos, pos, center);

      const strength = random(1, 3) * this._pulse.value;
      const radius = random(2, 3) * this._pulse.value;
      const noise = 0.5;
      this._fluid.updateFlow(pos, dir, strength, radius, noise);
    }

    this._fluid.update();

    // update fluid camera
    const posCam = vec3.clone(this.camera.position);
    vec3.normalize(posCam, posCam);
    vec3.scale(posCam, posCam, 5);
    this._cameraFluid.lookAt(posCam, [0, 0, 0]);
  }

  updateParticles() {
    GL.setMat;
    GL.setModelMatrix(this.mtxModel);
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 4)
      .bindTexture("uPosOrgMap", this._fboPosOrg.getTexture(), 5)
      .bindTexture("uCameraMap", this._fboCamera.texture, 6)
      .bindTexture("uFluidMap", this._fluid.velocity, 7)
      .bindTexture("uDensityMap", this._fluid.density, 8)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uFluidMatrix", this._cameraFluid.matrix)
      .draw();

    this._fbo.swap();
  }

  updateShadowMap() {}

  _renderParticles(mShadow) {
    this._drawRender
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 1)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 2)
      .uniform("uViewport", "vec2", [GL.width, GL.height])
      .uniform("uParticleScale", "float", this.particleScale)
      .draw();
  }

  render() {
    let s;
    if (!isARSupported || !this._hasPresented) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    if (this._hasPresented) {
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxAR);
    }

    GL.setModelMatrix(this.mtxIdentity);
    this._dCamera.draw(this._cameraFluid);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    this._drawFloor.draw();
    this._renderParticles();

    s = 300;
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._fluid.velocity);
    GL.viewport(s, 0, s, s);
    this._dCopy.draw(this._fluid.density);

    GL.enable(GL.DEPTH_TEST);
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    GL.setSize(innerWidth, innerHeight);
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
