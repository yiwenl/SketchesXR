import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  Scene,
  FrameBuffer,
  EaseNumber,
  CameraOrtho,
} from "alfrid";
import { vec3, mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";
import DrawBg from "./DrawBg";

import Assets from "./Assets";
import { updateCameraTexture, getCamera } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";
import {
  isARSupported,
  projectionMatrix,
  viewMatrix,
  viewport,
  bind,
  hitTest,
} from "./xrutils";

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
    mat4.translate(this.mtxAR, this.mtxAR, [0, 0, 0]);
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);
    this.touchScale = new TouchScale();
    this.touchScale.limit(0.1, 5);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    this.cameraLight = new CameraOrtho();
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

    const fboSize = 1024;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();

    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboEnv);
    this._drawBg = new DrawBg()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboBg);

    this._drawBlocks = new DrawBlocks();
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
    if (this._hasPresented) updateCameraTexture();
    if (!isARSupported || !this._hasPresented) {
      this._dEnv.draw();
    }

    let tBg;
    if (!this._hasPresented || !isARSupported) {
      tBg = this._fboEnv.texture;
    } else {
      tBg = getCamera();
    }
    this._drawBg
      .bindTexture("uMap", tBg, 0)
      .bindTexture("uLookupMap", this._textureLookup, 1)
      .draw();

    if (this._hasPresented) {
      this.camera.setFromViewProjection(viewMatrix, projectionMatrix);
      this._checkHit();
    }

    this.updateShadowMap();
  }

  updateShadowMap() {
    // update light position
    const mtx = mat4.create();
    mat4.mul(mtx, this.mtxAR, this.touchScale.matrix);

    this.pointZero = [0, 0, 0];
    this.pointLight = [0, 3, 1];
    vec3.transformMat4(this.pointZero, this.pointZero, this.mtxModel);
    vec3.transformMat4(this.pointLight, this.pointLight, this.mtxModel);

    const r = this.touchScale.value * (this._hasPresented ? 0.05 : 1);
    const d = 4;
    this.cameraLight.ortho(-r * d, r * d, r * d, -r * d, 1 * r, 5 * r);
    this.cameraLight.lookAt(this.pointLight, this.pointZero);

    this._fboShadow.bind();
    GL.clear(0, 0, 0, 1);
    GL.setMatrices(this.cameraLight);
    GL.setModelMatrix(this.mtxModel);
    this._drawBlocks.uniform("uTime", Scheduler.getElapsedTime()).draw();
    this._fboShadow.unbind();
  }

  render() {
    let s;
    if (!isARSupported || !this._hasPresented) {
      GL.clear(0, 0, 0, 1);
    } else {
      GL.viewport(...viewport);
      bind();
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

    s = this._hasPresented ? 0.05 * 0.1 : 0.1;
    this._dBall.draw(this.pointZero, [s, s, s], [1, 0, 0]);
    this._dBall.draw(this.pointLight, [s, s, s], [1, 1, 0]);

    this._dCamera.draw(this.cameraLight, [1, 1, 1]);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    // draw world
    this._drawBlocks.uniform("uTime", Scheduler.getElapsedTime()).draw();

    if (this._hasPresented) {
      s = viewport[2] * 0.25;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCamera());
      GL.viewport(s, 0, s, s);
      this._dCopy.draw(this._fboShadow.texture);
      GL.viewport(s * 2, 0, s, s);
      this._dCopy.draw(this._fboShadow.depthTexture);
    } else {
      s = GL.width / 4;
      GL.viewport(0, 0, s, s);
      this._dCopy.draw(this._fboShadow.texture);
      GL.viewport(s, 0, s, s);
      this._dCopy.draw(this._fboShadow.depthTexture);
    }
  }
}

export default SceneApp;
