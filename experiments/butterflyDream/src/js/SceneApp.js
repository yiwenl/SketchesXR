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

import Config from "./Config";
import Assets from "./Assets";
import { setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";
import DrawButterFlies from "./DrawButterflies";
import DrawSave from "./DrawSave";

import SceneSwarm from "./SceneSwarm";

import vsBasic from "shaders/basic.vert";
import vsFloor from "shaders/floor.vert";
import fsCopy from "shaders/copy.frag";
import fsFloor from "shaders/floor.frag";
import vsPass from "shaders/pass.vert";
import fsSim from "shaders/sim.frag";

let hasSaved = false;
let canSave = false;

const DEFAULT_Y = 0.25;

class SceneApp extends Scene {
  constructor() {
    super();

    // camera
    this.orbitalControl.rx.setTo(-0.1);
    this.orbitalControl.ry.setTo(0.1);
    this.orbitalControl.radius.setTo(0.8);
    this.orbitalControl.rx.limit(-0.2, Math.PI / 2);

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
    this._offsetColor = new TweenNumber(0, "linear", 0.01);
    this._hasStarted = false;
    this._hasPresented = false;
    this._shouldSwarmOpen = false;
    this._colorIndex = randomFloor(0, 3);

    this._tColorCurr = Assets.get(`butterfly${this._colorIndex}`);
    this._tColorNext = Assets.get(`butterfly${this._colorIndex}`);

    this._container = new Object3D();
    this._container.y = 0.001;
    this._container.scaleX = this._container.scaleY = this._container.scaleZ = 0.1;
    this._containerSculpture = new Object3D();
    this._containerSculpture.rotationY = -Math.PI / 2;
    this._container.addChild(this._containerSculpture);
    this._containerBufferfly = new Object3D();
    this._containerBufferfly.scaleX = this._containerBufferfly.scaleY = this._containerBufferfly.scaleZ = 0.5;
    this._container.addChild(this._containerBufferfly);
    this._containerBufferfly.y = 4;

    this._seed = Math.random() * 0xff;

    // set size
    this.resize();
    this._drawBufferflies.open();

    if (!GL.isMobile) {
      setTimeout(() => {
        canSave = true;
      }, 3500);
    }
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

    const shader = new GLShader(vsBasic, fsCopy);

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
  }

  _onTouch() {
    if (this._hasStarted) {
      this._changeColor();
      return;
    }
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this._mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this._offsetOpen.value = 1;
      this._drawBufferflies.open();
    }
  }

  _changeColor() {
    const idxCurr = this._colorIndex;
    const idxNext = this._colorIndex === 2 ? 0 : this._colorIndex + 1;
    this._tColorCurr = Assets.get(`butterfly${idxCurr}`);
    this._tColorNext = Assets.get(`butterfly${idxNext}`);

    this._offsetColor.setTo(0);
    this._offsetColor.value = 1;

    this._colorIndex = idxNext;
  }

  _checkHit() {
    if (!this._hasStarted) {
      const mtxHit = hitTest();
      if (mtxHit !== null) {
        this._offsetHit.value = 1;
        mat4.copy(this._mtxHit, mtxHit);
      }
    }
  }

  update() {
    const mtx = mat4.create();
    mat4.mul(mtx, this._mtxHit, this._container.matrix);
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
  }

  _checkSwarm() {
    vec3.transformMat4(this._posHit, [0, 0, 0], this._mtxHit);
    vec3.transformMat4(this._posHitFront, [0, 0, 1], this._mtxHit);

    vec3.sub(this._dirFront, this._posHitFront, this._posHit);
    vec3.normalize(this._dirFront, this._dirFront);

    vec3.copy(this._posCam, this.camera.position);
    vec3.sub(this._dirCam, this.camera.position, this._posHit);
    this._dirCam[1] *= 0.0;
    vec3.normalize(this._dirCam, this._dirCam);
    const theta = angleBetween(this._dirCam, this._dirFront);

    const shouldSwarmOpen = DEGREE(theta) > Config.thresholdOpen;
    if (shouldSwarmOpen !== this._shouldSwarmOpen) {
      if (shouldSwarmOpen) {
        this._sceneSwarm.open();
        this._drawBufferflies.close();
      } else {
        this._sceneSwarm.close();
        this._drawBufferflies.open();
        setTimeout(() => {
          this._changeColor();
        }, 1000);
      }
      this._shouldSwarmOpen = shouldSwarmOpen;
    }
  }

  render() {
    let s;
    if (!this._hasPresented) {
      const bg = 0.9;
      GL.clear(bg, bg, bg, 1);
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
      .draw();
    mat4.mul(mtxSculpture, this._mtxHit, this._containerSculpture.matrix);
    GL.setModelMatrix(mtxSculpture);
    this._drawHand.uniform("uOpacity", this._offsetOpen.value).draw();
    this._drawHead.uniform("uOpacity", this._offsetOpen.value).draw();

    GL.disable(GL.CULL_FACE);
    GL.setModelMatrix(mtx);

    this._sceneSwarm.render(
      this._tColorCurr,
      this._tColorNext,
      this._offsetColor.value
    );

    mat4.mul(mtx, this._mtxHit, this._containerBufferfly.matrix);
    GL.setModelMatrix(mtx);
    this._drawBufferflies
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uScale", Config.bufferflyScale)
      .uniform("uColorOffset", this._offsetColor.value)
      .bindTexture("uColor0Map", this._tColorCurr, 0)
      .bindTexture("uColor1Map", this._tColorNext, 1)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 2)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 3)
      .draw();
    GL.enable(GL.CULL_FACE);

    s = 256;
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._sceneSwarm.shadowMap);
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