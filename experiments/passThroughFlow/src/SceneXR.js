import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  CameraOrtho,
  CameraPerspective,
  OrbitalControl,
  EaseNumber,
  FboPingPong,
  FrameBuffer,
} from "alfrid";
import { random, biasMatrix } from "./utils";
import { bind, unbind, getViewport, onXRFrame, time, hitTest } from "./vrutils";
import Scheduler from "scheduling";
import { vec2, vec3, mat4 } from "gl-matrix";
import Config from "./Config";

// fluid simulation
import FluidSimulation from "./fluid-sim";

// Example code
import DrawHandRay from "./DrawHandRay";
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";
import DrawSim from "./DrawSim";
import DrawFloor from "./DrawFloor";
import HandInput, {
  ON_DOWN,
  ON_DRAG,
  ON_UP,
  ON_DOUBLE_TAP,
} from "./vrutils/HandInput";

const bound = 2;
const yOffset = 1.4;
const showHands = true;
const showRay = false;

class SceneXR {
  constructor() {
    // camera
    this.camera = new CameraPerspective();

    this._initTextures();
    this._initViews();

    // states
    this._offsetOpen = new EaseNumber(0);
    this._hasPresented = false;

    // fluid
    const DISSIPATION = 0.98;
    this._fluid = new FluidSimulation({
      DENSITY_DISSIPATION: DISSIPATION,
      VELOCITY_DISSIPATION: DISSIPATION,
      PRESSURE_DISSIPATION: DISSIPATION,
    });

    // shadow
    this._light = [];
    this._lightPos = [0.1, 2, 0.2];
    this._cameraLight = new CameraOrtho();

    const r = 2;
    this._cameraLight.ortho(-r, r, r, -r, 0.5, 4);
    this._cameraLight.lookAt(this._lightPos, [0, 0, 0]);

    this.mtxShadow = mat4.create();
    mat4.mul(
      this.mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this.mtxShadow, biasMatrix, this.mtxShadow);

    // hand tracking
    this._hands = {
      left: new HandInput(),
      right: new HandInput(),
    };

    this._tipPosRight = [999, 999, 999];
    this._tipPosLeft = [999, 999, 999];
    this._forceAttrRight = new EaseNumber(0, 0.05);
    this._forceAttrLeft = new EaseNumber(0, 0.05);

    // moving
    this._mtx = mat4.create();
    this._mtxWorld = mat4.create();
    this._mtxWorldInv = mat4.create();
    this._mtxHit = mat4.create();
    this._mtxAnchor = mat4.create();

    const scale = 0.3;
    mat4.translate(this._mtx, this._mtx, [0, 0, -0.5]);
    mat4.scale(this._mtx, this._mtx, [scale, scale, scale]);
    mat4.copy(this._mtxWorld, this._mtx);
    mat4.invert(this._mtxWorldInv, this._mtxWorld);

    onXRFrame((frame, pos, refSpace) => this._onFrame(frame, pos, refSpace));
  }

  startDesktop() {
    this.camera.setPerspective((70 * Math.PI) / 180, GL.aspectRatio, 0.01, 10);
    this.orbitalControl = new OrbitalControl(this.camera, 3, window);
    this._offsetOpen.value = 1;
    const mtxShift = mat4.create();

    mat4.translate(mtxShift, mtxShift, [0, -yOffset, 0]);
    this.orbitalControl.updateShiftMatrix(mtxShift);

    mat4.identity(this._mtx);
    const scale = 1;
    mat4.translate(this._mtx, this._mtx, [0, yOffset, 0]);
    mat4.scale(this._mtx, this._mtx, [scale, scale, scale]);
    mat4.copy(this._mtxWorld, this._mtx);
    mat4.invert(this._mtxWorldInv, this._mtxWorld);

    window.addEventListener("resize", this.resize);
    Scheduler.addEF(() => this.renderDesktop());
  }

  _initTextures() {
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    const { numParticles: num } = Config;
    this._fbo = new FboPingPong(num, num, oSettings, 5);
    this._fboPos = new FrameBuffer(num, num, oSettings);

    const fboSize = 1024;
    this._fboShadow = new FrameBuffer(fboSize, fboSize, {
      minFilter: GL.LINEAR,
      magFilter: GL.LINEAR,
      type: GL.UNSIGNED_BYTE,
    });
  }

  present() {
    // const s = 0.2;
    mat4.identity(this._mtx);
    mat4.translate(this._mtx, this._mtx, [0, yOffset - 1.75, -0.5]);
    // mat4.scale(this._mtx, this._mtx, [s, s, s]);
    mat4.copy(this._mtxWorld, this._mtx);
    mat4.invert(this._mtxWorldInv, this._mtxWorld);

    this._hasPresented = true;

    this._hands.right.on(ON_DOUBLE_TAP, () => {
      const hit = hitTest();
      if (!!hit) {
        const mtxHit = mat4.clone(hit);
        const posHit = vec3.transformMat4([], [0, 0, 0], mtxHit);
        const posCamera = this.camera.position;

        const dir = vec3.sub([], posCamera, posHit);
        dir[1] = 0;
        vec3.normalize(dir, dir);
        const mtxLookAt = mat4.create();
        mat4.lookAt(mtxLookAt, dir, [0, 0, 0], [0, 1, 0]);
        mat4.invert(mtxLookAt, mtxLookAt);
        mat4.multiply(mtxHit, mtxHit, mtxLookAt);

        // update matrix
        mat4.copy(this._mtxAnchor, mtxHit);
        mat4.mul(this._mtxWorld, this._mtxAnchor, this._mtx);
        mat4.invert(this._mtxWorldInv, this._mtxWorld);
      }
    });

    this._hands.left.on(ON_DOUBLE_TAP, () => {
      this._offsetOpen.value = 1;
    });

    const hands = ["left", "right"];
    hands.forEach((s) => {
      // this._hands[s].on(ON_DOWN, () => {
      // });

      const name = s.substring(0, 1).toUpperCase() + s.substring(1);

      this._hands[s].on(ON_DRAG, ({ position }) => {
        // vec3.copy(this[`_tipPos${name}`], e.position);
        vec3.transformMat4(this[`_tipPos${name}`], position, this._mtxWorldInv);
        this[`_forceAttr${name}`].value = 1;
      });

      this._hands[s].on(ON_UP, () => {
        this[`_tipPos${name}`] = [999, 999, 999];
        this[`_forceAttr${name}`].value = 0;
      });
    });
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();
    this._drawHandRay = new DrawHandRay();

    this._drawRender = new DrawRender();
    this._drawSim = new DrawSim();
    this._drawFloor = new DrawFloor().uniform("uOffset", -yOffset);

    // init particles
    this._drawSave = new DrawSave()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fbo.read)
      .draw();

    this._fboPos.bind();
    GL.clear(0, 0, 0, 1);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPos.unbind();
  }

  renderScene() {
    GL.setModelMatrix(this._mtxWorld);

    this._renderParticles(true);

    GL.setModelMatrix(mat4.create());

    let g = 0.05;
    // GL.setModelMatrix(this._mtx);
    // this._dBall.draw(this._light, [g, g, g], [1, 0.5, 0]);
    // this._dCamera.draw(this._cameraLight, [1, 0.5, 0]);

    if (showHands) {
      for (let s in this._hands) {
        const input = this._hands[s];
        if (!input.isReady) continue;
        const { matrix, joints, position } = input;
        // draw hand joints
        g = 0.002;
        GL.setModelMatrix(mat4.create());
        joints.forEach((p) => {
          this._dBall.draw(p, [g, g, g], [1, 0.5, 0]);
        });
        this._dBall.draw(position, [g, g, g], [1, 0.5, 0]);

        // draw ray
        if (showRay) {
          GL.setModelMatrix(matrix);
          this._drawHandRay.draw();
        }
      }
    }

    // draw hit
    GL.setModelMatrix(this._mtxHit);
    g = 0.01;
    // this._dBall.draw([0, 0, 0], [g, g, g], [1, 0, 0]);

    GL.setModelMatrix(this._mtxWorld);
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this.mtxShadow)
      .draw();
  }

  _renderParticles(mShadow = false) {
    const tDepth = mShadow
      ? this._fboShadow.depthTexture
      : this._fboPos.texture;

    this._drawRender
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 2)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 3)
      .bindTexture("uDepthMap", tDepth, 4)
      .uniform("uShadowMatrix", this.mtxShadow)
      .uniform("uParticleScale", 1)
      .uniform("uLight", this._lightPos)
      .draw();
  }

  renderDesktop() {
    this.update();
    GL.viewport(0, 0, GL.width, GL.height);
    GL.clear(0, 0, 0, 0);
    GL.setMatrices(this.camera);
    this.renderScene();
  }

  updateFluid() {
    let num = 5;
    let r = 0.15;
    const getRadius = () => random(1, 1.5);
    const getForce = () => random(5, 8);
    const getCenter = () => [random(0.4, 0.6), random(0.3, 0.7)];
    const { PI } = Math;
    for (let i = 0; i < num; i++) {
      const a = (i / num) * PI * 2 + time * 0.25;
      const pos = [r + random(-1, 1) * 0.05, 0];
      const dir = [-random(0.5, 1), 1];
      vec2.rotate(pos, pos, [0, 0], a);
      vec2.rotate(dir, dir, [0, 0], a);
      vec2.normalize(dir, dir);
      vec2.add(pos, pos, getCenter());
      vec2.scale(dir, dir, 0.05);
      this._fluid.updateFlow(pos, dir, getForce(), getRadius(), 1);
    }

    num = 4;
    r = 0.15;
    for (let i = 0; i < num; i++) {
      const a = (i / num) * PI * 2 + time * 0.43;
      r = random(0.1, 0.3);
      const pos = [r + random(-1, 1) * 0.05, 0];
      const dir = [random(0.2, -0.2), -1];
      vec2.rotate(pos, pos, [0, 0], a);
      vec2.rotate(dir, dir, [0, 0], a);
      vec2.normalize(dir, dir);
      vec2.add(pos, pos, getCenter());
      vec2.scale(dir, dir, 0.05);
      this._fluid.updateFlow(pos, dir, getForce(), getRadius(), 1);
    }

    this._fluid.update();
  }

  update() {
    this.updateFluid();

    // update particles
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 4)
      .bindTexture("uFluidMap", this._fluid.velocity, 5)
      .bindTexture("uDensityMap", this._fluid.density, 6)
      .bindTexture("uPosOrgMap", this._fboPos.texture, 6)
      .uniform("uBound", bound)
      .uniform("uTime", time)
      .uniform("uSpeed", this._offsetOpen.value)
      .uniform("uTouchLeft", this._tipPosLeft)
      .uniform("uTouchRight", this._tipPosRight)
      .uniform("uForceLeft", this._forceAttrLeft.value)
      .uniform("uForceRight", this._forceAttrRight.value)
      .draw();

    this._fbo.swap();

    GL.setModelMatrix(this._mtxWorld);

    // update light
    vec3.transformMat4(this._light, this._lightPos, this._mtxWorld);
    const lightOrigin = [0, 0, 0];
    vec3.transformMat4(lightOrigin, lightOrigin, this._mtxWorld);
    this._cameraLight.lookAt(this._light, lightOrigin);
    mat4.mul(
      this.mtxShadow,
      this._cameraLight.projection,
      this._cameraLight.view
    );
    mat4.mul(this.mtxShadow, biasMatrix, this.mtxShadow);

    // update shadow map
    this._updateShadowMap();
  }

  _updateShadowMap() {
    this._fboShadow.bind();
    GL.clear(1, 1, 1, 1);
    GL.setMatrices(this._cameraLight);
    GL.setModelMatrix(this._mtxWorld);
    this._renderParticles(false);
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

  resize = () => {
    const { innerWidth, innerHeight } = window;
    GL.setSize(innerWidth, innerHeight);
    if (this.camera) {
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  };
}

export default SceneXR;
