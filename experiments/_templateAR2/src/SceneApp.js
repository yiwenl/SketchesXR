import {
  GL,
  Geom,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  EaseNumber,
  GLShader,
  FrameBuffer,
} from "alfrid";

import {
  bind,
  unbind,
  isARSupported,
  setCamera,
  hitTest,
  getCameraTexture,
} from "./ARUtils";
import { mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";

import { ShaderLibs } from "./alfrid/shader";

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
      const uniformLoc = gl.getUniformLocation(
        this.shaderCopy.shaderProgram,
        "texture"
      );
      gl.uniform1i(uniformLoc, 0);
      this.shaderCopy.uniform("texture", "int", 0);
      GL.draw(this.meshTri);
      this._fboCamera.unbind();
    }
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

    GL.setModelMatrix(this.mtxModel);
    // draw world

    if (this.camTexture) {
      s = 500;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(this._fboCamera.getTexture());
    }

    GL.enable(GL.DEPTH_TEST);
  }
}

export default SceneApp;
