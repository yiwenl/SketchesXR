// RubixCube.js

import { Object3D, GL } from "./alfrid";
import Cube from "./Cube";
import { vec3 } from "gl-matrix";
import { random, randomInt } from "./utils";

import {
  selectTop,
  selectBottom,
  selectLeft,
  selectRight,
  selectFront,
  selectBack,
} from "./utils/RubixUtils";

const X_AXIS = vec3.fromValues(1, 0, 0);
const Y_AXIS = vec3.fromValues(0, 1, 0);
const Z_AXIS = vec3.fromValues(0, 0, 1);
const LOCK_DURATION = 650;

class RubixCube {
  constructor() {
    this._cubes = [];

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          const c = new Cube([i, j, k]);

          this._cubes.push(c);
        }
      }
    }

    this._steps = [];
    this._maxSteps = randomInt(8, 12);

    this._isLocked = false;
    this._isSolving = false;
    this._inIntro = true;
    this._container = new Object3D();
    this._lockDuration = 200;

    this._cubes.forEach((c) => {
      c.speed = 0.05;
      c.easing = "cubicOut";
    });
  }

  startMoving() {
    this._maxSteps = randomInt(8, 12);
    this._interval = setInterval(() => this.randomMove(), 3000);
  }

  randomMove() {
    const moveSets = ["Top", "Bottom", "Left", "Right", "Front", "Back"];

    const move = moveSets[randomInt(moveSets.length)];
    const theta = random() > 0.75 ? Math.PI : Math.PI / 2;
    const dir = random() > 0.5 ? 1 : -1;

    this[`rotate${move}`](theta * dir);

    // if (this._steps.length >= this._maxSteps) {
    //   clearInterval(this._interval);
    //   setTimeout(() => this.solve(), 1000);
    // }
  }

  unlock() {
    this._inIntro = false;
    this._lockDuration = LOCK_DURATION;
    this._cubes.forEach((c) => {
      c.speed = 0.02;
      c.easing = "expInOut";
    });
  }

  solve() {
    this._isSolving = true;
    const move = this._steps.pop();
    this[`rotate${move.face}`](-move.angle, true);

    this._cubes.forEach((c) => {
      c.speed = 0.05;
      c.easing = "cubicOut";
    });

    if (this._steps.length > 0) {
      setTimeout(() => this.solve(), 300);
    } else {
      setTimeout(() => {
        this._isSolving = false;
      }, 700);
      this._cubes.forEach((c) => {
        c.speed = 0.02;
        c.easing = "expInOut";
      });

      // setTimeout(() => this.startMoving(), 1000);
    }
  }

  tempLock() {
    if (!this._isSolving) {
      this._isLocked = true;
      setTimeout(() => {
        this._isLocked = false;
      }, this._lockDuration);
    }
  }

  rotateTop(mAngle = Math.PI / 2, mIsSolving = false) {
    if (this._isLocked) {
      return;
    }
    if (!mIsSolving) {
      this._steps.push({
        angle: mAngle,
        face: "Top",
      });
    }
    if (this._inIntro) {
      this.top.forEach((c) => c.rotate(Y_AXIS, mAngle));
      return;
    }
    this.top.forEach((c) => c.rotateAnim(Y_AXIS, mAngle));
    this.tempLock();
  }

  rotateBottom(mAngle = Math.PI / 2, mIsSolving = false) {
    if (this._isLocked) {
      return;
    }
    if (!mIsSolving) {
      this._steps.push({
        angle: mAngle,
        face: "Bottom",
      });
    }
    if (this._inIntro) {
      this.bottom.forEach((c) => c.rotate(Y_AXIS, mAngle));
      return;
    }
    this.bottom.forEach((c) => c.rotateAnim(Y_AXIS, mAngle));
    this.tempLock();
  }

  rotateRight(mAngle = Math.PI / 2, mIsSolving = false) {
    if (this._isLocked) {
      return;
    }
    if (!mIsSolving) {
      this._steps.push({
        angle: mAngle,
        face: "Right",
      });
    }
    if (this._inIntro) {
      this.right.forEach((c) => c.rotate(X_AXIS, mAngle));
      return;
    }
    this.right.forEach((c) => c.rotateAnim(X_AXIS, mAngle));
    this.tempLock();
  }

  rotateLeft(mAngle = Math.PI / 2, mIsSolving = false) {
    if (this._isLocked) {
      return;
    }
    if (!mIsSolving) {
      this._steps.push({
        angle: mAngle,
        face: "Left",
      });
    }
    if (this._inIntro) {
      this.left.forEach((c) => c.rotate(X_AXIS, mAngle));
      return;
    }
    this.left.forEach((c) => c.rotateAnim(X_AXIS, mAngle));
    this.tempLock();
  }

  rotateFront(mAngle = Math.PI / 2, mIsSolving = false) {
    if (this._isLocked) {
      return;
    }
    if (!mIsSolving) {
      this._steps.push({
        angle: mAngle,
        face: "Front",
      });
    }
    if (this._inIntro) {
      this.front.forEach((c) => c.rotate(Z_AXIS, mAngle));
      return;
    }
    this.front.forEach((c) => c.rotateAnim(Z_AXIS, mAngle));
    this.tempLock();
  }

  rotateBack(mAngle = Math.PI / 2, mIsSolving = false) {
    if (this._isLocked) {
      return;
    }
    if (!mIsSolving) {
      this._steps.push({
        angle: mAngle,
        face: "Back",
      });
    }
    if (this._inIntro) {
      this.back.forEach((c) => c.rotate(Z_AXIS, mAngle));
      return;
    }
    this.back.forEach((c) => c.rotateAnim(Z_AXIS, mAngle));
    this.tempLock();
  }

  render(mMtxCamera, mTexBg) {
    GL.setModelMatrix(this._container.matrix);
    this._cubes.forEach((cube) =>
      cube
        .uniform("uCameraMatrix", mMtxCamera)
        .bindTexture("uMap", mTexBg, 0)
        .draw()
    );
  }

  set x(value) {
    this._container.x = value;
  }

  set y(value) {
    this._container.y = value;
  }

  set z(value) {
    this._container.z = value;
  }

  get isSolving() {
    return this._isSolving;
  }

  get top() {
    return selectTop(this._cubes);
  }
  get bottom() {
    return selectBottom(this._cubes);
  }
  get left() {
    return selectLeft(this._cubes);
  }
  get right() {
    return selectRight(this._cubes);
  }
  get front() {
    return selectFront(this._cubes);
  }
  get back() {
    return selectBack(this._cubes);
  }
}

export default RubixCube;
