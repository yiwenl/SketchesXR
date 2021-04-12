import {
  GL,
  Scene,
  Geom,
  Draw,
  CameraPerspective,
  CameraOrtho,
  FrameBuffer,
  DrawBall,
  DrawCopy,
  DrawCamera,
  EaseNumber,
} from "alfrid";

import { resize, biasMatrix } from "./utils";

import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";

import Assets from "./Assets";
import DrawBike from "./DrawBike";
import DrawLights from "./DrawLights";

import vs from "shaders/floor.vert";
import fs from "shaders/floor.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(5);
    this.orbitalControl.rx.limit(0.1, 0.5);

    // hit
    this.mtxHit = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -0.5, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._hasStarted = true;
    this._isPresenting = false;

    // light
    this._lightPos = [0, 5, 1];
    // this._cameraLight = new CameraPerspective();
    // this._cameraLight.setPerspective(Math.PI / 4, GL.aspectRatio, 1, 5);
    this._cameraLight = new CameraOrtho();
    const r = 1.0;
    this._cameraLight.ortho(-r, r, r, -r, 4, 7);
    this._cameraLight.lookAt(this._lightPos, [0, 0, 0]);
    this._mtxShadow = mat4.create();
    mat4.mul(
      this._mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    // set size
    this.resize();
  }

  present() {
    if (GL.isMobile) {
      window.addEventListener("touchstart", (e) => this._onTouch());
      this._isPresenting = true;
      this._hasStarted = false;
    }
  }

  _initTextures() {
    const fboSize = 2048;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();

    this._drawBike = new DrawBike();
    this._drawLights = new DrawLights();

    const s = 5;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vs, fs);
  }

  _onTouch() {
    const mtxHit = hitTest();
    if (mtxHit !== null && !this._hasStarted) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.5;
    }
  }

  _update() {
    // if (this._isPresenting) {
    //   return;
    // }
    this._fboShadow.bind();
    // GL.clear(0, 0, 0, 0);
    const { gl } = GL;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.clearStencil(1);

    GL.enable(GL.DEPTH_TEST);
    GL.setMatrices(this._cameraLight);
    GL.setModelMatrix(this.mtxHit);
    this._renderBike(false);
    this._fboShadow.unbind();
  }

  _renderBike(mShadow) {
    const tShadow = mShadow
      ? this._fboShadow.depthTexture
      : Assets.get("color");

    this._drawBike
      .uniform("uCameraPos", this.camera.position)

      .draw();
  }

  render() {
    this._update();
    GL.setMatrices(this.camera);
    let s;
    if (!isARSupported) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      GL.enable(GL.DEPTH_TEST);

      if (!this._hasStarted) {
        const mtxHit = hitTest();
        if (mtxHit !== null) {
          this._offsetHit.value = 1;
          mat4.copy(this.mtxHit, mtxHit);
        }
      }
    }

    GL.setModelMatrix(this.mtxHit);

    if (this._hasStarted) {
      this._drawFloor
        .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
        .uniform("uShadowMatrix", this._mtxShadow)
        .uniform("uIsPresenting", this._isPresenting ? 1 : 0)
        .draw();
      this._renderBike(true);
      this._drawLights.draw();
    }

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
