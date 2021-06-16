import { vec2 } from "gl-matrix";
import { EaseNumber } from "alfrid";

const getTouchPos = (e, i) => {
  return [e.touches[i].pageX, e.touches[i].pageY];
};

class TouchScale {
  constructor(mScale = 1) {
    this._isScaling = false;
    this._scale = new EaseNumber(mScale);

    this._initDistance = 0;
    this._initScale = 1;

    window.addEventListener("touchstart", (e) => this._onTouchStart(e));
    window.addEventListener("touchend", (e) => this._onTouchStart(e));
    window.addEventListener("touchmove", (e) => this._onTouchMove(e));
  }

  setTo(mValue) {
    this._scale.setTo(mValue);
  }

  _onTouchStart(e) {
    if (e.touches.length < 2) {
      this._isScaling = false;
      return;
    }

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

  get value() {
    return this._scale.value;
  }
}

export default TouchScale;
