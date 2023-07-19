import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  Scene,
  EaseNumber,
  FrameBuffer,
  FboPingPong,
  CameraOrtho,
} from "alfrid";
import { isARSupported, setCamera, hitTest, unbind } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";

import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import { randomInt } from "./utils";
import TouchScale from "./utils/TouchScale";
import applyBlur from "./utils/applyBlur";
import DrawDistort from "./DrawDistort";
import DrawLayer from "./DrawLayer";

// pattern
import { generatePattern } from "./patterns";

// outline
import generateOutline from "./generateOutlineMap";

// Example code
import DrawBlocks from "./DrawBlocks";

class SceneApp extends Scene {
  constructor() {
    super();

    // this.orbitalControl.lock();
    this.orbitalControl.rx.value = -0.4;
    this.orbitalControl.ry.value = -0.4;

    // hit
    this.mtxIdentity = mat4.create();
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

    // shadow
    this.lightPos = [0, 5, 1];
    this.cameraLight = new CameraOrtho();
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    const { width, height } = GL;
    const size = 2048;
    const color0 = [32, 32, 28];
    const color1 = [255, 255, 245];
    let s = 1.5;

    this.patterns = [];
    this.patternMaps = [];
    let num = 10;
    while (num--) {
      const t = generatePattern(size, size, randomInt(1, 3), color0, color1);
      this.patterns.push(t);
      const fbo = new FrameBuffer(width * s, height * s);
      this.patternMaps.push(fbo);
    }
    this.texturePattern = this.patterns[0];

    this._fboMap = new FrameBuffer(width * s, height * s, { type: GL.FLOAT });
    this._fboXOR = new FrameBuffer(width * s, height * s);
    this._fboOutline = new FrameBuffer(width * s, height * s);
    this._fboBg = new FrameBuffer(width * s, height * s);
    this._fboNormal = new FboPingPong(width * s, height * s);
    const shadowSize = 2048;
    this._fboShadow = new FrameBuffer(shadowSize, shadowSize);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();
    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv();

    this._drawBlocks = new DrawBlocks();
    this._drawDistort = new DrawDistort();
    this._drawLayer = new DrawLayer();
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
    if (isARSupported && this._hasPresented) {
      setCamera(GL, this.camera);
    }
    if (this._hasPresented) updateCameraTexture();

    if (isARSupported && this._hasPresented) {
      // unbind();
    }

    GL.setModelMatrix(this.mtxModel);
    const { gl } = GL;

    // background
    this._fboBg.bind();
    GL.clear(0, 0, 0, 1);
    this._dEnv.draw();
    this._fboBg.unbind();

    // xor
    this._fboXOR.bind();
    GL.clear(1, 1, 1, 1);
    gl.blendEquation(GL.FUNC_SUBTRACT);
    gl.blendFunc(GL.ONE, GL.DST_COLOR);
    this._drawBlocks
      .bindTexture("uPatternMap", this.texturePattern, 0)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uRenderMode", 2)
      .draw();
    gl.blendEquation(GL.FUNC_ADD);
    this._fboXOR.unbind();

    // generate outline
    generateOutline(this._fboOutline, this._fboXOR.texture);

    // map
    GL.enableAdditiveBlending();
    this._fboMap.bind();
    GL.clear(0, 0, 0, 0);
    this._drawBlocks
      .bindTexture("uPatternMap", this.texturePattern, 0)
      .uniform("uRenderMode", 3)
      .draw();
    this._fboMap.unbind();

    // normal
    GL.enableAlphaBlending();
    GL.enable(GL.DEPTH_TEST);
    this._fboNormal.read.bind();
    GL.clear(0, 0, 0, 0);
    this._drawBlocks
      .bindTexture("uPatternMap", this.texturePattern, 0)
      .uniform("uRenderMode", 1)
      .draw();
    this._fboNormal.read.unbind();

    applyBlur(this._fboNormal);

    // pattern maps
    this.patterns.forEach((t, i) => {
      const fbo = this.patternMaps[i];
      fbo.bind();
      GL.clear(0, 0, 0, 0);
      this._drawBlocks
        .bindTexture("uPatternMap", t, 0)
        .uniform("uRenderMode", 0)
        .draw();
      fbo.unbind();
    });

    // shadow
    const r = 4.5 * this.touchScale.value;
    const pointLight = [0, 0, 0];
    const pointBase = [0, 0, 0];
    vec3.transformMat4(pointLight, this.lightPos, this.mtxModel);
    vec3.transformMat4(pointBase, [0, 0, 0], this.mtxModel);
    const near = 1;
    const far = 5;
    this.cameraLight.ortho(-r, r, -r, r, near, far);
    this.cameraLight.lookAt(pointLight, pointBase);

    this._fboShadow.bind();
    GL.enable(GL.DEPTH_TEST);
    GL.clear(0, 0, 0, 0);
    GL.setMatrices(this.cameraLight);
    GL.setModelMatrix(this.mtxModel);
    this._drawBlocks
      .bindTexture("uPatternMap", this.texturePattern, 0)
      .uniform("uRenderMode", 1)
      .draw();
    this._fboShadow.unbind();
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

    GL.setModelMatrix(this.mtxIdentity);
    this._dCamera.draw(this.cameraLight);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    // draw background
    GL.disable(GL.DEPTH_TEST);
    const envMap =
      isARSupported && this._hasPresented
        ? getCameraTexture()
        : this._fboBg.getTexture();

    if (this._hasStarted || !isARSupported) {
      if (isARSupported) {
        this._drawDistort
          .bindTexture("uEnvMap", getCameraTexture(), 0)
          .bindTexture("uNormalMap", this._fboNormal.read.getTexture(), 1)
          .draw();
      }

      // draw layers
      this.patternMaps.forEach(({ texture }, i) => {
        this._drawLayer.bindTexture(`uPatternMap${i}`, texture, i);
      });
      const l = this.patternMaps.length;
      this._drawLayer
        .bindTexture("uMap", this._fboMap.texture, l)
        .bindTexture("uOutlineMap", this._fboOutline.texture, l + 1)
        .draw();
    }

    if (this._hasPresented) {
      s = GL.width / 2;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCameraTexture());
    }
    // this._dCopy.draw(this._fboShadow.depthTexture);
    GL.enable(GL.DEPTH_TEST);
  }
}

export default SceneApp;
