import { GL, Scene, DrawBall, DrawCopy, DrawAxis, EaseNumber } from "alfrid";
import { resize, saveImage, getDateString } from "./utils";

import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);

    if (GL.isMobile) {
      this.orbitalControl.lock();
    }

    // hit
    this.mtxHit = mat4.create();

    // states
    this._offsetHit = new EaseNumber(0);
    this._hasStarted = false;

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
  }

  _initTextures() {}

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
  }

  _onTouch() {
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.5;
    }
  }

  render() {
    let s;
    if (!isARSupported) {
      GL.clear(0, 0, 0, 1);
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
    s = this._offsetHit.value * 0.01;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 0, 0]);
    this._dAxis.draw();

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    if (GL.isMobile) {
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
