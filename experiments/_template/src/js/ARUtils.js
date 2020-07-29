import EventDispatcher from 'events'
let hasLogged = false

class ARUtils extends EventDispatcher {
  constructor () {
    super()
    this._hasChecked = false
    this._isSupported = false
    this._captuerBackground = false
    this._session = null
    this.canvas = null
    this._gl = null
    const { mat4 } = window
    this._viewMatrix = mat4.create()
    this._projectionMatrix = mat4.create()
    this.viewport = {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }

    this._hitMatrix = mat4.create()
    this._hasHit = false
    this._enableHitTest = true
  }

  checkSupported () {
    return new Promise((resolve, reject) => {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        this._isSupported = supported
        this._hasChecked = true
        if (supported) {
          // xrButton.innerHTML = 'Enter AR';
          console.log('supported AR')
          resolve('supported AR')
        } else {
          // xrButton.innerHTML = 'AR not found';
          console.log('AR not suppoerted')
          reject(new Error('AR not suppoerted'))
        }
      })
    })
  }

  enableHitTest (mValue) {
    this._enableHitTest = mValue
  }

  start (mWithBackground = false) {
    this._captuerBackground = mWithBackground

    if (this._captuerBackground) {
      this._canvasBg = document.createElement('canvas')
      this._canvasBg.width = window.innerWidth
      this._canvasBg.height = window.innerHeight
      this._canvasBg.style.position = 'absolute'
      this._canvasBg.style.top = 0
      this._canvasBg.style.left = 0
      this._ctxBg = this._canvasBg.getContext('2d')
      this._ctxBg.fillStyle = 'red'
      this._ctxBg.fillRect(0, 0, 200, 200)

      document.querySelector('.container').appendChild(this._canvasBg)
    }

    return new Promise((resolve, reject) => {
      // resolve()
      // reject(new Error('need implement'))

      navigator.xr.requestSession('immersive-ar', {
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.querySelector('.container') },
        requiredFeatures: ['local', 'hit-test']
      }).then((session) => {
        console.log('Session', session)
        this.session = session
        this.canvas = document.createElement('canvas')
        this._gl = this.canvas.getContext('webgl', {
          xrCompatible: true,
          preserveDrawingBuffer: true
        })

        session.updateRenderState({ baseLayer: new XRWebGLLayer(session, this._gl) })

        session.requestReferenceSpace('viewer').then((refSpace) => {
          this._xrViewerSpace = refSpace
          session.requestHitTestSource({ space: this._xrViewerSpace }).then((hitTestSource) => {
            this._xrHitTestSource = hitTestSource
          })
        })

        session.requestReferenceSpace('local').then((refSpace) => {
          this._xrRefSpace = refSpace

          session.requestAnimationFrame((t, frame) => this._onXRFrame(t, frame))
          resolve({
            canvas: this.canvas,
            gl: this._gl
          })
        })
      })
        .catch(e => {
          reject(e)
        })
    })
  }

  _onXRFrame (t, frame) {
    const { _gl: gl } = this
    const { mat4 } = window

    const session = frame.session
    if (this._captuerBackground) {
      console.log('capture background')
      this._ctxBg.clearRect(0, 0, this._canvasBg.width, this._canvasBg.height)
      this._ctxBg.drawImage(this.canvas, 0, 0)
      this._ctxBg.fillStyle = 'red'
      this._ctxBg.fillRect(0, 0, 100, 100)
    }

    if (Math.random() > 0.95) {
      console.log(session)
      console.log(session.renderState)
    }

    const pose = frame.getViewerPose(this._xrRefSpace)

    if (pose) {
      if (!hasLogged) {
        console.log(session, frame)
      }
      hasLogged = true
      const view = pose.views[0]
      this.viewport = session.renderState.baseLayer.getViewport(view)
      mat4.copy(this._projectionMatrix, view.projectionMatrix)
      mat4.copy(this._viewMatrix, view.transform.inverse.matrix)

      if (this._xrHitTestSource && this._enableHitTest) {
        const hitTestResults = frame.getHitTestResults(this._xrHitTestSource)
        this._hasHit = hitTestResults.length > 0
        if (hitTestResults.length > 0) {
          const _pose = hitTestResults[0].getPose(this._xrRefSpace)
          mat4.copy(this._hitMatrix, _pose.transform.matrix)
        }
      }
    }

    this.emit('onUpdate', {
      view: this._viewMatrix,
      projection: this._projectionMatrix,
      background: this._canvasBg
    })

    gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer)
    this.emit('onRender')
    this.session.requestAnimationFrame((t, frame) => this._onXRFrame(t, frame))
  }

  onSessionEnded () {
    console.log('Session ended')
  }

  get hasHit () { return this._hasHit }

  get hitMatrix () { return this._hitMatrix }

  get viewMatrix () { return this._viewMatrix }

  get projectionMatrix () { return this._projectionMatrix }

  get isSupported () { return this._isSupported }
}

export default new ARUtils()
