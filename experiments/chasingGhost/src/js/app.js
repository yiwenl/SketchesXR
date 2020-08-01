import '../scss/global.scss'

import assets from './asset-list'
import Assets from './Assets'
import AssetsLoader from 'assets-loader'
import SceneAR from './SceneAR'

import ARUtils from './ARUtils'

import alfrid, { GL } from 'alfrid'

let btnAR
let camera, ball, ballScale, scene
let hasStarted = false

if (document.body) {
  _init()
} else {
  window.addEventListener('DOMContentLoaded', _init)
}

function _init () {
  init3D()
}

function init3D () {
  ARUtils.checkSupported().then(initButton, noSupport)
  if (!navigator.xr) {
    noSupport()
  }

  // init camera
}

function initButton () {
  console.log('initButton')
  btnAR = document.body.querySelector('.btnAR')
  btnAR.addEventListener('click', () => {
    ARUtils.start(true).then(arStarted, logError)
  })
}

function arStarted ({ canvas, gl }) {
  console.log('AR started', canvas, gl)
  GL.initWithGL(gl)

  camera = new alfrid.CameraPerspective()
  ball = new alfrid.BatchBall()
  ballScale = new alfrid.EaseNumber(0)

  // load assets
  new AssetsLoader({
    assets: assets
  })
    .on('error', (error) => {
      console.log('Error :', error)
    })
    .on('progress', (p) => {
      // console.log('Progress : ', p);
      const loader = document.body.querySelector('.Loading-Bar')
      if (loader) loader.style.width = `${(p * 100)}%`
    })
    .on('complete', (o) => {
      // resolve(o)
      console.log('assets loaded')
      Assets.init(o)

      scene = new SceneAR()
      scene.init()
      ARUtils.on('onUpdate', update)
      ARUtils.on('onRender', render)
    })
    .start()

  window.addEventListener('touchstart', () => {
    if (!ARUtils.hasHit) {
      return
    }
    console.log('touch start')
    hasStarted = true
  })
}

function update ({ view, projection, background }) {
  if (!hasStarted) {
    ballScale.value = ARUtils.hasHit ? 1 : 0
  }
  const { mat4 } = window
  mat4.copy(camera._projection, projection)
  mat4.copy(camera._matrix, view)

  scene.update({ background })
}

function render () {
  const { x, y, width, height } = ARUtils.viewport

  GL.viewport(x, y, width, height)
  GL.clear(0, 0, 0, 0)
  GL.setMatrices(camera)

  GL.pushMatrix()
  GL.rotate(ARUtils.hitMatrix)
  const s = 0.01 * ballScale.value
  ball.draw([0, 0, 0], [s, s, s], [1, 0.5, 0.2], 1)
  GL.popMatrix()

  scene.render()
}

function logError (e) {
  console.log('Error', e)
  noSupport()
}

function noSupport () {
  document.body.classList.add('no-xr')

  const canvas = document.createElement('canvas')
  const container = document.body.querySelector('.container')
  canvas.className = 'Main-Canvas'
  container.appendChild(canvas)

  // INIT 3D TOOL
  GL.init(canvas, { ignoreWebgl2: false, preserveDrawingBuffer: true })
  GL.setSize(window.innerWidth, window.innerHeight)

  scene = new SceneAR()
  scene.init()

  const camera = new alfrid.CameraPerspective()
  camera.setPerspective(75 * Math.PI / 180, GL.aspectRatio, 0.1, 100)
  const orbControl = new alfrid.OrbitalControl(camera, window, 5)

  alfrid.Scheduler.addEF(() => {
    GL.viewport(0, 0, GL.width, GL.height)
    GL.clear(0, 0, 0, 0)
    GL.setMatrices(camera)
    scene.render()
  })
}
