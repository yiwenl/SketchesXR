
import { GL, EaseNumber } from 'alfrid'
import EventDispatcher from 'events'

class Scroller extends EventDispatcher {
  constructor (mValue = 0, mEasing = 0.1) {
    super()
    this._z = new EaseNumber(mValue, mEasing)
    this._zoom = new EaseNumber(0, 0.02)

    this._touchStartBind = (e) => this._onTouchStart(e)
    this._touchEndBind = () => this._onTouchEnd()
    this._touchMoveBind = (e) => this._onTouchMove(e)

    this._isTouched = false
    this._initY = 0
    this._isLocked = false

    if (GL.isMobile) {
      window.addEventListener('touchstart', this._touchStartBind)
      window.addEventListener('touchend', this._touchEndBind)
      window.addEventListener('touchmove', this._touchMoveBind, { passive: false })
    } else {
      window.addEventListener('mousewheel', (e) => {
        this._z.value += e.wheelDelta * 0.1

        this._zoom.value = 1
        if (this._timeoutZoom) {
          clearTimeout(this._timeoutZoom)
        }
        this._timeoutZoom = setTimeout(() => {
          this._zoom.value = 0
        }, 100)
      })
    }
  }

  limit (mMin, mMax) {
    this._z.limit(mMin, mMax)
  }

  lock (mValue = true) {
    this._isLocked = mValue
  }

  _onTouchStart (e) {
    if (this._isLocked) {
      return
    }
    this._isTouched = true
    this._zoom.value = 1

    this._initY = e.touches[0].pageY
  }

  _onTouchEnd () {
    this._isTouched = false
    if (this._timeoutZoom) {
      clearTimeout(this._timeoutZoom)
    }
    this._timeoutZoom = setTimeout(() => {
      this._zoom.value = 0
    }, 200)
  }

  _onTouchMove (e) {
    e.preventDefault()
    if (!this._isTouched) return

    const deltaY = e.touches[0].pageY - this._initY
    this._initY = e.touches[0].pageY

    this._z.value += deltaY * 0.2
  }

  setTo (mValue) {
    this._z.setTo(mValue)
  }

  get z () {
    return this._z.value
  }

  set z (mValue) {
    this._z.value = mValue
  }

  get zoom () {
    return this._zoom.value
  }
}

export default Scroller
