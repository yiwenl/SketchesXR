import {
  GL,
  Scene,
  Draw,
  Geom,
  DrawBall,
  DrawCopy,
  DrawAxis,
  EaseNumber,
  FboArray,
  Object3D,
  FrameBuffer,
} from "alfrid";
import { resize, saveImage, getDateString, iOS } from "./utils";

import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4, vec2, vec3 } from "gl-matrix";
import { random } from "randomutils";
import Scheduler from "scheduling";

// draw calls
import DrawMark from "./DrawMark";
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";

// fluid simulation
import FluidSimulation from "./fluid-sim";

// shaders
import vs from "shaders/pass.vert";
import fs from "shaders/sim.frag";

let hasSaved = false;
let canSave = false;

const DEFAULT_Y = 0.5;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);

    // matrices
    this.mtxHit = mat4.create();
    this.mtxWorld = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -DEFAULT_Y, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;
    this._containerWorld = new Object3D();
    this._containerWorld.y = DEFAULT_Y;
    this.pulseValue = new EaseNumber(0);

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
      }, 1500);
    }
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());

    this._offsetOpen.setTo(0);
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
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dMark = new DrawMark();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vs, fs)
      .setClearColor(0, 0, 0, 1);

    this._drawRender = new DrawRender();

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

  _updateFluid() {
    // console.log('Update ')s
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

      f = random(1.5, 1.1) * 2 + this.pulseValue.value * 1.0;
      radius = random(0.5, 1.5) + this.pulseValue.value * 0.5;
      this._fluid.updateFlow(
        [x, y],
        dir,
        f / num,
        radius,
        noise + this.pulseValue.value
      );
    }

    this._fluid.update();
  }

  _update() {
    this._updateFluid();

    // update particles
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uPosOrgMap", this._fboPosOrg.texture, 4)
      .draw();

    this._fbo.swap();

    mat4.mul(this.mtxWorld, this.mtxHit, this._containerWorld.matrix);
  }

  _renderParticles(mShadow) {
    const gap = 0.1;
    const total = this._fbo.all.length;
    for (let i = 0; i < total; i++) {
      const z = (-total / 2) * gap + gap * i;
      const fbo = this._fbo.all[i];

      this._drawRender
        .bindTexture("uPosMap", fbo.getTexture(0), 0)
        .bindTexture("uDataMap", fbo.getTexture(1), 1)
        .uniform("uViewport", [GL.width, GL.height])
        .uniform("uPosition", [0, 0, z])
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

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxWorld);
    this._renderParticles();

    s = Math.min(300, GL.width / 4);
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._fluid.velocity);
    GL.viewport(s, 0, s, s);
    this._dCopy.draw(this._fluid.density);
    GL.viewport(s * 2, 0, s, s);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    GL.viewport(s * 3, 0, s, s);
    this._dCopy.draw(this._fboPosOrg.texture);

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
      const pixelRatio = 1.0;
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
