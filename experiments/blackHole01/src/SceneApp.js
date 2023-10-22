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
  TweenNumber,
  FrameBuffer,
  FboPingPong,
  CameraOrtho,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import Config from "./Config";
import Assets from "./Assets";
import Scheduler from "scheduling";
import { biasMatrix, random, randomInt } from "./utils";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";

import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";
import { vec2, vec3, mat4 } from "gl-matrix";

// fluid simulation
import FluidSimulation from "./fluid-sim";

// draw calls
import DrawSave from "./DrawSave";
import DrawBlocks from "./DrawBlocks";
import DrawParticles from "./DrawParticles";
import DrawFloor from "./DrawFloor";
import DrawRibbon from "./DrawRibbon";
import DrawBg from "./DrawBg";
import DrawBlackhole from "./DrawBlackhole";

// shaders
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";

const NUM_SEG = 12;

class SceneApp extends Scene {
  constructor() {
    super();

    // this.orbitalControl.lock();
    this.orbitalControl.rx.value = -0.4;
    this.orbitalControl.ry.value = -0.4;

    // hit
    this.mtxHit = mat4.create();
    this.mtxModel = mat4.create();
    this.mtxAR = mat4.create();
    const s = 0.5;
    mat4.translate(this.mtxAR, this.mtxAR, [0, 3 * s, 0]);
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);
    this.touchScale = new TouchScale();
    this.touchScale.limit(0.1, 5);
    mat4.translate(this.mtxModel, this.mtxModel, [0, 2.5, 0]);

    this._pointCenter = [0, 0, 0];

    // fluid
    const DISSIPATION = 0.985;
    this._fluid = new FluidSimulation({
      DENSITY_DISSIPATION: DISSIPATION,
      VELOCITY_DISSIPATION: DISSIPATION,
      PRESSURE_DISSIPATION: DISSIPATION,
    });

    // shadow
    this._cameraLight = new CameraOrtho();
    const r = 2.5;
    this._cameraLight.ortho(-r, r, r, -r, 2, 9);

    this._posLight = [0, 7, 3];
    this._posCenter = [0, 0, 0];
    this.mtxShadow = mat4.create();

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new TweenNumber(0, "expInOut", 0.004);
    this._offsetOpen2 = new TweenNumber(0, "linear", 0.003);
    this._hasStarted = false;
    this._hasPresented = false;
    this._delayOpen = 3500;

    this._offsetOpen.value = 1;
    this.timeoutOpen = setTimeout(() => {
      this._offsetOpen2.value = 1;
    }, 2500);
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._offsetOpen2.setTo(0);
    this._hasPresented = true;
    window.clearTimeout(this.timeoutOpen);
  }

  _initTextures() {
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    const { numParticles: num } = Config;
    this._fbo = new FboPingPong(num, num, oSettings, 5);
    this._fboPos = new FrameBuffer(num, num, oSettings);

    const fboSize = 2048;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
    this._fboEnv = new FrameBuffer(GL.width, GL.height);
    this._fboBg = new FrameBuffer(GL.width, GL.height);

    this._fbos = [];
    for (let i = 0; i <= NUM_SEG; i++) {
      const fbo = new FrameBuffer(num, num, oSettings);
      this._fbos.push(fbo);
    }

    this._textureLookup = Assets.get("lookup");
    this._textureLookup.minFilter = GL.NEAREST;
    this._textureLookup.magFilter = GL.NEAREST;
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();
    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv();

    this._drawBg = new DrawBg()
      .bindFrameBuffer(this._fboBg)
      .setClearColor(0, 0, 0, 0);

    this._drawBlackhole = new DrawBlackhole();
    this._drawFloor = new DrawFloor();
    this._drawBlocks = new DrawBlocks();
    this._drawParticles = new DrawParticles();
    this._drawRibbon = new DrawRibbon();
    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 1);

    // init particles
    new DrawSave()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fbo.read)
      .draw();

    this._fboPos.bind();
    GL.clear(0, 0, 0, 0);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPos.unbind();

    this._fbos.forEach((fbo) => {
      fbo.bind();
      GL.clear(0, 0, 0, 0);
      this._dCopy.draw(this._fbo.read.getTexture(0));
      fbo.unbind();
    });
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

      setTimeout(() => {
        this._offsetOpen2.value = 1;
      }, this._delayOpen);
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

  updateFluid() {
    let num = randomInt(5, 8);

    const noise = 1;
    const { PI } = Math;
    const center = [0.5, 0.5];
    const time = Scheduler.getElapsedTime() * 0.5;

    for (let i = 0; i < num; i++) {
      const a = (i / num) * PI * 2.0 + time + random(-1, 1) * 0.2;
      const pos = [random(0.4, 0.2), 0];
      const dir = [-0.5, -1];
      vec2.normalize(dir, dir);
      vec2.rotate(pos, pos, [0, 0], a);
      vec2.rotate(dir, dir, [0, 0], a - random(0.75, 1.25));

      const str = random(1, 2);
      const rad = random(1, 3);
      vec2.add(pos, pos, center);

      this._fluid.updateFlow(pos, dir, str, rad, noise);
    }

    this._fluid.update();
  }

  update() {
    if (this._hasPresented) updateCameraTexture();
    else {
      this._fboEnv.bind();
      GL.clear(0, 0, 0, 1);
      GL.setMatrices(this.camera);
      this._dEnv.draw();
      this._fboEnv.unbind();
    }

    const tEnv =
      isARSupported && this._hasPresented
        ? getCameraTexture()
        : this._fboEnv.texture;

    this._drawBg
      .bindTexture("uMap", tEnv, 0)
      .bindTexture("uLookupMap", this._textureLookup, 1)
      .uniform("uOffset", this._offsetOpen.value)
      .draw();

    if (!isARSupported || !this._hasPresented) {
    } else {
      setCamera(GL, this.camera, false);
    }

    this.updateFluid();

    // GL.setModelMatrix(this.mtxModel);
    const force = this._hasPresented ? 2 : 1;
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 4)
      .bindTexture("uPosOrgMap", this._fboPos.texture, 5)
      .bindTexture("uFluidMap", this._fluid.velocity, 6)
      .bindTexture("uDensityMap", this._fluid.density, 7)
      .bindTexture("uEnvMap", this._fboBg.texture, 8)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uBound", 3)
      .uniform("uForce", force)
      .uniform("uLocalMatrix", this.mtxModel)
      .draw();

    this._fbo.swap();

    this._updateShadow();

    // update ribbon position
    const fbo = this._fbos.shift();
    fbo.bind();
    GL.clear(0, 0, 0, 1);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    fbo.unbind();

    this._fbos.push(fbo);
  }

  _updateShadow() {
    const posLight = [0, 0, 0];
    const posCenter = [0, 0, 0];
    vec3.transformMat4(posLight, this._posLight, this.mtxHit);
    vec3.transformMat4(posCenter, this._posCenter, this.mtxHit);
    this._cameraLight.lookAt(posLight, posCenter);

    mat4.mul(
      this.mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this.mtxShadow, biasMatrix, this.mtxShadow);

    GL.enable(GL.DEPTH_TEST);
    this._fboShadow.bind();
    GL.clear(1, 0, 0, 1);
    GL.setMatrices(this._cameraLight);
    GL.setModelMatrix(this.mtxModel);
    this._renderBlocks(false);
    this._fboShadow.unbind();
  }

  _renderBlocks(mShadow) {
    const tDepth = mShadow
      ? this._fboShadow.depthTexture
      : this._fboPos.texture;

    this._drawBlocks
      // this._drawParticles
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 2)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 3)
      .bindTexture("uDepthMap", tDepth, 4)
      .uniform("uShadowMatrix", this.mtxShadow)
      .uniform("uOffset", this._offsetOpen2.value)
      .uniform("uViewport", [GL.width, GL.height])
      .draw();

    this._fbos.forEach(({ texture }, i) => {
      this._drawRibbon.bindTexture(`uPosMap${i}`, texture, i);
    });
    const index = this._fbos.length;
    GL.disable(GL.CULL_FACE);
    this._drawRibbon
      .bindTexture("uDepthMap", tDepth, index)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), index + 1)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), index + 2)
      .bindTexture("uMap", Assets.get("color"), index + 3)
      .uniform("uShadowMatrix", this.mtxShadow)
      .uniform("uOffset", this._offsetOpen2.value)
      .draw();
    GL.enable(GL.CULL_FACE);
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
      mat4.mul(this.mtxModel, this.mtxAR, this.touchScale.matrix);
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxModel);
    }

    // if (!this._hasPresented || !isARSupported) {
    // if (!this._hasPresented) {
    GL.disable(GL.DEPTH_TEST);

    const mtx = mat4.create();
    mat4.mul(mtx, this.camera.matrix, this.mtxModel);
    vec3.transformMat4(this._pointCenter, [0, 0, 0], mtx);
    const cx = this._pointCenter[0] * 0.5 + 0.5;
    const cy = this._pointCenter[1] * 0.5 + 0.5;

    this._drawBlackhole
      .bindTexture("uMap", this._fboBg.texture, 0)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uRatio", GL.aspectRatio)
      .uniform("uCenter", [cx, cy])
      .uniform("uOffset", this._offsetOpen.value)
      .draw();
    GL.enable(GL.DEPTH_TEST);
    // }

    GL.setModelMatrix(mat4.create());
    // this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    // this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    GL.enable(GL.DEPTH_TEST);

    // draw world
    this._renderBlocks(true);

    GL.setModelMatrix(this.mtxHit);
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this.mtxShadow)
      .draw();
    GL.disable(GL.DEPTH_TEST);

    if (isARSupported && this._hasPresented) {
      s = 5;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCameraTexture());
    }
  }
}

export default SceneApp;
