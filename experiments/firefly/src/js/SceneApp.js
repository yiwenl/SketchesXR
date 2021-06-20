import {
  GL,
  Scene,
  Draw,
  Geom,
  Object3D,
  DrawBall,
  DrawCopy,
  EaseNumber,
  FboPingPong,
} from "alfrid";
import { resize, iOS } from "./utils";
import Scheduler from "scheduling";

import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import TouchScale from "./utils/TouchScale";

// draw calls
import DrawMark from "./DrawMark";
import DrawSave from "./DrawSave";
import DrawFloor from "./DrawFloor";
import DrawRender from "./DrawRender";

// shaders
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";
import fsCover from "shaders/color.frag";

const DEFAULT_Y = 0.2;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.8);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(10);

    // hit
    this.mtxHit = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -DEFAULT_Y, 0]);
    this._containerWorld = new Object3D();
    this._globalScale = new TouchScale(0.5, 0.1);
    this._seed = Math.random() * 0xffff;

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._particleScale = 1;
    this._hasPresented = false;

    // set size
    this.resize();
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());

    this._particleScale = 1.5;
    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    const { numParticles: num } = Config;
    const type = iOS ? GL.HALF_FLOAT : GL.FLOAT;
    const oSettings = {
      type,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 4);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();

    this._drawFloor = new DrawFloor();

    this._drawCover = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsCover)
      .uniform("uColor", [0, 0, 0.05])
      .uniform("uOpacity", 0.9);

    this._drawRender = new DrawRender();
    new DrawSave()
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(this._fbo.read)
      .draw();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 1)
      .uniform("uNum", "int", parseInt(Config.numParticles))
      .uniform("uMaxRadius", "float", Config.envSize);
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

  update() {
    this._containerWorld.scaleX = this._containerWorld.scaleY = this._containerWorld.scaleZ = this._globalScale.value;

    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uTime", Scheduler.getElapsedTime() + this._seed)
      .draw();

    this._fbo.swap();
  }

  render() {
    this.update();
    let s;
    if (!isARSupported) {
      const g = 0.9;
      GL.clear(g, g, g, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    GL.disable(GL.DEPTH_TEST);
    this._drawCover.draw();
    GL.enable(GL.DEPTH_TEST);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    const mtx = mat4.create();
    mat4.mul(mtx, this.mtxHit, this._containerWorld.matrix);
    GL.setModelMatrix(mtx);

    !this._hasPresented && this._drawFloor.draw();

    GL.disable(GL.DEPTH_TEST);
    const particleScale = this._containerWorld.scaleX * this._particleScale;
    this._drawRender
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uViewport", [GL.width, GL.height])
      .uniform("uParticleScale", particleScale)
      .draw();
    GL.enable(GL.DEPTH_TEST);
  }

  resize() {
    if (GL.isMobile || !Config.autoSave) {
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
