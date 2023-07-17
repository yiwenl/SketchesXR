import { vec2, mat4 } from "gl-matrix";
import { EaseNumber } from "alfrid";

const getTouchPos = (e, i) => {
  return [e.touches[i].pageX, e.touches[i].pageY];
};

class TouchScale {
  constructor(mScale = 1) {
    this._isScaling = false;
    this._scale = new EaseNumber(mScale);
    this.limit(0.01, 100);
    this._mtx = mat4.create();

    this._initDistance = 0;
    this._initScale = 1;

    window.addEventListener("touchstart", (e) => this._onTouchStart(e));
    window.addEventListener("touchend", (e) => this._onTouchStart(e));
    window.addEventListener("touchmove", (e) => this._onTouchMove(e));
  }

  _onTouchStart(e) {
    if (e.touches.length < 2) {
      this._isScaling = false;
      return;
    }

    // this._scale.setTo(this._scale.value);
    this._initScale = this._scale.value;
    const a = getTouchPos(e, 0);
    const b = getTouchPos(e, 1);
    this._initDistance = vec2.distance(a, b);

    this._isScaling = true;
  }

  _onTouchMove(e) {
    if (e.touches.length < 2) {
      this._isScaling = false;
      return;
    }

    const a = getTouchPos(e, 0);
    const b = getTouchPos(e, 1);
    const dist = vec2.distance(a, b);
    const delta = dist - this._initDistance;
    this._scale.value = this._initScale + delta * 0.01;
  }

  _onTouchEnd() {}

  limit(mMin, mMax) {
    this._scale.limit(mMin, mMax);
  }

  get value() {
    return this._scale.value;
  }

  get matrix() {
    mat4.identity(this._mtx);
    mat4.scale(this._mtx, this._mtx, [
      this._scale.value,
      this._scale.value,
      this._scale.value,
    ]);
    return this._mtx;
  }
}

export default TouchScale;
