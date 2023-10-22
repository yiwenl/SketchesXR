import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  FrameBuffer,
  EaseNumber,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";
import DrawBg from "./DrawBg";

import { pick } from "./utils";

import Assets from "./Assets";
import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";

// Example code
import DrawBlocks from "./DrawBlocks";
import RubixCube from "./RubixCube";

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
    this.mtxSave = mat4.create();
    const s = 0.05;
    // mat4.translate(this.mtxAR, this.mtxAR, [0, 0.2, 0]);
    // mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);
    this.touchScale = new TouchScale();
    this.touchScale.limit(0.1, 5);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    this._fboBg = new FrameBuffer(GL.width, GL.height);
    this._fboEnv = new FrameBuffer(GL.width, GL.height);
    this._textureLookup = Assets.get("lookup");
    this._textureLookup.minFilter = GL.NEAREST;
    this._textureLookup.magFilter = GL.NEAREST;
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboEnv);
    this._drawBg = new DrawBg()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboBg);

    this._drawBlocks = new DrawBlocks();

    this._cube = new RubixCube();
    this._cube.unlock();
    // this._cube.randomMove();

    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this._cube.randomMove();
      } else if (e.code === "KeyR") {
        console.log("solve");
        this._cube.solve();
      }
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

  capture() {
    mat4.copy(this.mtxSave, this.camera.matrix);
  }

  update() {
    if (this._hasPresented) updateCameraTexture();
    if (!isARSupported || !this._hasPresented) {
      this._dEnv.draw();
    }

    let tBg;
    if (!this._hasPresented || !isARSupported) {
      tBg = this._fboEnv.texture;
    } else {
      tBg = getCameraTexture();
    }
    this._drawBg
      .bindTexture("uMap", tBg, 0)
      .bindTexture("uLookupMap", this._textureLookup, 1)
      .draw();
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

    GL.disable(GL.DEPTH_TEST);
    this._dCopy.draw(this._fboBg.texture);
    GL.enable(GL.DEPTH_TEST);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    // draw world
    // this._drawBlocks.uniform("uTime", Scheduler.getElapsedTime()).draw();
    this._cube.render(this.mtxSave, this._fboBg.texture);

    if (isARSupported && this._hasPresented) {
      s = 1;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCameraTexture());
    }

    GL.enable(GL.DEPTH_TEST);
  }
}

export default SceneApp;
