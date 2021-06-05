import {
  GL,
  Scene,
  Draw,
  Geom,
  DrawBall,
  DrawCopy,
  // DrawAxis,
  // DrawCamera,
  EaseNumber,
  CameraOrtho,
  FrameBuffer,
} from "alfrid";
import { resize, saveImage, getDateString, biasMatrix } from "./utils";

import Config from "./Config";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";

import DrawText from "./DrawText";
import DrawMark from "./DrawMark";
import Scheduler from "scheduling";

import vsFloor from "shaders/basic.vert";
import fsFloor from "shaders/floor.frag";

let hasSaved = false;
let canSave = false;

const GENERAL_SCALE = 1;
const LIGHT_HEIGHT = 0.7;
const RING_POSITION = 0.2;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(GENERAL_SCALE);

    if (GL.isMobile) {
      this.orbitalControl.lock();
    }

    // shadow
    this._lightPos = vec3.create();
    this._lightTarget = vec3.create();
    this._mtxShadow = mat4.create();
    const r = 0.25 * GENERAL_SCALE;
    this._cameraLight = new CameraOrtho(
      -r,
      r,
      r,
      -r,
      0.2 * GENERAL_SCALE,
      0.8 * GENERAL_SCALE
    );

    // hit
    this.mtxHit = mat4.create();
    this.mtxWorld = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [
      0,
      -RING_POSITION * GENERAL_SCALE,
      0,
    ]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1, 0.05);
    this._hasStarted = false;
    this._hasPresented = false;

    // set size
    this.resize();

    if (!GL.isMobile) {
      setTimeout(() => {
        canSave = true;
      }, 500);
    }
  }

  present() {
    this._offsetOpen.setTo(0);
    window.addEventListener("touchstart", (e) => this._onTouch());
    this._hasPresented = true;
  }

  _initTextures() {
    const fboSize = GL.isMobile ? 2048 : 4096;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    // this._dAxis = new DrawAxis();
    // this._dCamera = new DrawCamera();
    this._drawMark = new DrawMark();

    let s = 0.5 * GENERAL_SCALE;
    this._drawText = new DrawText();
    this._drawText.container.scaleX = this._drawText.container.scaleY = this._drawText.container.scaleZ = s;
    this._drawText.container.y = RING_POSITION * GENERAL_SCALE;

    s = 5;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vsFloor, fsFloor);
  }

  _onTouch() {
    if (this._hasStarted) {
      return;
    }
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this._offsetOpen.value = 1;
    }
  }

  _updateShadowMap() {
    // update camera position
    const lightPos = vec3.create();
    vec3.transformMat4(this._lightTarget, [0, 0, 0], this.mtxHit);
    vec3.transformMat4(
      this._lightPos,
      [0, LIGHT_HEIGHT * GENERAL_SCALE, 0],
      this.mtxHit
    );
    this._cameraLight.lookAt(this._lightPos, this._lightTarget, [0, 0, 1]);

    // update shadow matrix
    mat4.mul(
      this._mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    // set camera to light camera
    GL.setMatrices(this._cameraLight);

    // update shadow map
    this._fboShadow.bind();
    GL.clear(0, 0, 0, 0);
    this._renderText(true);
    this._fboShadow.unbind();

    // reset camera
    GL.setMatrices(this.camera);
  }

  _renderText(mCrop) {
    GL.setModelMatrix(this.mtxWorld);
    this._drawText
      .uniform("uTime", Scheduler.getElapsedTime() * 0.2)
      .uniform("uCrop", mCrop ? 1.0 : 0.0)
      .uniform("uOffset", this._offsetOpen.value)
      .draw();
  }

  render() {
    let s;
    if (!isARSupported) {
      const g = 0.2;
      GL.clear(g, g, g, 1);
      mat4.mul(this.mtxWorld, this.mtxHit, this._drawText.container.matrix);
      this._updateShadowMap();
    } else {
      if (!this._hasStarted) {
        const mtxHit = hitTest();
        if (mtxHit !== null) {
          this._offsetHit.value = 1;
          mat4.copy(this.mtxHit, mtxHit);
        }
      }

      mat4.mul(this.mtxWorld, this.mtxHit, this._drawText.container.matrix);
      this._updateShadowMap();
      setCamera(GL, this.camera);
    }

    // debug
    s = 0.01;
    // this._dBall.draw(this._lightPos, [s, s, s], [1, 0.8, 0]);
    // this._dBall.draw(this._lightTarget, [s, s, s], [1, 0.8, 0]);
    // this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._drawMark.uniform("uOffset", this._offsetHit.value).draw();

    // draw floor
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uOpacity", 1.0 - this._offsetHit.value)
      .draw();

    this._renderText(false);

    // s = 400;
    // GL.viewport(0, 0, s, s);
    // this._dCopy.draw(this._fboShadow.depthTexture);

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    const pixelRatio = 2.0;
    if (GL.isMobile || !Config.autoSave) {
      const { innerWidth, innerHeight } = window;
      resize(innerWidth * pixelRatio, innerHeight * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    } else {
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
