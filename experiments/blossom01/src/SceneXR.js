import {
  GL,
  Draw,
  Geom,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  CameraOrtho,
  CameraPerspective,
  OrbitalControl,
  FboPingPong,
  FrameBuffer,
  TweenNumber,
} from "alfrid";
import { bind, unbind, getViewport, onXRFrame, hitTest } from "./vrutils";
import { biasMatrix } from "./utils";
import Scheduler from "scheduling";
import Config from "./Config";
import { vec3, mat4 } from "gl-matrix";

// Example code
import DrawHandRay from "./DrawHandRay";
import DrawSave from "./DrawSave";
import DrawPetals from "./DrawPetals";
import DrawSim from "./DrawSim";
import DrawShadow from "./DrawShadow";
import HandInput, { ON_DOWN, ON_DOUBLE_TAP } from "./vrutils/HandInput";

import vs from "shaders/basic.vert";
import fs from "shaders/copy.frag";

const drawRay = false;
const numSets = 32;

const getMonocolor = (v) => [v, v * 0.97, v * 0.94];

class SceneXR {
  constructor() {
    GL.disable(GL.CULL_FACE);
    // camera
    this.camera = new CameraPerspective();
    this._frame = Math.random() * 1000;

    this._initTextures();
    this._initViews();

    // shadow
    const lightY = 10;
    this._lightPos = [0.1, lightY, 0.1];
    this._light = [];
    this._mtxShadow = mat4.create();
    this._cameraLight = new CameraOrtho();
    const r = 3.5;
    this._cameraLight.ortho(-r, r, r, -r, 1, lightY + 0.1);

    this._index = 0;
    const total = numSets * numSets;
    for (let i = 0; i < total; i++) {
      this.simulate();
    }

    // states
    this._offsetOpen = new TweenNumber(1, "linear", 0.002);
    this._hasPresented = false;

    // hand tracking
    this._hands = {
      left: new HandInput(),
      right: new HandInput(),
    };

    // hit test
    this._mtxHit = mat4.create();
    this._mtxWorld = mat4.create();

    this._hands.left.on(ON_DOUBLE_TAP, () => {
      this._offsetOpen.setTo(1);
      setTimeout(() => {
        this._offsetOpen.value = 0;
      }, 1000);
    });
    this._hands.right.on(ON_DOUBLE_TAP, () => {
      const hit = hitTest();
      if (!!hit) {
        mat4.copy(this._mtxWorld, hit);
      }
    });

    onXRFrame((frame, pos, refSpace) => this._onFrame(frame, pos, refSpace));
  }

  startDesktop() {
    this.camera.setPerspective((70 * Math.PI) / 180, GL.aspectRatio, 0.1, 100);
    this.orbitalControl = new OrbitalControl(this.camera, 3, window);

    this.orbitalControl.rx.value = -0.9;
    this.orbitalControl.ry.value = -0.1;

    mat4.translate(this._mtxWorld, this._mtxWorld, [0, -1, 0]);

    this.currentFrame = 0;
    const total = numSets * numSets;
    window.addEventListener("mousemove", (e) => {
      this.currentFrame = Math.floor((e.clientX / window.innerWidth) * total);
    });

    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this._offsetOpen.setTo(1);
        this._offsetOpen.value = 0;
      }
    });

    Scheduler.addEF(() => this.renderDesktop());
  }

  _initTextures() {
    const { numParticles: num } = Config;

    // init textures
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    this._fbo = new FboPingPong(num, num, oSettings, 5);

    const fboSize = 1024 * 2;
    this._fboShadow = new FrameBuffer(fboSize, fboSize, {
      minFilter: GL.LINEAR,
      magFilter: GL.LINEAR,
    });

    this._fboWhite = new FrameBuffer(2, 2);
    this._fboWhite.bind();
    GL.clear(1, 1, 1, 1);
    this._fboWhite.unbind();

    const size = num * numSets;
    console.log(size);
    this._fboPos = new FrameBuffer(size, size, oSettings);
    this._fboPos.bind();
    GL.clear(0, 0, 0, 0);
    this._fboPos.unbind();
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();
    this._drawDebug = new Draw()
      .setMesh(Geom.plane(1, 1, 1))
      .useProgram(vs, fs);

    this._drawHandRay = new DrawHandRay();
    this._drawPetals = new DrawPetals();
    this._drawSim = new DrawSim();
    this._drawShadow = new DrawShadow();

    new DrawSave(Config.numParticles)
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fbo.read)
      .draw();
  }

  present() {
    this._hasPresented = true;
  }

  renderDesktop() {
    this.update();
    GL.viewport(0, 0, GL.width, GL.height);
    let g = 0.2;
    GL.clear(...getMonocolor(g), 1);
    GL.setMatrices(this.camera);

    this.renderScene();
  }

  simulate() {
    const time = this._frame;
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 4)
      .uniform("uTime", time)
      .draw();

    this._fbo.swap();

    this._frame += 0.01;
    const { numParticles: num } = Config;

    let tx = (this._index % numSets) * num;
    let ty = Math.floor(this._index / numSets) * num;
    this._fboPos.bind();
    GL.viewport(tx, ty, num, num);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPos.unbind();
    this._index++;
  }

  update() {
    vec3.transformMat4(this._light, this._lightPos, this._mtxWorld);
    this._cameraLight.lookAt(this._light, [0, 0, 0]);

    mat4.mul(
      this._mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this._mtxShadow, biasMatrix, this._mtxShadow);

    // update shadow map
    this._fboShadow.bind();
    GL.clear(0, 0, 0, 1);
    GL.setMatrices(this._cameraLight);
    GL.setModelMatrix(this._mtxWorld);
    this._renderPetals(false);
    this._fboShadow.unbind();
  }

  _onFrame(frame, pose, refSpace) {
    this.update();
    // rendering
    if (!pose) {
      console.log("no pose");
      return;
    }
    const { views } = pose;
    const { session } = frame;

    const hit = hitTest();
    if (!!hit) {
      mat4.copy(this._mtxHit, hit);
    } else {
      mat4.identity(this._mtxHit);
    }

    if (!!refSpace) {
      for (let inputSource of session.inputSources) {
        const { handedness } = inputSource;
        const input = this._hands[handedness];
        if (input) {
          input.update(frame, inputSource, refSpace);
        } else {
          console.log("input missing", inputSource);
        }
      }
    }

    bind(session);
    if (views.length === 1) {
      GL.clear(0, 0, 0, 1);
    }

    views.forEach((view) => {
      const { x, y, width, height } = getViewport(view, session);
      this.camera.setFromViewProjection(
        view.transform.inverse.matrix,
        view.projectionMatrix
      );
      GL.setMatrices(this.camera);
      GL.viewport(x, y, width, height);
      this.renderScene();
    });
    unbind();
  }

  _renderPetals(mShadow = true) {
    let tx = (this.currentFrame % numSets) / numSets;
    let ty = Math.floor(this.currentFrame / numSets) / numSets;

    const tDepth = mShadow
      ? this._fboShadow.depthTexture
      : this._fboWhite.texture;

    const time = Scheduler.getElapsedTime();

    this._drawPetals
      .bindTexture("uPosMap", this._fboPos.texture, 0)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 1)
      .bindTexture("uDepthMap", tDepth, 2)
      .uniform("uShadowMatrix", this._mtxShadow)
      .uniform("uUVOffset", [tx, ty])
      .uniform("uNumSets", numSets)
      .uniform("uTime", time)
      // .uniform("uOffset", this.currentFrame / (numSets * numSets))
      .uniform("uOffset", this._offsetOpen.value)
      .draw();
  }

  renderScene() {
    let g = 0.005;
    const debug = false;

    GL.setModelMatrix(mat4.create());

    if (debug) {
      this._dBall.draw(this._light, [g, g, g], [1, 0.5, 0]);
      this._dCamera.draw(this._cameraLight, [1, 1, 1]);
    }

    GL.setModelMatrix(this._mtxWorld);
    this._renderPetals();

    this._drawShadow
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this._mtxShadow)
      .draw();

    if (debug) {
      const mtx = mat4.create();
      mat4.translate(mtx, mtx, [-1, -1, -1]);
      GL.setModelMatrix(mtx);
      this._drawDebug
        .bindTexture("uMap", this._fboShadow.depthTexture, 0)
        .draw();
    }

    if (!this._hasPresented) {
      return;
    }

    for (let s in this._hands) {
      const input = this._hands[s];
      const { matrix, joints, position } = input;
      // draw hand joints
      GL.setModelMatrix(mat4.create());
      joints.forEach((p) => {
        this._dBall.draw(p, [g, g, g], [1, 0.5, 0]);
      });
      this._dBall.draw(position, [g, g, g], [1, 0.5, 0]);

      // draw ray
      if (drawRay) {
        GL.setModelMatrix(matrix);
        this._drawHandRay.draw();
      }
    }

    // draw hit
    GL.setModelMatrix(this._mtxHit);
    g = 0.01;
    this._dBall.draw([0, 0, 0], [g, g, g], [1, 0, 0]);
  }
}

export default SceneXR;
