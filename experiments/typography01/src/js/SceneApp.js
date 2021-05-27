import {
  GL,
  Scene,
  DrawBall,
  DrawCopy,
  DrawCamera,
  EaseNumber,
  TweenNumber,
  CameraOrtho,
  FrameBuffer,
} from "alfrid";
import Assets from "./Assets";
import { resize, biasMatrix } from "./utils";

import { isARSupported, setCamera, hitTest, bind } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import DrawRings from "./DrawRings";
import Scheduler from "scheduling";

const MAIN_SCALE = 5.0;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(0.5);

    if (GL.isMobile) {
      this.orbitalControl.lock();
    }

    // hit
    this.mtxHit = mat4.create();

    // light
    this._mtxShadow = mat4.create();
    this._mtxIdentity = mat4.create();

    this._lightPos = vec3.fromValues(0, 0.25, 0);
    this._lightTarget = vec3.create();
    this._front = [0, 0, 1];
    this._cameraLight = new CameraOrtho();
    let s = 0.15;
    this._cameraLight.ortho(-s, s, s, -s, 0.05, 0.5);
    this._cameraLight.lookAt(this._lightPos, this._lightTarget, this._front);
    mat4.mul(
      this._mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new TweenNumber(0, "linear", 0.002);
    this._offsetOpen.value = 1;
    this._hasStarted = false;

    // set size
    this.resize();
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());
    const s = 0.02 * MAIN_SCALE;
    this._drawRings.container.scaleX = this._drawRings.container.scaleY = this._drawRings.container.scaleZ = s;
    this._drawRings.container.y = 0.25 * MAIN_SCALE;
    this._offsetOpen.setTo(0);
  }

  _initTextures() {
    this._textureTexts = Assets.get("texts");
    this._textureTexts.wrapS = this._textureTexts.wrapT = GL.REPEAT;
    this._textureTexts.minFilter = this._textureTexts.magFilter = GL.LINEAR;

    const fboSize = 4096;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
    this._fboShadow.bind();
    GL.clear(1, 0, 0, 1);
    this._fboShadow.unbind();
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();

    this._drawRings = new DrawRings();
    const s = 0.02;
    this._drawRings.container.scaleX = this._drawRings.container.scaleY = this._drawRings.container.scaleZ = s;
  }

  _onTouch() {
    if (this._hasStarted) {
      return;
    }
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.05;
      setTimeout(() => {
        this._offsetOpen.value = 1;
      }, 500);
    }
  }

  _updateShadowMap() {
    GL.setMatrices(this._cameraLight);
    this._fboShadow.bind();
    GL.clear(0, 0, 0, 1);
    this._renderRings(false);
    this._fboShadow.unbind();
  }

  _renderRings(mShadow) {
    if (Math.random() > 0.95) {
      console.log("this._offsetOpen.value", this._offsetOpen.value);
    }
    // const tDepth = mShadow ? this._fboShadow.depthTexture : this._textureTexts;
    GL.disable(GL.CULL_FACE);
    GL.setModelMatrix(this.mtxHit);
    this._drawRings
      .bindTexture("textureTexts", this._textureTexts, 0)
      // .bindTexture("textureDepth", tDepth, 1)
      // .bindTexture("textureColor", tColor, 2)
      .uniform("uTime", -Scheduler.getElapsedTime() * 0.1)
      .uniform("uLightPos", this._lightPos)
      .uniform("uShadowMatrix", "mat4", this._mtxShadow)
      .uniform("uOffsetOpen", this._offsetOpen.value)
      .draw();
    GL.enable(GL.CULL_FACE);
    GL.setModelMatrix(this._mtxIdentity);

    GL.setMatrices(this.camera);
  }

  render() {
    let s;
    if (!isARSupported) {
      GL.clear(0, 0, 0, 1);
    } else {
      // this._updateShadowMap();
      setCamera(GL, this.camera);

      if (!this._hasStarted) {
        const mtxHit = hitTest();
        if (mtxHit !== null) {
          this._offsetHit.value = 1;
          mat4.copy(this.mtxHit, mtxHit);

          vec3.transformMat4(this._lightTarget, [0, 0, 0], this.mtxHit);
          // vec3.copy(this._lightPos, this._lightTarget);
          // this._lightPos[1] += 0.5;
          // this._cameraLight.lookAt(
          //   this._lightPos,
          //   this._lightTarget,
          //   this._front
          // );
          // mat4.mul(
          //   this._mtxShadow,
          //   this._cameraLight.projection,
          //   this._cameraLight.view
          // );
          // mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);
        }
      }
    }

    s = this._offsetHit.value * 0.01;
    this._dBall.draw(this._lightTarget, [s, s, s], [1, 0, 0]);
    // this._dBall.draw(this._lightPos, [s, s, s], [1, 1, 0]);
    // this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this.mtxHit);
    this._renderRings(true);

    // if (GL.isMobile) {
    //   s = GL.width / 2;
    //   GL.viewport(0, 0, s, s);
    //   this._dCopy.draw(this._fboShadow.depthTexture);
    // }
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    resize(innerWidth, innerHeight);
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
