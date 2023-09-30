import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  EaseNumber,
  FrameBuffer,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import Config from "./Config";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";
import DrawBelt from "./DrawBelt";
import Scheduler from "scheduling";
import { mix } from "./utils";

import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";

// Example code
import DrawBlocks from "./DrawBlocks";

class SceneApp extends Scene {
  constructor() {
    super();

    // this.orbitalControl.lock();
    this.orbitalControl.rx.value = -0.7;
    // this.orbitalControl.ry.value = -0.7;

    // hit
    this.mtxHit = mat4.create();
    this.mtxModel = mat4.create();
    this.mtxAR = mat4.create();
    const s = 1;
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);
    this.touchScale = new TouchScale();
    this.touchScale.limit(0.1, 5);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1, 0.02);
    this._hasStarted = false;
    this._hasPresented = false;
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    console.log(GL.width, GL.height);
    this._fboEnv = new FrameBuffer(GL.width, GL.height);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv();

    // this._drawPlane = new DrawPlane();
    this._drawBelt = new DrawBelt();

    this._drawBlocks = new DrawBlocks();
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

  update() {
    if (this._hasPresented) updateCameraTexture();

    this._fboEnv.bind();
    GL.clear(0, 0, 0, 0);
    this._dEnv.draw();
    this._fboEnv.unbind();
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
    } else {
      mat4.identity(this.mtxModel, this.mtxModel);
    }

    // if (!this._hasPresented || !isARSupported) {
    if (!this._hasPresented) {
      GL.disable(GL.DEPTH_TEST);
      this._dEnv.draw();
      GL.enable(GL.DEPTH_TEST);
    }

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    // this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    const minScale = 0.1;
    // draw world
    // let scale = Math.sin(time) * 0.5 + 0.5;
    // scale = mix(minScale, 1, scale);

    let scale;
    let time = Scheduler.getElapsedTime();
    if (isARSupported && this._hasPresented) {
      scale = this._offsetOpen.value;
    } else {
      scale = Math.sin(time) * 0.5 + 0.5;
      scale = 0;
    }
    // scale = mix(minScale, 1, scale);
    // console.log(this._offsetOpen.value, scale);

    const tEnv =
      isARSupported && this._hasPresented
        ? getCameraTexture()
        : this._fboEnv.getTexture();

    GL.enable(GL.DEPTH_TEST);
    this._drawBelt
      .uniform("uTime", time)
      .uniform("uScale", scale)
      .uniform("uMinScale", minScale)
      .bindTexture("uEnvMap", tEnv, 0)
      .uniform("uOffset", this._offsetOpen.value)
      .draw();

    // if (isARSupported && this._hasPresented) {
    //   s = 200;
    //   GL.viewport(0, 0, s, s / GL.aspectRatio);
    //   this._dCopy.draw(getCameraTexture());
    // }

    GL.enable(GL.DEPTH_TEST);
  }
}

export default SceneApp;
