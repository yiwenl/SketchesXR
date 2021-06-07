import {
  GL,
  Scene,
  Draw,
  Geom,
  DrawAxis,
  DrawCopy,
  DrawBall,
  DrawCamera,
  FboPingPong,
  FrameBuffer,
  CameraOrtho,
  ShaderLibs,
  EaseNumber,
} from "alfrid";
import { resize, biasMatrix } from "./utils";
import Scheduler from "scheduling";
import { random, randomFloor } from "randomutils";

import Config from "./Config";
import Assets from "./Assets";
import { isARSupported, setCamera, hitTest, endXR } from "./ARUtils";
import { mat4, vec2, vec3 } from "gl-matrix";

// draw calls
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";
import DrawUniverse from "./DrawUniverse";
import DrawDisk from "./DrawDisk";
import DrawVignette from "./DrawVignette";
import DrawMark from "./DrawMark";

// fluid simulation
import FluidSimulation from "./fluid-sim";

// shaders
import vs from "shaders/basic.vert";
import vsPass from "shaders/pass.vert";
import vsFloor from "shaders/floor.vert";
import fsSim from "shaders/sim.frag";
import fsFloor from "shaders/floor.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(0.75);
    this.orbitalControl.lock();

    // hit
    const { ringPosition } = Config;
    this.mtxHit = mat4.create();
    this.mtxDebug = mat4.create();
    this.mtxParticles = mat4.create();
    mat4.translate(this.mtxParticles, this.mtxParticles, [0, ringPosition, 0]);
    mat4.translate(this.mtxHit, this.mtxHit, [0, -ringPosition, 0]);

    // light
    this._light = vec3.fromValues(0, 1.9, 0.75);
    this._lightTarget = vec3.fromValues(0, 0, -0.05);
    vec3.rotateX(this._light, this._light, [0, 0, 0], 0.15);
    const rx = 0.25;
    const ry = 0.1;
    this._cameraLight = new CameraOrtho(-rx, rx, ry, -ry, 1.75, 2.15);
    this._mtxShadow = mat4.create();
    this._cameraLight.lookAt(this._light, this._lightTarget);

    this._lightTransformed = vec3.create();
    this._lightTargetTransformed = vec3.create();

    // states
    this._offsetHit = new EaseNumber(0);
    this._particleScale = 0.5;
    this._hasStarted = false;
    this._hasPresented = false;

    // fluid
    this._fluid = new FluidSimulation({
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_DISSIPATION: 0.98,
    });

    // set size
    this.resize();

    // animation
    this._offsetVignette = new EaseNumber(1, 0.1);
    this.openValue = 0;
    this.targetOpenValue = 0;
    this.open();

    // this._offsetPulse = new EaseNumber(0, 0.1);
    this.pulseValue = 0;
    this.targetPulseValue = 0;
    this.easingPulse = 0.1;
    this.pulse();

    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this.open();
      }
    });
  }

  logState() {
    const { gl } = GL;
    const STATES = ["CULL_FACE", "DEPTH_TEST"];
    STATES.forEach((state) => {
      console.log(state, gl.getParameter(gl[state]));
    });
  }

  open() {
    this.openValue = 0;
    this.targetOpenValue = 1;
  }

  present() {
    this.openValue = 0;
    this.targetOpenValue = 0;
    this._offsetVignette.value = 0;

    window.addEventListener("touchstart", (e) => this._onTouch());
    mat4.identity(this.mtxHit);
    this._particleScale = 1;
    this._hasPresented = true;

    // resettting state
    GL.enableAlphaBlending();
    GL.enable(GL.CULL_FACE);
    GL.enable(GL.DEPTH_TEST);

    this._drawSave
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 1)
      .draw();

    this.logState();
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

    // shadow map
    let fboSize = 2048 / 2;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);

    // portal texture
    fboSize = 2048;
    this._fboUniverse = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dCamera = new DrawCamera();

    this._drawMark = new DrawMark();

    let s = 0.5;
    this._debugFluid = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xy"))
      .useProgram(vs, ShaderLibs.copyFrag);

    this._drawRender = new DrawRender();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 1);

    s = 1;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vsFloor, fsFloor);

    this._drawDisk = new DrawDisk();
    this._drawUniverse = new DrawUniverse()
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(this._fboUniverse);

    // init particles
    this._drawSave = new DrawSave()
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 1)
      .draw();

    this._fboPos.bind();
    GL.clear(0, 0, 0, 1);
    this._dCopy.draw(this._fbo.read.getTexture(0), 0);
    this._fboPos.unbind();

    this._drawVignette = new DrawVignette();
  }

  _onTouch() {
    if (this._hasStarted) {
      Config.colorIndex = randomFloor(10);
      // console.log("end XR");
      // endXR().then(() => {
      //   console.log("session ended");
      //   window.location.reload();
      // });
      return;
    }
    const mtxHit = hitTest();

    if (mtxHit !== null && !this._hasStarted) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this.open();
    }
  }

  _updateFluid() {
    const { sin, cos, PI } = Math;
    const num = 6;
    let x, y, r;
    let noise = 1.5;
    let radius = 1;
    let f = 1;
    let dir = vec2.create();

    r = 0.1;
    let t = 0.2;

    const theta = random(PI * 2);

    for (let i = 0; i < num; i++) {
      const a = (i / num) * PI * 2 + random(-t, t) + theta;
      x = cos(a) * r;
      y = sin(a) * r;

      dir[0] = x;
      dir[1] = y;
      vec2.normalize(dir, dir);
      vec2.rotate(dir, dir, [0, 0], PI * random(0.1, 0.4) * 0.5);

      x += 0.5;
      y += 0.5;

      f = random(1.5, 1.1) * 2 + this.pulseValue * 1.0;
      radius = random(0.5, 1.5) + this.pulseValue * 0.5;
      this._fluid.updateFlow(
        [x, y],
        dir,
        f / num,
        radius,
        noise + this.pulseValue
      );
    }

    this._fluid.update();
  }

  update() {
    mat4.identity(this.mtxDebug, this.mtxDebug);
    mat4.translate(this.mtxDebug, this.mtxDebug, [0, 0, -0.05]);

    this._updateFluid();

    // update particles
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uPosOrgMap", this._fboPos.texture, 4)
      // .bindTexture("uDensityMap", this._fluid.density, 5)
      .bindTexture("uFluidMap", this._fluid.velocity, 5)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uOffsetOpen", 1)
      .uniform("uSimScale", Config.ringRadius / 0.05)
      .uniform("uFloor", -Config.ringPosition)
      .draw();
    this._fbo.swap();

    // update shadow map
    this._updateShadowMap();

    if (isARSupported && this._hasPresented) {
      setCamera(GL, this.camera, false);
    } else {
      GL.setMatrices(this.camera);
    }
    this._drawUniverse.draw();
  }

  _updateShadowMap() {
    const light = vec3.create();
    const origin = vec3.create();
    const mtx = mat4.create();
    mat4.copy(mtx, this.mtxHit);

    vec3.transformMat4(light, this._light, mtx);
    vec3.transformMat4(origin, this._lightTarget, mtx);
    this._cameraLight.lookAt(light, origin);

    vec3.copy(this._lightTransformed, light);
    vec3.copy(this._lightTargetTransformed, origin);

    mat4.mul(
      this._mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    GL.setMatrices(this._cameraLight);
    this._fboShadow.bind();
    GL.clear(1, 0, 0, 1);
    this._renderParticles(false);
    this._fboShadow.unbind();
  }

  _renderParticles(mWithShadow) {
    const mtx = mat4.create();
    mat4.mul(mtx, this.mtxHit, this.mtxParticles);
    GL.setModelMatrix(mtx);

    const tDepth = mWithShadow
      ? this._fboShadow.depthTexture
      : this._fboPos.texture;

    this._drawRender
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 1)
      .bindTexture("uColorMap", Assets.get(`00${Config.colorIndex}`), 2)
      .bindTexture("uDepthMap", tDepth, 3)
      .bindTexture("uParticleMap", Assets.get("particle"), 4)
      .uniform("uViewport", [GL.width, GL.height])
      .uniform("uShadowMap", mWithShadow ? 0.0 : 1.0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uParticleScale", this._particleScale)
      .uniform("uOffsetOpen", this.openValue)
      .uniform("uRingRadius", Config.ringRadius)
      .uniform("uShadowStrength", this._hasPresented ? 0.35 : 0.5)
      .draw();
  }

  pulse() {
    this.easingPulse = 0.1;
    this.targetPulseValue = random(0.5, 1);
    setTimeout(() => {
      this.easingPulse = 0.05;
      this.targetPulseValue = 0;
    }, 1000);

    let delay = randomFloor(1600, 2000);
    const fps = 90;
    delay = Math.floor(delay / fps) * fps;

    setTimeout(() => this.pulse(), delay);
  }

  render() {
    this.openValue += (this.targetOpenValue - this.openValue) * 0.025;
    this.pulseValue +=
      (this.targetPulseValue - this.pulseValue) * this.easingPulse;
    const mtx = mat4.create();
    let s;
    if (!this._hasPresented) {
      const bg = 0.01;
      GL.clear(bg, bg, bg, 1);
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

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._drawMark.uniform("uOffset", this._offsetHit.value).draw();

    this._renderParticles(true);
    this._drawDisk
      .bindTexture("texture", this._fboUniverse.texture, 0)
      .uniform("uScale", this.openValue)
      .draw();

    GL.setModelMatrix(this.mtxHit);
    this._drawFloor
      .uniform("uShadowMatrix", this._mtxShadow)
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .draw();

    if (this._offsetVignette.value > 0.01) {
      GL.disable(GL.DEPTH_TEST);
      this._drawVignette
        .uniform("uRatio", GL.aspectRatio)
        .uniform("uOpacity", this._offsetVignette.value)
        .draw();
      GL.enable(GL.DEPTH_TEST);
    }

    if (Config.debug) {
      mat4.mul(mtx, this.mtxHit, this.mtxDebug);
      GL.setModelMatrix(mtx);
      s = 100;
      GL.viewport(0, 0, s, s);
      this._dCopy.draw(this._fbo.read.getTexture(0));
    }
  }

  resize() {
    const pixelRatio = 2.0;
    const { innerWidth, innerHeight } = window;
    resize(innerWidth, innerHeight);
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
