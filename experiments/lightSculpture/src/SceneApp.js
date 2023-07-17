import { GL, DrawBall, DrawAxis, DrawCopy, Scene, EaseNumber } from "alfrid";
import Config from "./Config";
import resize from "./utils/resize";
import { targetWidth, targetHeight } from "./features";

import sono from "./libs/sono/sono.min.js";

import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";
import DrawLine from "./DrawLine";
import DrawRing from "./DrawRing";
import TouchScale from "./utils/TouchScale";
import { random, getDateString, saveImage } from "./utils";

let hasSaved = false;
let canSave = false;

const numChannels = 5;

class SceneApp extends Scene {
  constructor() {
    super();

    // this.orbitalControl.lock();
    // this.orbitalControl.rx.setTo(-0.4);
    // this.orbitalControl.ry.setTo(-0.4);
    this.orbitalControl.radius.setTo(2);

    // hit
    this.mtxHit = mat4.create();
    this.mtxModel = mat4.create();
    this.mtxAR = mat4.create();
    const s = 0.05;
    mat4.translate(this.mtxAR, this.mtxAR, [0, 0.5, 0]);
    mat4.scale(this.mtxAR, this.mtxAR, [s, s, s]);

    const d = 1;
    const r = 0.001;
    const getControl = (z) => {
      return [random(-r, r), random(-r, r), z];
    };

    this._controls = [
      [0, 0, -d],
      getControl(-d / 3),
      getControl(d / 3),
      [0, 0, d],
    ];
    console.table(this._controls);

    this._touchScale = new TouchScale();

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._hasStarted = false;
    this._hasPresented = false;

    this._volumes = [];
    const { numRings } = Config;
    for (let i = 0; i < numRings; i++) {
      this._volumes.push(0.5);
    }

    // this._sound = sono.createSound("assets/music.mp3");
    this._sound = sono
      .create({
        url: ["assets/music.mp3"],
        loop: true,
        volume: 0.1,
      })
      .play();

    // this._sound.loop = true;
    this._hasMusicStarted = false;
    window.addEventListener("mousedown", this.playMusic);
    window.addEventListener("touchstart", this.playMusic);
    // console.log(this._sound.effects);
    this._analyser = this._sound.effects.add(
      sono.analyser({
        fftSize: 128,
      })
    );

    this.volume = 0;

    setTimeout(() => {
      canSave = true;
    }, 1500);
  }

  playMusic = () => {
    if (this._hasMusicStarted) return;
    this._sound.play();
    this._hasMusicStarted = true;
  };

  averageAmplitude(wave) {
    let sum = 0;
    for (let i = 0; i < wave.length; i++) {
      sum += wave[i];
    }
    return sum / wave.length / 256;
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    this.resize();
    if (Config.autoSave) {
      resize(GL.canvas, targetWidth, targetHeight);
    }
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();

    this._drawLine = new DrawLine();
    this._drawRing = new DrawRing();

    this._rings = [];
    const r = 0.3;
    for (let i = 0; i < numChannels; i++) {
      let x = random(-r, r);
      let y = random(-r, r);
      const drawRing = new DrawRing(random(0.25, 1), [x, y, 0]);
      this._rings.push(drawRing);
    }
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
    const waveForm = this._analyser.getWaveform();
    const volume = this.averageAmplitude(waveForm);

    this._volumes.shift();
    this._volumes.push(volume);
    this._scales = this._volumes.map((v) => {
      const s = (v - 0.5) * 5.0 + 1;
      return [s, random()];
    });
    this._drawRing.mesh.bufferInstance(this._scales, "aScale");

    this._rings.forEach((drawRing) => {
      drawRing.mesh.bufferInstance(this._scales, "aScale");
    });
  }

  render() {
    let s;
    if (!isARSupported || !this._hasPresented) {
      GL.clear(0.05, 0.05, 0.045, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dAxis.draw();
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    mat4.identity(this.mtxModel);
    mat4.mul(this.mtxModel, this.mtxHit, this._touchScale.matrix);
    if (this._hasPresented) {
      mat4.mul(this.mtxModel, this.mtxAR, this.mtxHit);
    }

    GL.setModelMatrix(this.mtxModel);
    GL.enableAdditiveBlending();

    this._rings.forEach((drawRing) => {
      drawRing
        .uniform("uStart", this._controls[0])
        .uniform("uControl0", this._controls[1])
        .uniform("uControl1", this._controls[2])
        .uniform("uEnd", this._controls[3])
        .uniform("uViewport", [GL.width, GL.height])
        .draw();
    });

    GL.enableAlphaBlending();

    if (canSave && !hasSaved) {
      hasSaved = true;
      saveImage(GL.canvas, `LightSculptrue-${getDateString()}`);
    }
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    if (Config.autoSave) {
      GL.setSize(targetWidth, targetHeight);
    } else {
      GL.setSize(innerWidth, innerHeight);
    }
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
