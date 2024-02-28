import {
  GL,
  DrawBall,
  DrawCopy,
  DrawCamera,
  Scene,
  FboPingPong,
  FrameBuffer,
  EaseNumber,
  CameraOrtho,
} from "alfrid";
import { vec3, mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";
import DrawBg from "./DrawBg";

import Config from "./Config";
import Assets from "./Assets";
import { updateCameraTexture, getCamera } from "./utils/cameraTexture";
import { random, biasMatrix } from "./utils";
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
import DrawSave from "./DrawSave";
import DrawSim from "./DrawSim";
import DrawRibbon from "./DrawRibbon";
import DrawFloor from "./DrawFloor";
import DrawScramble from "./DrawScramble";

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
    const k = 0.05;
    mat4.translate(this.mtxAR, this.mtxAR, [0, 0.2, 0]);
    mat4.scale(this.mtxAR, this.mtxAR, [k, k, k]);
    this.touchScale = new TouchScale();
    this.touchScale.limit(0.1, 5);

    this._index = 0;
    this._seedTime = random(1000) * 0;
    this._hit = [999, 999, 999];
    const { numParticles: s, numSets: t } = Config;

    // init ribbon position
    this._fboPos.bind();
    for (let j = 0; j < t; j++) {
      for (let i = 0; i < t; i++) {
        GL.viewport(i * s, j * s, s, s);
        this._dCopy.draw(this._fbo.read.getTexture(0));
      }
    }
    this._fboPos.unbind();

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    this.cameraLight = new CameraOrtho();

    // shadow matrix
    this.mtxShadow = mat4.create();
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

    // particles
    const { numParticles: num, numSets } = Config;
    const oSettings = {
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
      type: GL.FLOAT,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 4);

    // position array
    let fboSize = num * numSets;
    this._fboPos = new FrameBuffer(fboSize, fboSize, oSettings);
    this._fboScrambled = new FrameBuffer(fboSize, fboSize, oSettings);

    fboSize = 1024 * 2;
    this._fboShadow = new FrameBuffer(fboSize, fboSize, {
      minFilter: GL.LINEAR,
      magFilter: GL.LINEAR,
    });
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dCamera = new DrawCamera();
    this._drawFloor = new DrawFloor();

    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboEnv);
    this._drawBg = new DrawBg()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboBg);

    // init particles
    new DrawSave().bindFrameBuffer(this._fbo.read).draw();
    this._drawSim = new DrawSim();
    this._drawRibbon = new DrawRibbon();
    this._drawScramble = new DrawScramble().bindFrameBuffer(this._fboScrambled);
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

  _renderRibbon(mShadow = false) {
    const tDepth = mShadow
      ? this._fboShadow.depthTexture
      : this._fbo.read.getTexture(0);

    this._drawRibbon
      // .bindTexture("uPosMap", this._fboPos.texture, 0)
      .bindTexture("uPosMap", this._fboScrambled.texture, 0)
      .bindTexture("uDepthMap", tDepth, 1)
      .uniform("uIndex", this._index)
      .uniform("uLight", this.pointLight)
      .uniform("uShadowMatrix", this.mtxShadow)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uTouch", this._hit)
      .draw();
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

    const cy = this._hasPresented ? 0 : 0;
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uTime", Scheduler.getElapsedTime() + this._seedTime)
      .uniform("uSpeed", 1)
      .uniform("uTouch", this._hit)
      .uniform("uNoiseScale", 1)
      .uniform("uCenter", [0, cy, 0])
      .draw();

    this._fbo.swap();

    const { numParticles: num, numSets: numSetsStr } = Config;
    const numSets = parseInt(numSetsStr);
    const tx = this._index % numSets;
    const ty = Math.floor(this._index / numSets);
    this._index++;
    if (this._index >= numSets * numSets) {
      this._index = 0;
    }

    GL.disable(GL.DEPTH_TEST);
    this._fboPos.bind();
    GL.viewport(tx * num, ty * num, num, num);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPos.unbind();

    this._drawScramble
      .bindFrameBuffer(this._fboScrambled)
      .bindTexture("uPosMap", this._fboPos.texture, 0)
      .uniform("uTime", Scheduler.getElapsedTime() + this._seedTime)
      .draw();

    GL.enable(GL.DEPTH_TEST);

    this.updateShadowMap();
  }

  updateShadowMap() {
    // update light position
    const mtx = mat4.create();
    mat4.mul(mtx, this.mtxAR, this.touchScale.matrix);

    this.pointZero = [0, 0, 0];
    this.pointLight = [0, 6, 1];
    vec3.transformMat4(this.pointZero, this.pointZero, this.mtxModel);
    vec3.transformMat4(this.pointLight, this.pointLight, this.mtxModel);

    const r = this.touchScale.value * (this._hasPresented ? 0.05 : 1);
    const d = 4;
    this.cameraLight.ortho(-r * d, r * d, r * d, -r * d, 1 * r, 15 * r);
    this.cameraLight.lookAt(this.pointLight, this.pointZero);

    mat4.mul(
      this.mtxShadow,
      this.cameraLight.projection,
      this.cameraLight.view
    );
    mat4.mul(this.mtxShadow, biasMatrix, this.mtxShadow);

    this._fboShadow.bind();
    GL.clear(0, 0, 0, 1);
    GL.setMatrices(this.cameraLight);
    GL.setModelMatrix(this.mtxModel);
    this._renderRibbon(false);
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
    // this._dBall.draw(this.pointZero, [s, s, s], [1, 0, 0]);
    // this._dBall.draw(this.pointLight, [s, s, s], [1, 1, 0]);
    // this._dCamera.draw(this.cameraLight, [1, 1, 1]);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this.mtxShadow)
      .draw();

    GL.setModelMatrix(this.mtxModel);

    // draw world
    this._renderRibbon(true);

    s = 1;
    if (this._hasPresented) {
      // s = viewport[2] * 0.25;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCamera());
      GL.viewport(s, 0, s, s);
      this._dCopy.draw(this._fboShadow.texture);
      GL.viewport(s * 2, 0, s, s);
      this._dCopy.draw(this._fboShadow.depthTexture);
    } else {
      // s = GL.width / 4;
      GL.viewport(0, 0, s, s);
      this._dCopy.draw(this._fboShadow.texture);
      GL.viewport(s, 0, s, s);
      this._dCopy.draw(this._fboShadow.depthTexture);
    }
  }
}

export default SceneApp;
