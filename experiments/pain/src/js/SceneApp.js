import {
  GL,
  Geom,
  ShaderLibs,
  Scene,
  DrawBall,
  DrawCopy,
  DrawAxis,
  EaseNumber,
  Object3D,
  Draw,
} from "alfrid";
import { resize, saveImage, getDateString } from "./utils";
import generateText from "./utils/generateText";
import Scheduler from "scheduling";

import Assets from "./Assets";
import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import TouchScale from "./utils/TouchScale";
import DrawMark from "./DrawMark";
import DrawTexts from "./DrawTexts";
import DrawFloor from "./DrawFloor";
import DrawPerson from "./DrawPerson";
import DrawBg from "./DrawBg";

let hasSaved = false;
let canSave = false;

const DEFAULT_Y = 1.2;
const HEX_TO_SHADER = (v) => v / 255;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.2);
    // this.orbitalControl.ry.setTo(-1);
    this.orbitalControl.radius.setTo(5);

    // hit
    this._mtxWorld = mat4.create();
    this._mtxHit = mat4.create();
    mat4.translate(this._mtxHit, this._mtxHit, [0, -DEFAULT_Y, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    this._globalScale = new TouchScale(2);
    this._container = new Object3D();

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
    this._tText0 = generateText();
    this._tText1 = Assets.get("texts2");
    this._tNoise = Assets.get("01");
    this._tNoise.wrapS = this._tNoise.wrapT = GL.REPEAT;
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dMark = new DrawMark();

    this._drawTexts0 = new DrawTexts(0.5)
      .bindTexture("uMap", this._tText0, 0)
      .bindTexture("uColorMap", Assets.get("006"), 1)
      .bindTexture("uNoiseMap", this._tNoise, 2)
      .uniform("uMaxHeight", 0.5)
      .uniform("uBrightness", 1)
      .uniform("uTextScale", 1);

    this._drawTexts1 = new DrawTexts(0.7)
      .bindTexture("uMap", this._tText1, 0)
      .bindTexture("uColorMap", Assets.get("007"), 1)
      .bindTexture("uNoiseMap", this._tNoise, 2)
      .uniform("uMaxHeight", 1)
      .uniform("uBrightness", 0.75)
      .uniform("uTextScale", 4);

    this._drawFloor = new DrawFloor();
    this._drawCover = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, ShaderLibs.simpleColorFrag);

    this._drawPerson = new DrawPerson();
    this._drawBg = new DrawBg();
  }

  _onTouch() {
    if (this._hasStarted) return;
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this._mtxHit, mtxHit);
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
        mat4.copy(this._mtxHit, mtxHit);
      }
    }
  }

  render() {
    let s;
    if (!isARSupported) {
      const g = 0.05;
      GL.clear(g * 2, g, g, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    this._container.scaleX = this._container.scaleY = this._container.scaleZ = this._globalScale.value;
    const time = Scheduler.getElapsedTime() * 0.2;

    // const colorCover = Config.coverColor.map(HEX_TO_SHADER);
    // GL.disable(GL.DEPTH_TEST);
    // this._drawCover
    //   .uniform("uColor", colorCover)
    //   .uniform("uOpacity", Config.coverOpacity * this._offsetOpen.value)
    //   .draw();
    // GL.enable(GL.DEPTH_TEST);

    // update world matrix
    mat4.mul(this._mtxWorld, this._mtxHit, this._container.matrix);

    GL.setModelMatrix(this._mtxHit);
    s = this._offsetHit.value * 0.005;

    GL.disable(GL.DEPTH_TEST);
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this._mtxWorld);
    const color0 = Config.bgColor0.map(HEX_TO_SHADER);
    const color1 = Config.bgColor1.map(HEX_TO_SHADER);

    this._drawBg
      .uniform("uTime", time)
      .uniform("uColor0", color0)
      .uniform("uColor1", color1)
      .uniform("uOpacity", this._offsetOpen.value)
      .draw();
    GL.enable(GL.DEPTH_TEST);

    !this._hasPresented && this._drawPerson.draw();

    const color = Config.floorColor.map(HEX_TO_SHADER);
    this._drawFloor
      .uniform("uColor", color)
      .uniform("uOpacity", this._offsetOpen.value)
      .draw();

    GL.disable(GL.CULL_FACE);
    this._drawTexts1
      .uniform("uTime", time)
      .uniform("uOpacity", this._offsetOpen.value)
      .draw();
    this._drawTexts0
      .uniform("uTime", time)
      .uniform("uOpacity", this._offsetOpen.value)
      .draw();
    GL.enable(GL.CULL_FACE);

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
      const pixelRatio = 2.0;
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
