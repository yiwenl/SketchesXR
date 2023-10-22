import { Geom, Draw, TweenNumber } from "./alfrid";
import { mat4, vec3 } from "gl-matrix";

import vs from "./shaders/cube.vert";
import fs from "./shaders/cube.frag";

class Cube extends Draw {
  constructor(mPos, mColor = [1, 1, 1]) {
    super();

    this._pos = vec3.clone(mPos);
    this._posCurr = vec3.clone(mPos);
    this.color = mColor;

    this._needUpdate = false;

    this._mtx = mat4.create(); //	base transform
    this._mtxCurr = mat4.create(); //	transform for animation
    this._mtxFinal = mat4.create(); //	final transform = mtx * mtxCurr
    this._angle = new TweenNumber(0, "expInOut", 0.02);
    this._axis = vec3.create();

    const s = 1.0;
    const mesh = Geom.cube(s, s, s);

    this.setMesh(mesh).useProgram(vs, fs);
  }

  rotate(mAxis, mAngle) {
    let m = mat4.create();
    mat4.rotate(m, m, mAngle, mAxis);
    mat4.mul(this._mtx, m, this._mtx);

    this._updateMatrix();
  }

  rotateAnim(mAxis, mAngle) {
    let m = mat4.create();

    if (vec3.length(this._axis) > 0) {
      //	complete previous move
      mat4.rotate(m, m, this._angle.targetValue, this._axis);
      mat4.mul(this._mtx, m, this._mtx);
    }

    vec3.copy(this._axis, mAxis);
    this._angle.setTo(0);
    this._angle.value = mAngle;
  }

  _updateMatrix() {
    this._needUpdate = false;

    mat4.identity(this._mtxCurr, this._mtxCurr);
    mat4.rotate(this._mtxCurr, this._mtxCurr, this._angle.value, this._axis);

    mat4.mul(this._mtxFinal, this._mtxCurr, this._mtx);

    vec3.transformMat4(this._posCurr, this._pos, this._mtxFinal);
  }

  draw() {
    this._updateMatrix();

    this.uniform("uColor", this.color)
      .uniform("uPos", this._pos)
      .uniform("uLocalMatrix", this._mtxFinal);

    super.draw();
  }

  set speed(mValue) {
    this._angle.speed = mValue;
  }

  get position() {
    if (this._needUpdate) {
      this._updateMatrix();
    }
    return this._posCurr;
  }
}

export default Cube;
