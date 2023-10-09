import {
  GL,
  Draw,
  Geom,
  ShaderLibs,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  FrameBuffer,
  FboPingPong,
  EaseNumber,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import Scheduler from "scheduling";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";
import DrawBg from "./DrawBg";

import { random, pick } from "./utils";

import Assets from "./Assets";
import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";

import Cube from "./Cube";

import * as CANNON from "cannon";

// Example code
import DrawCube from "./DrawCube";

import fsBlur from "shaders/blur.frag";

const MAX_NUM_CUBES = 20;
const fboSize = 2048;

class SceneApp extends Scene {
  constructor() {
    super();

    // console.log(CANNON);

    // this.orbitalControl.lock();
    this.orbitalControl.rx.value = -0.4;
    this.orbitalControl.ry.value = -0.4;

    // hit
    this.mtxInit = mat4.create();
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
    this._startDropping = false;

    // physics
    this._boxes = [];
    if (!GL.isMobile) {
      this._initWorld();

      let num = 10;

      while (num--) {
        setTimeout(this._addCube, 1000 * (num + 1));
      }

      // setInterval(this._addCube, 1000);
    }
  }

  present() {
    window.addEventListener("touchstart", this._onTouch);

    this._offsetOpen.setTo(0);
    this._hasPresented = true;
  }

  _initWorld() {
    const mtxInvert = mat4.create();
    mat4.invert(mtxInvert, this.mtxHit);

    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0); // m/s²
    // world.gravity.set(0, 0, 0); // m/s²
    this.world = world;

    // floor
    const groundBody = new CANNON.Body({
      mass: 0,
    });
    groundBody.position.y = -mtxInvert[13];

    this.groundLevel = groundBody.position.y;

    groundBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(1, 0, 0),
      -Math.PI / 2
    );

    const groundShape = new CANNON.Plane();
    groundBody.addShape(groundShape);
    world.addBody(groundBody);

    const fixedTimeStep = 1.0 / 60.0; // seconds
    const maxSubSteps = 13;

    let lastTime;
    const updatePhysics = (time) => {
      requestAnimationFrame(updatePhysics);
      if (lastTime !== undefined) {
        var dt = (time - lastTime) / 1000;
        world.step(fixedTimeStep, dt, maxSubSteps);
      }
      lastTime = time;
    };

    updatePhysics();
  }

  _initTextures() {
    this._fboBg = new FrameBuffer(GL.width, GL.height);
    this._textureLookup = Assets.get("lookup");
    this._textureLookup.minFilter = GL.NEAREST;
    this._textureLookup.magFilter = GL.NEAREST;

    const oSettings = {
      minFilter: GL.LINEAR,
      magFilter: GL.LINEAR,
    };

    this._fboMap = new FrameBuffer(fboSize, fboSize, oSettings);
    this._fboShadow = new FboPingPong(fboSize, fboSize, oSettings);
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._dMark = new DrawMark();
    this._dEnv = new DrawEnv()
      .setClearColor(0, 0, 0, 0)
      .bindFrameBuffer(this._fboBg);
    this._drawBg = new DrawBg();

    this._drawCube = new DrawCube();
    this._drawBlur = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fsBlur)
      .setClearColor(0, 0, 0, 0)
      .uniform("uResolution", [fboSize, fboSize]);
  }

  _onTouch = () => {
    // console.log("on Touch", this._hasPresented, this._hasStarted);
    if (this._hasStarted) {
      if (!this._startDropping) {
        setInterval(this._addCube, 1000);
        this._startDropping = true;
      }
      // this._addCube();
      return;
    }
    const mtxHit = hitTest();
    if (mtxHit !== null) {
      mat4.copy(this.mtxHit, mtxHit);
      this._hasStarted = true;
      this._offsetHit.value = 0.0;
      this._offsetOpen.value = 1;

      // start physics
      this._initWorld();
    }
  };

  _addCube = () => {
    console.log("add Cube", GL.width, GL.height);
    // capture
    const fbo = new FrameBuffer(GL.width, GL.height);
    fbo.bind();
    GL.clear(0, 0, 0, 1);
    if (GL.isMobile) {
      this._dCopy.draw(getCameraTexture());
    } else {
      GL.clear(1, 0, 0, 1);
      this._dCopy.draw(this._fboBg.texture);
    }
    fbo.unbind();

    this._fboTest = fbo;

    const camPos = vec3.clone(this.camera.position);
    const dir = vec3.clone(this.camera.direction);

    if (GL.isMobile) {
      vec3.scale(dir, dir, random(3, 4));
    } else {
      vec3.scale(dir, dir, random(-4, 4));
    }

    const a = random(0.1, 0.2) * pick([-1, 1]);
    vec3.rotateY(dir, dir, [0, 0, 0], a);
    // vec3.rotateY(dir, dir, a);

    vec3.add(camPos, camPos, dir);
    camPos[1] += 0.5;

    const mtxCam = mat4.clone(this.camera.matrix);
    const r = 1;

    const cube = new Cube(
      GL.isMobile ? camPos : [random(-r, r), random(1, 2), random(-r, r)],
      mtxCam,
      fbo.texture
    );
    this.world.addBody(cube.body);
    this._boxes.push(cube);

    if (this._boxes.length > MAX_NUM_CUBES) {
      const cube = this._boxes.shift();
      this.world.removeBody(cube.body);
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
      GL.setModelMatrix(this.mtxModel);
      this._dEnv.draw();
    }

    if (this._hasPresented) {
      setCamera(GL, this.camera);
      this._checkHit();

      mat4.mul(this.mtxModel, this.mtxAR, this.touchScale.matrix);
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxModel);

      this.renderShadow();
    } else {
      this.renderShadow();
    }
  }

  renderShadow() {
    this._fboMap.bind();
    GL.clear(0, 0, 0, 0);
    GL.disable(GL.DEPTH_TEST);
    this._boxes.forEach((cube) => {
      cube.renderFloor(this.groundLevel);
    });

    this._fboMap.unbind();

    let map = this._fboMap.texture;
    let num = 3;
    while (num--) {
      const mul = Math.pow(2, num + 1);
      this._drawBlur
        .bindFrameBuffer(this._fboShadow.write)
        .uniform("uDirection", [0, 1])
        .uniform("uResolution", [fboSize / mul, fboSize / mul])
        .bindTexture("uMap", map, 0)
        .draw();

      this._fboShadow.swap();

      this._drawBlur
        .bindFrameBuffer(this._fboShadow.write)
        .uniform("uDirection", [1, 0])
        .uniform("uResolution", [fboSize / mul, fboSize / mul])
        .bindTexture("uMap", this._fboShadow.read.texture, 0)
        .draw();
      this._fboShadow.swap();

      map = this._fboShadow.read.texture;
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
      mat4.mul(this.mtxModel, this.mtxAR, this.touchScale.matrix);
      mat4.mul(this.mtxModel, this.mtxHit, this.mtxModel);
    } else {
      mat4.identity(this.mtxModel, this.mtxModel);
    }

    let tBg;
    if (!this._hasPresented || !isARSupported) {
      tBg = this._fboBg.texture;
    } else {
      tBg = getCameraTexture();
    }
    GL.disable(GL.DEPTH_TEST);
    this._drawBg
      .bindTexture("uMap", tBg, 0)
      .bindTexture("uLookupMap", this._textureLookup, 1)
      .draw();
    GL.enable(GL.DEPTH_TEST);

    GL.setModelMatrix(this.mtxHit);
    s = this._offsetHit.value * 0.005;
    this._dBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
    this._dMark.uniform("uOffset", this._offsetHit.value).draw();

    GL.setModelMatrix(this.mtxModel);

    // this._dCopy.draw(this._fboMap.texture);
    if (this._hasPresented || 1) {
      GL.disable(GL.DEPTH_TEST);
      this._dCopy.draw(this._fboShadow.read.texture);
    }

    GL.enable(GL.DEPTH_TEST);
    this._boxes.forEach((cube) => {
      cube.render(this.groundLevel);
    });

    if (isARSupported && this._hasPresented) {
      s = 1;
      GL.viewport(0, 0, s, s / GL.aspectRatio);
      this._dCopy.draw(getCameraTexture());
    }

    GL.enable(GL.DEPTH_TEST);
  }
}

export default SceneApp;
