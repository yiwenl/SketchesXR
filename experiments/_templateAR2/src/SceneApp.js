import {
  GL,
  Draw,
  Geom,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  EaseNumber,
  GLTexture,
  GLShader,
  FrameBuffer,
} from "alfrid";

import {
  isARSupported,
  setCamera,
  hitTest,
  getCameraTexture,
  getDepthImage,
} from "./ARUtils";
import { mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";

import { createCanvas } from "./utils/setupProject2D";

import vs from "shaders/basic.vert";
import fs from "shaders/diffuse.frag";
import fsCompose from "shaders/compose.frag";
import { ShaderLibs } from "./alfrid/shader";

let hasSaved = false;
let canSave = false;

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
    mat4.translate(this.mtxAR, this.mtxAR, [0, 0.2, 0]);
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    setTimeout(() => {
      canSave = true;
    }, 500);
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    this.resize();

    this._fboCamera = new FrameBuffer(GL.width, GL.height);
    this._fboComposed = new FrameBuffer(GL.width, GL.height);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();

    // const mesh = Geom.cube(1, 1, 1);
    const mesh = Geom.cylinder(24);
    this._draw = new Draw().setMesh(mesh).useProgram(vs, fs);

    this._drawCompose = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fsCompose);
  }

  _onTouch = () => {
    // console.log("on Touch", this._hasPresented, this._hasStarted);
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

    const depthImage = getDepthImage();
    if (depthImage) {
      if (!this.cameraDepth) {
        this.cameraDepth = new GLTexture(depthImage);
        this.cameraDepth.bind(0);
      } else {
        this.cameraDepth.updateTexture(depthImage);
      }
    }

    // this._fboComposed.bind();
    // GL.clear(0, 0, 0, 0);
    // if (this.camTexture && this.cameraDepth) {
    //   this._drawCompose
    //     .bindTexture("uColorMap", this._fboCamera.texture, 0)
    //     .bindTexture("uDepthMap", this.cameraDepth, 1)
    //     .draw();
    // }
    // this._fboComposed.unbind();
  }

  render() {
    let s;
    if (!isARSupported || !this._hasPresented) {
      GL.clear(0, 0, 0, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    if (this._hasPresented) {
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxAR);
    } else {
      mat4.identity(this.mtxModel, this.mtxModel);
    }

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.disable(GL.DEPTH_TEST);
    // if (this.camTexture) {
    // this._dCopy.draw(this._fboComposed.texture);

    if (this.camTexture && this.cameraDepth) {
      this._drawCompose
        .bindTexture("uColorMap", this._fboCamera.texture, 0)
        .bindTexture("uDepthMap", this.cameraDepth, 1)
        .draw();
    }

    // s = 400;
    // if (this.camTexture) {
    //   GL.viewport(0, 0, s, s / GL.aspectRatio);
    //   this._dCopy.draw(this._fboCamera.texture);
    // }

    // if (this.cameraDepth) {
    //   GL.viewport(
    //     s,
    //     0,
    //     s,
    //     s / (this.cameraDepth.width / this.cameraDepth.height)
    //   );
    //   this._dCopy.draw(this.cameraDepth);
    // }

    GL.enable(GL.DEPTH_TEST);
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    GL.setSize(innerWidth, innerHeight);
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
