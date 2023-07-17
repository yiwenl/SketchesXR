import {
  GL,
  Draw,
  Geom,
  DrawBall,
  DrawAxis,
  DrawCopy,
  DrawCamera,
  Scene,
  EaseNumber,
  GLShader,
  FrameBuffer,
  FboPingPong,
  CameraOrtho,
} from "alfrid";

import {
  isARSupported,
  setCamera,
  hitTest,
  getCameraTexture,
  mtxCamera,
} from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import Config from "./Config";
import DrawMark from "./DrawMark";
import DrawCompose from "./DrawCompose";
import Scheduler from "scheduling";
import { biasMatrix } from "./utils";

// particles
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";
import DrawFloor from "./DrawFloor";

import { ShaderLibs } from "./alfrid/shader";
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";

let hasSaved = false;
let canSave = false;

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
    this.mtxShadow = mat4.create();
    const s = 0.05;
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);

    this.pointScale = 3;

    // shadow
    this.posLight = [0, 0, 0];
    this.cameraLight = new CameraOrtho();
    const r = 0.3;
    this.cameraLight.ortho(-r, r, r, -r, 0.25, 1.5);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    setTimeout(() => {
      canSave = true;
      this._hasStarted = true;
    }, 500);
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._hasStarted = false;
    this._offsetOpen.setTo(0);
    this._hasPresented = true;
    this.pointScale = 1;
  }

  _initTextures() {
    this.resize();

    this._fboCamera = new FrameBuffer(GL.width, GL.height);
    this._fboRender = new FrameBuffer(GL.width, GL.height);
    this._fboComposed = new FrameBuffer(GL.width, GL.height);

    const fboSize = 2048;
    this._fboShadow = new FrameBuffer(fboSize, fboSize);
    this._fboShadow.bind();
    GL.clear(0, 0, 0, 0);
    this._fboShadow.unbind();

    this._fboCamera.bind();
    GL.clear(1, 1, 1, 1);
    this._fboCamera.unbind();

    const { numParticles: num } = Config;
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    this._fbo = new FboPingPong(num, num, oSettings, 5);
    this._fboPosOrg = new FrameBuffer(num, num, oSettings);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    this._dCamera = new DrawCamera();

    this._drawFloor = new DrawFloor();
    this._drawCompose = new DrawCompose();
    this._drawRender = new DrawRender();
    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .setClearColor(0, 0, 0, 0);

    new DrawSave()
      .bindFrameBuffer(this._fbo.read)
      .setClearColor(0, 0, 0, 0)
      .draw();

    this._fboPosOrg.bind();
    GL.clear(0, 0, 0, 0);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPosOrg.unbind();
  }

  _onTouch = () => {
    // console.log("on Touch", this._hasPresented, this._hasStarted);
    if (this._hasStarted) {
      // console.log("capture");
      return;
    }
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

  renderParticles(mShadow) {
    const tDepth = mShadow
      ? this._fboShadow.depthTexture
      : this._fboPosOrg.texture;
    mat4.mul(
      this.mtxShadow,
      this.cameraLight.projection,
      this.cameraLight.view
    );
    mat4.mul(this.mtxShadow, biasMatrix, this.mtxShadow);

    this._drawRender
      .uniform("uViewport", [GL.width, GL.height])
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 1)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 2)
      .bindTexture("uDepthMap", tDepth, 3)
      .uniform("uPointScale", this.pointScale * (1 - this._offsetHit.value))
      .uniform("uShadowMatrix", this.mtxShadow)
      .draw();
  }

  updateParticles() {
    // if (Math.random() > 0.95) {
    //   console.log(this.camera.view, this.camera.projection);
    //   console.log("Mtx camera", mtxCamera);
    //   console.log("-------");
    // }
    GL.setMatrices(this.camera);
    GL.setModelMatrix(this.mtxModel);
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 4)
      .bindTexture("uPosOrgMap", this._fboPosOrg.getTexture(), 5)
      .bindTexture("uCameraMap", this._fboCamera.texture, 6)
      .uniform("uCameraMatrix", mtxCamera)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uStarted", this._hasStarted ? 1 : 0)
      .draw();

    this._fbo.swap();
  }

  updateShadowMap() {
    GL.enable(GL.DEPTH_TEST);
    this._fboShadow.bind();
    GL.clear(1, 0, 0, 1);
    GL.setMatrices(this.cameraLight);
    GL.setModelMatrix(this.mtxModel);
    this.renderParticles(false);
    this._fboShadow.unbind();
  }

  update() {
    this.camTexture = getCameraTexture();

    if (!this.meshTri) {
      this.meshTri = Geom.bigTriangle();
      this.shaderCopy = new GLShader(
        ShaderLibs.bigTriangleVert,
        ShaderLibs.copyFrag
      );
    }

    if (this.camTexture) {
      const { gl } = GL;
      this._fboCamera.bind();
      GL.clear(0, 0, 0, 1);

      this.shaderCopy.bind();
      gl.activeTexture(gl.TEXTURE0);
      // gl.bindTexture(gl.TEXTURE_2D, this.camTexture);
      const uniformLoc = gl.getUniformLocation(
        this.shaderCopy.shaderProgram,
        "texture"
      );
      gl.uniform1i(uniformLoc, 0);
      // console.log("uniformLoc", uniformLoc);
      this.shaderCopy.uniform("texture", "int", 0);
      GL.draw(this.meshTri);
      this._fboCamera.unbind();
    }

    if (this._hasPresented) {
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxAR);
    } else {
      mat4.identity(this.mtxModel, this.mtxModel);
    }

    vec3.transformMat4(this.posLight, [0, 0, 0], this.mtxModel);
    const posBase = vec3.clone(this.posLight);
    this.posLight[0] += 0.2;
    this.posLight[1] += 1;
    this.cameraLight.lookAt(this.posLight, posBase, [0, 1, 0]);

    this.updateParticles();
    this.updateShadowMap();
  }

  render() {
    let s;
    if (!isARSupported || !this._hasPresented) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    GL.setModelMatrix(this.mtxIdentity);
    s = 0.01;
    this._dBall.draw(this.posLight, [s, s, s], [1, 0, 0]);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    GL.enable(GL.DEPTH_TEST);
    this._drawFloor
      .bindTexture("uDepthMap", this._fboShadow.depthTexture, 0)
      .uniform("uShadowMatrix", this.mtxShadow)
      .draw();
    this.renderParticles(true);

    s = 1;
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._fbo.read.getTexture(4));
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    GL.setSize(innerWidth, innerHeight);
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
