import {
  GL,
  Scene,
  Draw,
  Geom,
  DrawBall,
  DrawCopy,
  DrawCamera,
  CameraOrtho,
  EaseNumber,
  FboArray,
  Object3D,
  FrameBuffer,
} from "alfrid";
import { resize, saveImage, getDateString, iOS, biasMatrix } from "./utils";

import Assets from "./Assets";
import Config from "./Config";
import TouchScale from "./utils/TouchScale";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4, vec2, vec3 } from "gl-matrix";
import { random, randomFloor } from "randomutils";
import Scheduler from "scheduling";

// draw calls
import DrawMark from "./DrawMark";
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";
import DrawFloor from "./DrawFloor";

// fluid simulation
import FluidSimulation from "./fluid-sim";

// shaders
import vs from "shaders/pass.vert";
import fs from "shaders/sim.frag";

let hasSaved = false;
let canSave = false;

const DEFAULT_Y = 0.5;
const LIGHT_HEIGHT = 1.2;

const SHADOW = {
  boundary: 2,
  near: 0.4,
  far: 1.21,
};

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.12);
    this.orbitalControl.ry.setTo(0.25);
    this.orbitalControl.radius.setTo(3);

    // matrices
    this.mtxHit = mat4.create();
    this.mtxWorld = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -DEFAULT_Y, 0]);

    // shadow
    this._lightPos = vec3.create();
    this._lightTarget = vec3.create();
    this._mtxShadow = mat4.create();
    const r = SHADOW.boundary;
    const { near, far } = SHADOW;
    this._cameraLight = new CameraOrtho(-r, r, r, -r, near, far);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1, 0.05);
    this._hasStarted = false;
    this._hasPresented = false;
    this._container = new Object3D();
    this._container.y = DEFAULT_Y;
    this.pulse = new EaseNumber(0, 0.15);
    this._particleScale = 1.0;
    this.globalScale = new TouchScale();

    // fluid
    this._fluid = new FluidSimulation({
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_DISSIPATION: 0.98,
    });

    // set size
    this.resize();
    this._pulse();

    if (!GL.isMobile) {
      setTimeout(() => {
        canSave = true;
      }, 1500);

      // window.gui && gui.add(this, "toggle");
    }
  }

  toggle() {
    this._offsetOpen.value = this._offsetOpen.targetValue === 1 ? 0 : 1;
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());

    this._offsetOpen.setTo(0);
    this.globalScale.setTo(2);
    this._particleScale = 2.0;
    this._hasPresented = true;
  }

  _initTextures() {
    const { numParticles: num, numRings } = Config;

    const type = iOS ? GL.HALF_FLOAT : GL.FLOAT;
    const oSettings = {
      type,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    this._fbo = new FboArray(numRings, num, num, oSettings, 4);
    this._fboPosOrg = new FrameBuffer(num, num, oSettings);

    // clear all fbo
    this._fbo.all.forEach((fbo) => {
      fbo.bind();
      GL.clear(0, 0, 0, 1);
      fbo.unbind();
    });

    //  shadow map
    const fboSize = GL.isMobile ? 2048 : 4096;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    this._dCamera = new DrawCamera();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vs, fs)
      .setClearColor(0, 0, 0, 1);

    this._drawRender = new DrawRender();
    this._drawFloor = new DrawFloor();

    // init particles pos
    new DrawSave()
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(this._fbo.read)
      .draw();

    this._fboPosOrg.bind();
    GL.clear(0, 0, 0, 1);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPosOrg.unbind();
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

  _pulse() {
    this.pulse.setTo(random(0.5, 1));
    this.pulse.value = 0.0;

    let delay = randomFloor(5000, 8000);

    setTimeout(() => this._pulse(), delay);
  }

  _updateFluid() {
    // console.log('Update ')s
    const { sin, cos, PI } = Math;
    const num = 6;
    let x, y, r;
    let noise = 1.5;
    let radius = 1;
    let f = 1;
    let dir = vec2.create();

    r = 0.12;
    let t = 0.2;

    const theta = random(PI * 2);

    for (let i = 0; i < num; i++) {
      const a = (i / num) * PI * 2 + random(-t, t) + theta;
      x = cos(a) * r;
      y = sin(a) * r;

      dir[0] = x;
      dir[1] = y;
      vec2.normalize(dir, dir);
      vec2.rotate(dir, dir, [0, 0], PI * random(0.2, 0.4) * 0.25);

      x += 0.5;
      y += 0.5;

      const pow = Math.pow(this.pulse.value + 0.5, 3.0);

      f = random(1.5, 1.1) + pow * 7.0;
      radius = random(1, 2) + pow;
      this._fluid.updateFlow([x, y], dir, f / num, radius, noise);
    }

    this._fluid.update();
  }

  _update() {
    let s = this.globalScale.value;
    this._container.y = DEFAULT_Y * s;
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = s;

    this._updateFluid();

    // update particles
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uPosOrgMap", this._fboPosOrg.texture, 4)
      .bindTexture("uFluidMap", this._fluid.velocity, 5)
      .bindTexture("uDensityMap", this._fluid.density, 6)
      .uniform("uTime", Scheduler.getElapsedTime() * 0.1)
      .uniform("uPulse", this.pulse.value)
      .draw();

    this._fbo.swap();

    // update shadow map
    const mtxLight = mat4.clone(this.mtxHit);

    vec3.transformMat4(this._lightTarget, [0, 0, 0], mtxLight);
    vec3.transformMat4(this._lightPos, [0, LIGHT_HEIGHT * s, 0], mtxLight);
    this._cameraLight.lookAt(this._lightPos, this._lightTarget, [0, 0, 1]);

    const near = SHADOW.near * s;
    const far = SHADOW.far * s;
    const r = SHADOW.boundary * s;
    const t = 0.2;
    this._cameraLight.ortho(-r * t, r * t, r, -r, near, far);

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
    this._renderParticles(false);
    this._fboShadow.unbind();

    // reset camera
    GL.setMatrices(this.camera);
  }

  _renderParticles(mWithShadow) {
    const tDepth = mWithShadow
      ? this._fboShadow.depthTexture
      : this._fboPosOrg.texture;

    GL.setModelMatrix(this.mtxWorld);
    const gap = 0.3;
    const skip = 4;
    const total = this._fbo.all.length / skip;
    for (let i = 0; i < total; i++) {
      const z = (-total / 2) * gap + gap * i + gap * 0.5;
      const fbo = this._fbo.all[i * skip];

      this._drawRender
        .bindTexture("uPosMap", fbo.getTexture(0), 0)
        .bindTexture("uDataMap", fbo.getTexture(3), 1)
        .bindTexture("uParticleMap", Assets.get("particle"), 2)
        .bindTexture("uColorMap", Assets.get(`00${Config.colorIndex}`), 3)
        .bindTexture("uDepthMap", tDepth, 4)
        .uniform("uShadowMatrix", this._mtxShadow)
        .uniform("uViewport", [GL.width, GL.height])
        .uniform("uPosition", [0, 0, z])
        .uniform("uParticleScale", this._particleScale * this.globalScale.value)
        .uniform("uShadowStrength", 0.25)
        .uniform("uOffsetOpen", this._offsetOpen.value)
        .draw();
    }
  }

  render() {
    this._update();

    let s;
    if (!isARSupported) {
      const g = 0.1;
      GL.clear(g, g, g, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    mat4.mul(this.mtxWorld, this.mtxHit, this._container.matrix);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    this._drawFloor
      .uniform("uShadowMatrix", this._mtxShadow)
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uScale", this.globalScale.value)
      .draw();

    this._renderParticles(true);

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    const pixelRatio = 1.5;
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
