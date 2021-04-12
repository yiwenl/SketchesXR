import { GL, Scene, Geom, DrawBall, DrawCopy, EaseNumber } from "alfrid";
import { resize } from "./utils";

import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";

import vs from "shaders/basic.vert";
import fs from "shaders/diffuse.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);

    // hit
    this.mtxHit = mat4.create();

    // states
    this._offsetHit = new EaseNumber(0);
    this._hasStarted = false;

    // set size
    this.resize();
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());
  }

  _initTextures() {}

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
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
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    resize(innerWidth, innerHeight);
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
