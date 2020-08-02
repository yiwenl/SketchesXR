import { EaseNumber } from 'alfrid'

class AnimateVec3 {
  constructor (x = 0, y = 0, z = 0, mEasing = 0.1) {
    this._x = new EaseNumber(x, mEasing)
    this._y = new EaseNumber(y, mEasing)
    this._z = new EaseNumber(z, mEasing)
  }

  setTo (x, y, z) {
    this._x.setTo(x)
    this._y.setTo(y)
    this._z.setTo(z)
  }

  setX (mValue) { this._x.setTo(mValue) }
  setY (mValue) { this._y.setTo(mValue) }
  setZ (mValue) { this._z.setTo(mValue) }

  set easing (mValue) {
    this._x.easing = mValue
    this._y.easing = mValue
    this._z.easing = mValue
  }

  get easing () { return this._x.easing }

  set x (mValue) { this._x.value = mValue }
  get x () { return this._x.value }

  set y (mValue) { this._y.value = mValue }
  get y () { return this._y.value }

  set z (mValue) { this._z.value = mValue }
  get z () { return this._z.value }

  get value () {
    return [this._x.value, this._y.value, this._z.value]
  }
}

export default AnimateVec3
