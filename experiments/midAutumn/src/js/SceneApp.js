import {
  GL,
  Scene,
  DrawBall,
  DrawCopy,
  DrawAxis,
  DrawCamera,
  EaseNumber,
  Object3D,
  CameraOrtho,
} from "alfrid";
import { resize, saveImage, getDateString } from "./utils";

import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";

// draw calls
import DrawMark from "./DrawMark";
import DrawMoon from "./DrawMoon";

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);

    // camera fluid
    this._camOrtho = new CameraOrtho();
    const { moonPosition: r } = Config;
    this._camOrtho.ortho(-r / 2, r / 2, r / 2, -r / 2, 0.25, 1);
    this._posCam = vec3.create();

    // hit
    this.mtxHit = mat4.create();
    this.mtxWorld = mat4.create();

    mat4.translate(this.mtxHit, this.mtxHit, [0, -r, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    this._container = new Object3D();
    this._container.y = r;

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

  _initTextures() {}

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dMark = new DrawMark();
    this._dCamera = new DrawCamera();

    this._drawMoon = new DrawMoon();
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
    // update fluid camera position
    // console.log(this.camera.position);
    vec3.copy(this._posCam, this.camera.position);
    this._posCam[1] *= 0;
    vec3.normalize(this._posCam, this._posCam);
    vec3.scale(this._posCam, this._posCam, 0.5);
    const { moonPosition: r } = Config;
    this._posCam[1] = r / 2;

    // update fluid projection matrix
    this._camOrtho.lookAt(this._posCam, [0, r / 2, 0]);
  }

  render() {
    let s;
    if (!isARSupported) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    mat4.mul(this.mtxWorld, this.mtxHit, this._container.matrix);

    GL.setModelMatrix(this.mtxHit);
    s = 0.02;
    this._dBall.draw(this._posCam, [s, s, s], [1, 0, 0]);
    this._dCamera.draw(this._camOrtho, [1, 1, 0.2]);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxWorld);
    this._drawMoon.draw();

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
      const pixelRatio = 1.5;
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
