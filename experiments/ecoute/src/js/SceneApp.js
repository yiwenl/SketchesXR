import {
  GL,
  Scene,
  Geom,
  GLShader,
  Draw,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  Object3D,
  CameraOrtho,
  EaseNumber,
  FrameBuffer,
} from "alfrid";
import Assets from "./Assets";
import { resize, biasMatrix, saveImage, getDateString } from "./utils";
import TouchScale from "./utils/TouchScale";

import { isARSupported, setCamera, hitTest } from "./ARUtils";
import DrawMark from "./DrawMark";
import { vec3, mat4 } from "gl-matrix";

import vs from "shaders/basic.vert";
import fs from "shaders/diffuse.frag";
import vsFloor from "shaders/basic.vert";
import fsFloor from "shaders/floor.frag";

const GENERAL_SCALE = 1.0;
const LIGHT_HEIGHT = 0.7;

let hasSaved = false;
let canSave = false;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(0.3);
    this.orbitalControl.ry.setTo(0.3);
    this.orbitalControl.radius.setTo(1);
    this.orbitalControl.rx.limit(0.0, Math.PI / 2);
    this.orbitalControl.lock();

    // shadow
    this._lightPos = vec3.create();
    this._lightTarget = vec3.create();
    this._mtxShadow = mat4.create();
    const r = 0.5 * GENERAL_SCALE;
    this._cameraLight = new CameraOrtho(-r, r, r, -r, 0.1, 1);

    // hit
    this.mtxHit = mat4.create();
    this.mtxWorld = mat4.create();
    mat4.translate(this.mtxHit, this.mtxHit, [0, -0.1, 0]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._hasStarted = false;
    this._needUpdateShadow = true;
    this.globalScale = new TouchScale();

    // set size
    this.resize();
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());
  }

  _initTextures() {
    const fboSize = GL.isMobile ? 2048 : 4096;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dCamera = new DrawCamera();
    this._dMark = new DrawMark();

    const shader = new GLShader(vs, fs);

    const getDraw = (mId, mNormalScale) => {
      return new Draw()
        .setMesh(Assets.get(mId))
        .useProgram(shader)
        .bindTexture("uNormalMap", Assets.get("handNormal"), 0)
        .uniform("uNormalScale", mNormalScale);
    };
    this._draws = [getDraw("ecoute_head", 0), getDraw("ecoute_hand", 1)];

    let s = 5;
    this._drawFloor = new Draw()
      .setMesh(Geom.plane(s, s, 1, "xz"))
      .useProgram(vsFloor, fsFloor);

    // container

    s = 0.1;
    this._container = new Object3D();
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = s;
    this._container.rotationY = -Math.PI / 2;

    setTimeout(() => {
      canSave = true;
    }, 500);
  }

  _onTouch() {
    if (this._hasStarted) {
      return;
    }

    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.5;
    }
  }

  _updateShadowMap() {
    if (!this._needUpdateShadow) {
      return;
    }

    let s = this.globalScale.value * 0.1;
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = s;

    // update camera position
    s = this.globalScale.value;
    const mtxLight = mat4.clone(this.mtxHit);
    mat4.scale(mtxLight, mtxLight, [s, s, s]);

    vec3.transformMat4(this._lightTarget, [0, 0, 0], mtxLight);
    vec3.transformMat4(
      this._lightPos,
      [
        -0.15 * GENERAL_SCALE,
        LIGHT_HEIGHT * GENERAL_SCALE,
        0.25 * GENERAL_SCALE,
      ],
      mtxLight
    );
    this._cameraLight.lookAt(this._lightPos, this._lightTarget);

    const r = 0.5 * GENERAL_SCALE * s;
    this._cameraLight.ortho(-r, r, r, -r, 0.1 * s, 1 * s);

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
    this._drawStatue();
    this._fboShadow.unbind();

    // reset camera
    GL.setMatrices(this.camera);
  }

  _drawStatue() {
    GL.setModelMatrix(this.mtxWorld);
    this._draws.forEach((draw) => {
      draw.uniform("uLightPos", this._lightPos).draw();
    });
  }

  render() {
    let s;
    if (!isARSupported) {
      this._updateShadowMap();
      const g = 0.1;
      GL.clear(g, g, g, 1);
    } else {
      if (!this._hasStarted) {
        const mtxHit = hitTest();
        if (mtxHit !== null) {
          this._offsetHit.value = 1;
          mat4.copy(this.mtxHit, mtxHit);
        }
      }

      this._updateShadowMap();
      setCamera(GL, this.camera);
    }

    // update statue matrix
    mat4.mul(this.mtxWorld, this.mtxHit, this._container.matrix);

    // debugs
    s = 0.01;
    this._dBall.draw(this._lightPos, [s, s, s], [1, 1, 0]);
    this._dBall.draw(this._lightTarget, [s, s, s], [1, 1, 0]);
    this._dCamera.draw(this._cameraLight);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();
    // this._dAxis.draw();

    // draw floor and hide
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .draw();

    this._drawStatue();

    if (!hasSaved && canSave && !GL.isMobile) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    if (GL.isMobile) {
      const { innerWidth, innerHeight } = window;
      resize(innerWidth, innerHeight);
      this.camera.setAspectRatio(GL.aspectRatio);
    } else {
      const pixelRatio = 2.0;
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
