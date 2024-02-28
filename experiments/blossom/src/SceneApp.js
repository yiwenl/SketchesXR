import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  FrameBuffer,
  FboPingPong,
  EaseNumber,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";
import DrawBg from "./DrawBg";

import Config from "./Config";
import Assets from "./Assets";

// utils
import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";
import { random } from "./utils";

// draw calls
import DrawPetals from "./DrawPetals";
import DrawSave from "./DrawSave";

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
    this.touchScale = new TouchScale();
    this.touchScale.limit(0.1, 5);

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    // control points
    const r = 1;
    const getControlPoint = (y) => {
      return [random(-r, r), y, random(-r, r)];
    };

    const l = 5;
    this._controlPoints = [
      [0, 0, 0],
      getControlPoint(l / 3),
      getControlPoint((l * 2) / 3),
      getControlPoint(l),
    ];
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

    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    const { numParticles: num } = Config;
    this._fbo = new FboPingPong(num, num, oSettings, 5);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();

    this._dEnv = new DrawEnv()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboEnv);

    this._drawBg = new DrawBg()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboBg);

    // init particles
    new DrawSave()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fbo.read)

      .draw();

    this._drawPetals = new DrawPetals();
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
    if (this._hasPresented) updateCameraTexture();
    if (!isARSupported || !this._hasPresented) {
      this._dEnv.draw();
    }

    let tBg;
    if (!this._hasPresented || !isARSupported) {
      tBg = this._fboEnv.texture;
    } else {
      tBg = getCameraTexture();
    }
    this._drawBg
      .bindTexture("uMap", tBg, 0)
      .bindTexture("uLookupMap", this._textureLookup, 1)
      .draw();
  }

  _renderParticles() {
    this._controlPoints.forEach((p, i) => {
      this._drawPetals.uniform(`uPoint${i}`, "vec3", p);
    });

    this._drawPetals
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uDataMap", this._fbo.read.getTexture(2), 1)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 2)
      .draw();
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
      mat4.mul(this.mtxModel, this.mtxAR, this.touchScale.matrix);
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxModel);
    } else {
      mat4.identity(this.mtxModel, this.mtxModel);
    }

    GL.disable(GL.DEPTH_TEST);
    this._dCopy.draw(this._fboBg.texture);
    GL.enable(GL.DEPTH_TEST);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);
    // draw world
    this._renderParticles();

    s = 0.05;
    this._controlPoints.forEach((p) => {
      this._dBall.draw(p, [s, s, s], [1, 0, 0]);
    });

    s = 256 / 2;
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._fbo.read.getTexture(0));

    if (isARSupported && this._hasPresented) {
      s = 1;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCameraTexture());
    }

    GL.enable(GL.DEPTH_TEST);
  }
}

export default SceneApp;
