import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  EaseNumber,
  FrameBuffer,
  FboPingPong,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";

import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";
import applyBlur from "./utils/applyBlur";
import DrawDistort from "./DrawDistort";

// pattern
import { generatePattern } from "./patterns";

// Example code
import DrawBlocks from "./DrawBlocks";

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
    const s = 0.05;
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);
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
    const size = 2048;
    const color0 = [32, 32, 28];
    const color1 = [255, 255, 245];
    let s = 2;
    this.texturePattern = generatePattern(size, size, 1, color0, color1);

    const { width, height } = GL;
    this._fboBg = new FrameBuffer(width, height);
    this._fboNormal = new FboPingPong(GL.width, GL.height);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv();

    this._drawBlocks = new DrawBlocks();
    this._drawDistort = new DrawDistort();
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

    if (isARSupported && this._hasPresented) {
      setCamera(GL, this.camera);
    }

    this._fboBg.bind();
    GL.clear(0, 0, 0, 1);
    this._dEnv.draw();
    this._fboBg.unbind();

    // normal
    GL.enable(GL.DEPTH_TEST);
    this._fboNormal.read.bind();
    GL.clear(0, 0, 0, 0);
    this._drawBlocks
      .bindTexture("uPatternMap", this.texturePattern, 0)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uUseNormal", 1)
      .draw();
    this._fboNormal.read.unbind();

    applyBlur(this._fboNormal);
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
      this._dCopy.draw(this._fboBg.getTexture());
      GL.enable(GL.DEPTH_TEST);
    }

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    // draw world
    GL.disable(GL.DEPTH_TEST);
    const envMap =
      isARSupported && this._hasPresented
        ? getCameraTexture()
        : this._fboBg.getTexture();
    this._drawDistort
      .bindTexture("uEnvMap", envMap, 0)
      .bindTexture("uNormalMap", this._fboNormal.read.getTexture(), 1)
      .draw();

    GL.enable(GL.DEPTH_TEST);
    this._drawBlocks
      .bindTexture("uPatternMap", this.texturePattern, 0)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uUseNormal", 0)
      .draw();

    if (isARSupported && this._hasPresented) {
      s = 500;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCameraTexture());
    }
  }
}

export default SceneApp;
