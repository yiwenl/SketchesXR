import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  FrameBuffer,
  EaseNumber,
} from "alfrid";
import { isARSupported, setCamera, hitTest } from "./ARUtils";
import { vec3, mat4 } from "gl-matrix";
import DrawMark from "./DrawMark";
import DrawEnv from "./DrawEnv";
import DrawBg from "./DrawBg";

import { random } from "./utils";

import Assets from "./Assets";
import { updateCameraTexture, getCameraTexture } from "./utils/cameraTexture";
import TouchScale from "./utils/TouchScale";

import Moon from "./Moon";

import * as CANNON from "cannon";

const MAX_NUM_MOONS = 30;

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
    this._moons = [];
    if (!GL.isMobile) {
      this._initWorld();

      let num = 10;
      while (num--) {
        this._addMoon();
      }
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
    this.world = world;

    // floor
    const groundBody = new CANNON.Body({
      mass: 0,
    });
    groundBody.position.y = -mtxInvert[13];
    this._floorLevel = -mtxInvert[13];

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
  }

  _onTouch = () => {
    if (this._hasStarted) {
      this._addMoon();
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

  _addMoon = () => {
    const camPos = vec3.clone(this.camera.position);
    const dir = vec3.clone(this.camera.direction);

    vec3.scale(dir, dir, random(2, 1.5));
    vec3.add(camPos, camPos, dir);

    const r = 1;

    const moon = new Moon(
      GL.isMobile ? camPos : [random(-r, r), random(1, 2), random(-r, r)],
      this._floorLevel
    );
    this.world.addBody(moon.body);
    this._moons.push(moon);

    if (this._moons.length > MAX_NUM_MOONS) {
      const moon = this._moons.shift();
      this.world.removeBody(moon.body);
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
    GL.disable(GL.DEPTH_TEST);
    GL.enableAdditiveBlending();
    this._moons.forEach((moon) => {
      moon.renderFloor();
    });

    GL.enable(GL.DEPTH_TEST);
    GL.enableAlphaBlending();
    this._moons.forEach((moon) => {
      moon.render();
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