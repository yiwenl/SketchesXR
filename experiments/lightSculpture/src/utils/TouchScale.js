import { vec2, mat4 } from "gl-matrix";
import { EaseNumber } from "alfrid";
import Scheduler from "scheduling";

const getTouchPos = (e, i) => {
  return [e.touches[i].pageX, e.touches[i].pageY];
};

class TouchScale {
  constructor(mScale = 1) {
    this._isScaling = false;
    this._scale = new EaseNumber(mScale);

    this._initDistance = 0;
    this._initScale = 1;
    this._mtx = mat4.create();

    window.addEventListener("touchstart", (e) => this._onTouchStart(e));
    window.addEventListener("touchend", (e) => this._onTouchStart(e));
    window.addEventListener("touchmove", (e) => this._onTouchMove(e));

    Scheduler.addEF(() => this._loop());
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

  _loop() {
    mat4.identity(this._mtx);
    const s = this._scale.value;
    mat4.scale(this._mtx, this._mtx, [s, s, s]);
  }

  get value() {
    return this._scale.value;
  }

  get matrix() {
    return this._mtx;
  }
}

export default TouchScale;
