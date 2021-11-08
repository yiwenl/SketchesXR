import {
  GL,
  Scene,
  GLShader,
  Draw,
  Geom,
  DrawBall,
  DrawCopy,
  DrawAxis,
  EaseNumber,
  TweenNumber,
  Object3D,
  FboPingPong,
} from "alfrid";
import {
  resize,
  saveImage,
  getDateString,
  angleBetween,
  DEGREE,
  iOS,
} from "./utils";
import { randomFloor } from "randomutils";
import Scheduler from "scheduling";
import { onStateChange, setState, States, getState } from "./States";

import Config from "./Config";
import Assets from "./Assets";
import { setCamera, hitTest, isARSupported } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import TouchScale from "./utils/TouchScale";

import DrawMark from "./DrawMark";
import DrawButterFlies from "./DrawButterflies";
import DrawSave from "./DrawSave";
import DrawFilmGrain from "./DrawFilmGrain";

import SceneIntro from "./SceneIntro";
import SceneSwarm from "./SceneSwarm";

import vsBasic from "shaders/basic.vert";
import vsFloor from "shaders/floor.vert";
import fsSculpture from "shaders/sculpture.frag";
import fsFloor from "shaders/floor.frag";
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";

let hasSaved = false;
let canSave = false;

const DEFAULT_Y = 0.25;
const RAD = Math.PI / 180;

class SceneApp extends Scene {
  constructor() {
    super();

    onStateChange((o) => this._onStateChange(o));

    // camera
    this.orbitalControl.rx.setTo(-0.1);
    this.orbitalControl.ry.setTo(0.1);
    this.orbitalControl.radius.setTo(0.8);
    this.orbitalControl.rx.limit(-0.25, Math.PI / 2);
    // this.orbitalControl.radius.limit(0.1, 0.8);
    this.camera.setPerspective(Config.fov * RAD, GL.aspectRatio, 0.1, 100);

    // hit
    this._mtxHit = mat4.create();
    mat4.translate(this._mtxHit, this._mtxHit, [0, -DEFAULT_Y, 0]);
    this._posHit = vec3.create();
    this._posHitFront = vec3.create();
    this._posCam = vec3.create();
    this._dirFront = vec3.create();
    this._dirCam = vec3.create();

    // states
    this._offsetHit = new EaseNumber(0);
    this._offsetOpen = new EaseNumber(1);
    this._offsetColor = new TweenNumber(0, "linear", 0.01); // TODO Remove this
    this._hasStarted = false;
    this._hasOpened = false;
    this._hasPresented = false;
    this._shouldSwarmOpen = false;
    this._isInTransition = false;
    this._colorIndex = randomFloor(0, 3);
    this._initAngle = 0;

    this._offsetCircle = new EaseNumber(0, 0.01);

    window.addEventListener("keydown", (e) => {
      e.code === "Space" &&
        this._hasOpened &&
        !this._isInTransition &&
        this.toggleState();
    });

    this._container = new Object3D();
    this._container.y = 0.001;
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = 0.1;
    this._containerSculpture = new Object3D();
    this._containerSculpture.rotationY = -Math.PI / 2;
    this._container.addChild(this._containerSculpture);

    this._containerSwarm = new Object3D();
    this._container.addChild(this._containerSwarm);

    this._containerBufferfly = new Object3D();
    this._containerBufferfly.scaleX = this._containerBufferfly.scaleY = this._containerBufferfly.scaleZ = 0.5;
    this._container.addChild(this._containerBufferfly);
    this._containerBufferfly.y = 4;

    this._touchScale = new TouchScale(this._container.scaleX);
    this._touchScale.sensitivity = 0.1;

    this._seed = Math.random() * 0xff;

    // set size
    this.resize();
    this._drawBufferflies.open();
  }

  toggleState() {
    this._isInTransition = true;
    const state = getState();
    setState(state === States.CIRCLING ? States.SWARMING : States.CIRCLING);
  }

  updateFov() {
    this.camera.setPerspective(Config.fov * RAD, GL.aspectRatio, 0.1, 100);
  }

  present() {
    window.addEventListener("touchstart", (e) => this._onTouch());
    this._drawBufferflies.close(true);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initTextures() {
    const { numParticles: num } = Config;
    const type = iOS() ? GL.HALF_FLOAT : GL.FLOAT;
    const oSettings = {
      type,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 4);
  }

  _initViews() {
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dAxis = new DrawAxis();
    this._dMark = new DrawMark();

    const shader = new GLShader(vsBasic, fsSculpture);

    this._drawHead = new Draw()
      .setMesh(Assets.get("head"))
      .useProgram(shader)
      .bindTexture("texture", Assets.get("head_map"), 0);

    this._drawHand = new Draw()
      .setMesh(Assets.get("hand"))
      .useProgram(shader)
      .bindTexture("texture", Assets.get("hand_map"), 0);

    this._drawFloor = new Draw()
      .setMesh(Assets.get("plane"))
      .useProgram(vsFloor, fsFloor)
      .bindTexture("uMap", Assets.get("Floor_map"), 0);

    this._drawBufferflies = new DrawButterFlies();

    // particles
    new DrawSave()
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(this._fbo.read)
      .draw();

    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsPass, fsSim)
      .uniform("uNum", parseInt(Config.numParticles))
      .uniform("uCenter", 0)
      .setClearColor(0, 0, 0, 1);

    this._sceneSwarm = new SceneSwarm();
    this._sceneIntro = new SceneIntro();

    this._drawFilmGrain = new DrawFilmGrain();
  }

  _onStateChange(o) {
    console.log("state change", o, "isARSupported", isARSupported);
    const durMul = isARSupported ? 1.5 : 1.0;
    if (o === States.CIRCLING) {
      setTimeout(() => {
        this._offsetCircle.setTo(1);
        setTimeout(() => {
          this._isInTransition = false;
        }, 1000);
      }, 4000 * durMul);
    } else if (o === States.SWARMING) {
      setTimeout(() => {
        this._offsetCircle.setTo(0);
        setTimeout(() => {
          this._isInTransition = false;
        }, 1000);
      }, 2000 * durMul);
    }
  }

  _onTouch() {
    if (!isARSupported) return;
    if (this._hasOpened && !this._isInTransition) {
      this.toggleState();
      return;
    }
    if (this._hasStarted) {
      return;
    }
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this._mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this._offsetOpen.value = 1;
      this._drawBufferflies.open();
      setState(States.LANDED);
    }
  }

  _checkHit() {
    if (!this._hasStarted) {
      const mtxHit = hitTest();
      if (mtxHit !== null) {
        this._offsetHit.value = 1;
        mat4.copy(this._mtxHit, mtxHit);
        setState(States.INTRO);
      }
    }
  }

  update() {
    this._containerSwarm.rotationX = (this._offsetCircle.value * Math.PI) / 2;

    this._container.scaleX = this._container.scaleY = this._container.scaleZ = this._touchScale.value;
    const mtx = mat4.create();
    mat4.mul(mtx, this._mtxHit, this._containerSwarm.matrix);
    GL.setModelMatrix(mtx);

    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .uniform("uTime", "float", Scheduler.getElapsedTime() + this._seed)
      .draw();

    this._fbo.swap();

    this._sceneSwarm.update(mtx, this._mtxHit);
    isARSupported && this._sceneIntro.update(this._mtxHit);
  }

  _checkSwarm() {
    if (isARSupported && !this._hasPresented) {
      return;
    }
    vec3.transformMat4(this._posHit, [0, 0, 0], this._mtxHit);
    vec3.transformMat4(this._posHitFront, [0, 0, 1], this._mtxHit);

    vec3.sub(this._dirFront, this._posHitFront, this._posHit);
    vec3.normalize(this._dirFront, this._dirFront);

    vec3.copy(this._posCam, this.camera.position);
    vec3.sub(this._dirCam, this.camera.position, this._posHit);
    this._dirCam[1] *= 0.0;
    vec3.normalize(this._dirCam, this._dirCam);
    const vDiff = vec3.create();
    vec3.sub(vDiff, this._dirCam, this._dirFront);
    if (vec3.length(vDiff) === 0) {
      return;
    }
    const theta = angleBetween(this._dirCam, this._dirFront);

    if (isARSupported && !this._hasStarted) {
      this._initAngle = DEGREE(theta);
      if (isNaN(this._initAngle)) {
        this._initAngle = 0;
      }
      return;
    }

    const t = Math.abs(DEGREE(theta) - this._initAngle);

    const shouldSwarmOpen = t > Config.thresholdOpen;
    if (shouldSwarmOpen !== this._shouldSwarmOpen && !this._isInTransition) {
      if (this._hasOpened) {
        this.toggleState();
      }

      if (!this._hasOpened && shouldSwarmOpen) {
        this._sceneSwarm.open();
        this._drawBufferflies.close();
        this._hasOpened = true;
      }

      this._shouldSwarmOpen = shouldSwarmOpen;
    }
  }

  render() {
    let s;
    const bgColor = Config.bg.map((v) => v / 255);
    if (!this._hasPresented) {
      const bgBr = 0.7;
      GL.clear(bgColor[0] * bgBr, bgColor[1] * bgBr, bgColor[2] * bgBr, 1);
    } else {
      setCamera(GL, this.camera);
      this._checkHit();
    }

    this._checkSwarm();

    GL.setModelMatrix(this._mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    const mtx = mat4.create();
    const mtxSculpture = mat4.create();

    mat4.mul(mtx, this._mtxHit, this._container.matrix);
    GL.setModelMatrix(mtx);
    this._drawFloor
      .bindTexture("uDepthMap", this._sceneSwarm.shadowMap, 1)
      .uniform("uIsPresenting", this._hasPresented ? 1.0 : 0.0)
      .uniform("uOpacity", this._offsetOpen.value)
      .uniform("uShadowMatrix", this._sceneSwarm.mtxShadow)
      .uniform("uColor", bgColor)
      .draw();

    // GL.isMobile && this._sceneIntro.render(this._mtxHit);
    isARSupported && this._sceneIntro.render(this._mtxHit);

    mat4.mul(mtxSculpture, this._mtxHit, this._containerSculpture.matrix);
    GL.setModelMatrix(mtxSculpture);
    this._drawHand
      .uniform("uIsPresenting", this._hasPresented ? 1.0 : 0.0)
      .uniform("uColor", bgColor)
      .uniform("uOpacity", this._offsetOpen.value)
      .draw();
    this._drawHead
      .uniform("uIsPresenting", this._hasPresented ? 1.0 : 0.0)
      .uniform("uColor", bgColor)
      .uniform("uOpacity", this._offsetOpen.value)
      .draw();

    GL.disable(GL.CULL_FACE);

    mat4.mul(mtx, this._mtxHit, this._containerBufferfly.matrix);
    GL.setModelMatrix(mtx);
    this._drawBufferflies
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uScale", Config.bufferflyScale)
      .uniform("uColorOffset", this._offsetColor.value)
      .bindTexture("uMap", Assets.get(`butterfly`), 0)
      .bindTexture("uColorMap", Assets.get(`00${Config.colorIndex}`), 1)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 2)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 3)
      .draw();

    // draw swarm
    mat4.mul(mtx, this._mtxHit, this._containerSwarm.matrix);
    GL.setModelMatrix(mtx);
    this._sceneSwarm.render(this._offsetCircle.value);

    GL.enable(GL.CULL_FACE);

    GL.disable(GL.DEPTH_TEST);
    this._drawFilmGrain
      .uniform("uRatio", GL.aspectRatio)
      .uniform("uRandom", Math.random() * 2)
      .uniform("uStrength", Config.filmGrainStrength)
      .draw();
    GL.enable(GL.DEPTH_TEST);

    s = 256;
    GL.viewport(0, 0, s, s);
    // this._dCopy.draw(this._sceneSwarm.shadowMap);
    // this._dCopy.draw(this._sceneSwarm.fbo.read.getTexture(0));
    // GL.viewport(s, 0, s, s);
    // this._dCopy.draw(this._sceneSwarm.fbo.write.getTexture(0));

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    if (GL.isMobile || !Config.autoSave) {
      const { innerWidth, innerHeight } = window;
      resize(innerWidth, innerHeight);
      this.camera.setAspectRatio(GL.aspectRatio);
    } else {
      const pixelRatio = Config.savePixelRatio;
      resize(1080 * pixelRatio, 1350 * pixelRatio);
      this.camera.setAspectRatio(GL.aspectRatio);
    }
  }
}

export default SceneApp;
