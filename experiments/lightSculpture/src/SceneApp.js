import {
  GL,
  Draw,
  Geom,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  EaseNumber,
} from "alfrid";
import Config from "./Config";
import resize from "./utils/resize";

import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";
import TouchScale from "./utils/TouchScale";
import { targetWidth, targetHeight } from "./features";

import vs from "shaders/basic.vert";
import fs from "shaders/diffuse.frag";

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // this.orbitalControl.lock();
    this.orbitalControl.rx.setTo(-0.4);
    this.orbitalControl.ry.setTo(-0.4);
    this.orbitalControl.radius.setTo(1);

    // hit
    this.mtxHit = mat4.create();
    this.mtxModel = mat4.create();
    this.mtxAR = mat4.create();
    const s = 0.05;
    mat4.translate(this.mtxAR, this.mtxAR, [0, 0.2, 0]);
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);

    this._touchScale = new TouchScale();

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    setTimeout(() => {
      canSave = true;
    }, 500);
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    this.resize();
    if (Config.autoSave) {
      resize(GL.canvas, targetWidth, targetHeight);
    }
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    const s = 0.1;
    this._drawCube = new Draw().setMesh(Geom.cube(s, s, s)).useProgram(vs, fs);
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

  update() {}

  render() {
    let s;
    if (!isARSupported || !this._hasPresented) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    mat4.identity(this.mtxModel);
    mat4.mul(this.mtxModel, this.mtxHit, this._touchScale.matrix);

    GL.setModelMatrix(this.mtxModel);
    this._drawCube.draw();
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    if (Config.autoSave) {
      GL.setSize(targetWidth, targetHeight);
    } else {
      GL.setSize(innerWidth, innerHeight);
    }
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
