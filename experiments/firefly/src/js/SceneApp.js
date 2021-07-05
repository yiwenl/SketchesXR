import {
  GL,
  Scene,
  Draw,
  Geom,
  Object3D,
  DrawBall,
  DrawCamera,
  DrawCopy,
  EaseNumber,
  TweenNumber,
  FboPingPong,
  CameraOrtho,
  FrameBuffer,
} from "alfrid";
import { resize, iOS, saveImage, getDateString } from "./utils";
import Scheduler from "scheduling";

import Assets from "./Assets";
import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import TouchScale from "./utils/TouchScale";
import BlurPass from "./BlurPass";

// draw calls
import DrawMark from "./DrawMark";
import DrawSave from "./DrawSave";
import DrawFloor from "./DrawFloor";
import DrawRender from "./DrawRender";
import Subscene from "./Subscene";

// shaders
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";
import fsCover from "shaders/color.frag";

const DEFAULT_Y = 1.5;

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    // this.orbitalControl.rx.setTo(0.8);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(10);

    // hit
    this.mtxHit = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -DEFAULT_Y, 0]);
    this._containerWorld = new Object3D();
    this._globalScale = new TouchScale(0.5, 0.1);
    this._seed = Math.random() * 0xffff;
    this._containerWorld.addChild(this._subScene);

    // light map
    this._cameraLight = new CameraOrtho();
    const { envSize } = Config;
    const r = envSize / 2;
    this._cameraLight.ortho(-r, r, r, -r, 1, 10);
    this._cameraLight.lookAt([0, 5, 0], [0, 0, 0], [0, 0, -1]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new TweenNumber(1, "circularIn", 0.01);
    this._offsetCover = new EaseNumber(1, 0.05);
    this._hasStarted = false;
    this._particleScale = 2;
    this._hasPresented = false;

    // set camera
    this.updateCamera();

    // set size
    this.resize();

    if (!GL.isMobile) {
      setTimeout(() => {
        canSave = true;
      }, 500);
    }
  }

  updateCamera() {
    const { near, far } = Config;
    this.camera.setPerspective(this.camera._fov, GL.aspectRatio, near, far);
  }

  toggle() {
    this._offsetOpen.value = this._offsetOpen.targetValue === 1 ? 0 : 1;
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());

    this._particleScale = 2.5;
    this._offsetOpen.setTo(0);
    this._offsetCover.setTo(0);
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

    const fboSize = 1024;
    this._fboLight = new FrameBuffer(fboSize, fboSize, {
      minFilter: GL.LINEAR,
      magFilter: GL.LINEAR,
    });
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();
    this._dMark = new DrawMark();

    this._blurPass = new BlurPass(256);

    this._drawFloor = new DrawFloor();

    this.bgColor = [19, 23, 47].map((v) => (v / 255) * 0.5);
    // const bgColor = [24, 37, 100].map((v) => (v / 255) * 0.5);
    this._drawCover = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsCover)
      .uniform("uColor", this.bgColor)
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

    this._subScene = new Subscene();
  }

  _onTouch() {
    if (this._hasStarted) return;
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      setTimeout(() => {
        this._offsetOpen.value = 1;
      }, 500);
      this._offsetCover.value = 1;
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

    // update light map

    GL.setMatrices(this._cameraLight);

    this._fboLight.bind();
    GL.clear(0, 0, 0, 1);
    this._renderParticles(true);
    this._fboLight.unbind();
    GL.setMatrices(this.camera);

    this._blurPass.update(this._fboLight.texture);
  }

  _renderParticles(mLight) {
    mLight && GL.enableAdditiveBlending();
    this._hasPresented && GL.disable(GL.DEPTH_TEST);
    const particleScale = this._containerWorld.scaleX * this._particleScale;
    this._drawRender
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 1)
      .bindTexture("uColorMap", Assets.get("gold"), 2)
      .uniform("uViewport", [GL.width, GL.height])
      .uniform("uParticleScale", particleScale)
      .uniform("uLightMap", mLight ? 1.0 : 0.0)
      .uniform("uOffset", this._offsetOpen.value)
      .uniform("uPresented", this._hasPresented ? 1 : 0)
      .draw();
    this._hasPresented && GL.enable(GL.DEPTH_TEST);

    mLight && GL.enableAlphaBlending();
  }

  render() {
    this.update();
    let s;
    if (!isARSupported) {
      const g = 0;
      GL.clear(g, g, g, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    GL.disable(GL.DEPTH_TEST);
    this._drawCover.uniform("uOpacity", this._offsetCover.value * 0.9).draw();
    GL.enable(GL.DEPTH_TEST);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    const mtx = mat4.create();
    mat4.mul(mtx, this.mtxHit, this._containerWorld.matrix);
    GL.setModelMatrix(mtx);

    // GL.enableAdditiveBlending();
    this._drawFloor.bindTexture("uLightMap", this._blurPass.texture, 0).draw();
    // GL.enableAlphaBlending();

    // render subscene
    if (!this._hasPresented) {
      this._subScene.render(this.mtxHit);
    }
    this._renderParticles(false);

    if (Config.debug) {
      s = 400;
      GL.viewport(0, 0, s, s);
      this._dCopy.draw(this._fboLight.texture);
      GL.viewport(s, 0, s, s);
      this._dCopy.draw(this._blurPass.texture);
    }

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    const pixelRatio = GL.isMobiel ? 1 : 1.5;
    if (GL.isMobile || !Config.autoSave) {
      const { innerWidth, innerHeight } = window;
      resize(innerWidth, innerHeight);
      this.camera.setAspectRatio(GL.aspectRatio);
    } else {
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
