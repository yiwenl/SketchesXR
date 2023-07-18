import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  Scene,
  EaseNumber,
  FrameBuffer,
  CameraOrtho,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import { randomInt, biasMatrix } from "./utils";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";

import { updateCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";

import DrawBlocks from "./DrawBlocks";
import DrawLayer from "./DrawLayer";
import DrawCompose from "./DrawCompose";
import DrawFloor from "./DrawFloor";
import generateOutline from "./generateOutlineMap";

// pattern
import { generatePattern } from "./patterns";

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
    mat4.translate(this.mtxAR, this.mtxAR, [0, 4, 0]);
    this.touchScale = new TouchScale();
    this.touchScale.limit(0.1, 5);

    // shadow
    this.mtxShadow = mat4.create();
    this.pointBase = [0, 0, 0];
    this.pointLight = [0, 1, 0.3];
    this.posLightOrg = [0, 8, 0.3];
    this.cameraLight = new CameraOrtho();
    const r = 3.5;
    this.cameraLight.ortho(-r, r, r, -r, 1, 3);
    this.cameraLight.lookAt(this.pointLight, this.pointBase);
    // mat4.mul(this.mtxShadow, biasMatrix, this.cameraLight.matrix);

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
    const { width, height } = GL;
    let numTextures = 10;
    this._textures = [];
    this._colorsIndices = [];
    const color0 = [32, 32, 28];
    const color1 = [255, 255, 245];
    let s = 2;
    while (numTextures--) {
      const t = generatePattern(
        width * s,
        height * s,
        randomInt(1, 3),
        color0,
        color1
      );

      this._textures.push(t);
      this._colorsIndices.push(randomInt(5));
    }

    //  s = 2;
    this._fboXOR = new FrameBuffer(GL.width * s, GL.height * s);
    this._fboOutline = new FrameBuffer(GL.width * s, GL.height * s);
    this._fboRender = new FrameBuffer(GL.width * s, GL.height * s, {
      type: GL.FLOAT,
    });
    const fboSize = 2048;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();
    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv();

    this._drawCompose = new DrawCompose();
    this._drawFloor = new DrawFloor();
    this._drawBlocks = new DrawBlocks();
    this._drawLayer = new DrawLayer();
  }

  _onTouch = () => {
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
    setCamera(GL, this.camera, false);
    if (isARSupported && this._hasPresented) {
      this._checkHit();
    }
    if (this._hasPresented) updateCameraTexture();

    if (this._hasPresented) {
      mat4.mul(this.mtxModel, this.mtxAR, this.touchScale.matrix);
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxModel);
    } else {
      mat4.identity(this.mtxModel, this.mtxModel);
    }

    const { gl } = GL;

    GL.enableAdditiveBlending();
    this._fboRender.bind();
    GL.clear(0, 0, 0, 0);
    GL.setMatrices(this.camera);
    GL.setModelMatrix(this.mtxModel);
    this.renderBlocks(false);
    this._fboRender.unbind();

    this._fboXOR.bind();
    GL.clear(1, 1, 1, 1);
    GL.setMatrices(this.camera);
    GL.setModelMatrix(this.mtxModel);
    gl.blendEquation(GL.FUNC_SUBTRACT);
    gl.blendFunc(GL.ONE, GL.DST_COLOR);
    this.renderBlocks(true);
    gl.blendEquation(GL.FUNC_ADD);
    this._fboXOR.unbind();
    GL.enableAlphaBlending();

    generateOutline(this._fboOutline, this._fboXOR.texture);

    GL.enable(GL.DEPTH_TEST);

    // update shadow
    const s = 0.05;
    const mtxFloor = mat4.create();
    mat4.scale(mtxFloor, mtxFloor, [s, s, s]);
    mat4.mul(mtxFloor, this.mtxHit, mtxFloor);
    vec3.transformMat4(this.pointLight, this.posLightOrg, mtxFloor);
    vec3.transformMat4(this.pointBase, [0, 0, 0], mtxFloor);
    const r = 4;
    const near = 0.1;
    const far = 5;
    this.cameraLight.ortho(-r, r, r, -r, near, far);
    this.cameraLight.lookAt(this.pointLight, this.pointBase);
    mat4.mul(this.mtxShadow, biasMatrix, this.cameraLight.matrix);

    this._fboShadow.bind();
    GL.clear(0, 0, 0, 0);
    GL.setMatrices(this.cameraLight);
    GL.setModelMatrix(this.mtxIdentity);
    this.renderBlocks(false);
    this._fboShadow.unbind();
  }

  renderBlocks(mXOR) {
    this._drawBlocks
      .uniform("uXOR", mXOR ? 1.0 : 0.0)
      .uniform("uTime", Scheduler.getElapsedTime())
      .draw();
  }

  render() {
    let s;
    if (!isARSupported || !this._hasPresented) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      // this._checkHit();
    }

    if (!this._hasPresented || !isARSupported) {
      GL.disable(GL.DEPTH_TEST);
      this._dEnv.draw();
      GL.enable(GL.DEPTH_TEST);
    }
    GL.disable(GL.DEPTH_TEST);

    const numLayers = 3;
    let tIndex = 0;

    const getPatternMap = () => {
      const t = this._textures[tIndex];
      tIndex = (tIndex + 1) % this._textures.length;
      return t;
    };

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    const mtxFloor = mat4.create();
    mat4.mul(mtxFloor, this.mtxHit, this.touchScale.matrix);
    GL.setModelMatrix(mtxFloor);

    this._drawFloor
      .uniform("uShadowMatrix", "mat4", this.mtxShadow)
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .draw();

    // this.renderBlocks(false);

    if (this._hasStarted || !isARSupported) {
      for (let i = 0; i < numLayers; i++) {
        this._drawLayer
          .uniform("uLevel", i)
          .uniform("uNum", numLayers)
          .bindTexture("uMap", this._fboRender.texture, 0)
          .bindTexture("uOutlineMap", this._fboOutline.texture, 1)
          .bindTexture("uPatternMap0", getPatternMap(), 2)
          .bindTexture("uPatternMap1", getPatternMap(), 3)
          .bindTexture("uPatternMap2", getPatternMap(), 4)
          .bindTexture("uPatternMap3", getPatternMap(), 5)
          .bindTexture("uPatternMap4", getPatternMap(), 6)
          .draw();
      }
    }
    GL.enable(GL.DEPTH_TEST);
  }
}

export default SceneApp;
