import alfrid, { GL } from 'alfrid'
import Config from './Config'
import getMeshSave from './utils/getMeshSave'
import ARUtils from './ARUtils'

import preload from './utils/preload'
import AnimateVec3 from './AnimateVec3'

import vsSave from 'shaders/save.vert'
import fsSave from 'shaders/save.frag'
import vsRender from 'shaders/render.vert'
import fsRender from 'shaders/render.frag'
import fsSim from 'shaders/sim.frag'
import fsAddVel from 'shaders/addVel.frag'

class SceneAR {
  init () {
    this._hasLoaded = false

    preload().then(() => this.onloaded()).catch(e => console.log('Error', e))
  }

  onloaded () {
    this._bBall = new alfrid.BatchBall()
    this._bAxis = new alfrid.BatchAxis()
    this._bCopy = new alfrid.BatchCopy()
    this._bDots = new alfrid.BatchDotsPlane()

    // forces
    this._forceNoise = new alfrid.EaseNumber(0, 0.2)
    this._forceFollow = new alfrid.EaseNumber(0)

    // attract center
    this._center = new AnimateVec3(0, 0, 0, 0.025)

    // fbo
    const { numParticles } = Config
    const oSettings = {
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
      type: GL.FLOAT
    }
    this._fboPos = new alfrid.FboPingPong(numParticles, numParticles, oSettings)
    this._fboVel = new alfrid.FboPingPong(numParticles, numParticles, oSettings)
    this._fboExtra = new alfrid.FrameBuffer(numParticles, numParticles, oSettings)
    this._fboPosOrg = new alfrid.FrameBuffer(numParticles, numParticles, oSettings)

    const meshRender = (() => {
      const mesh = new alfrid.Mesh(GL.POINTS)

      const positions = []
      const uvs = []
      const indices = []
      let count = 0

      for (let i = 0; i < numParticles; i++) {
        for (let j = 0; j < numParticles; j++) {
          positions.push([Math.random(), Math.random(), Math.random()])
          uvs.push([i / numParticles, j / numParticles])
          indices.push(count)
          count++
        }
      }
      mesh.bufferVertex(positions)
      mesh.bufferTexCoord(uvs)
      mesh.bufferIndex(indices)

      return mesh
    })()

    this._drawRender = new alfrid.Draw()
      .setMesh(meshRender)
      .useProgram(vsRender, fsRender)

    const drawSave = new alfrid.Draw()
      .setMesh(getMeshSave())
      .useProgram(vsSave, fsSave)
      .setClearColor(0, 0, 0, 0)

    drawSave.bindFrameBuffer(this._fboPos.read)
      .uniform('uState', 'float', 0)
      .draw()

    drawSave.bindFrameBuffer(this._fboExtra)
      .uniform('uState', 'float', 1)
      .draw()

    this._fboPosOrg.bind()
    GL.clear(0, 0, 0, 0)
    this._bCopy.draw(this._fboPos.read.texture)
    this._fboPosOrg.unbind()

    this._drawSim = new alfrid.Draw()
      .setMesh(alfrid.Geom.bigTriangle())
      .useProgram(alfrid.ShaderLibs.bigTriangleVert, fsSim)
      .setClearColor(0, 0, 0, 0)

    console.log('this._drawSim', this._drawSim)

    this._drawAdd = new alfrid.Draw()
      .setMesh(alfrid.Geom.bigTriangle())
      .useProgram(alfrid.ShaderLibs.bigTriangleVert, fsAddVel)
      .setClearColor(0, 0, 0, 0)

    // gui
    const { gui } = window
    gui.add(this, 'move')

    window.addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        this.move()
      }
    })

    this._hasLoaded = true
  }

  update () {
    if (!this._hasLoaded) {
      return
    }

    this._drawSim
      .bindFrameBuffer(this._fboVel.write)
      .uniformTexture('uTexPos', this._fboPos.read.texture, 0)
      .uniformTexture('uTexVel', this._fboVel.read.texture, 1)
      .uniformTexture('uTexExtra', this._fboExtra.texture, 2)
      .uniformTexture('uTexPosOrg', this._fboPosOrg.texture, 3)
      .uniform('uFoceNoise', 'float', this._forceNoise.value)
      .uniform('uFoceFollow', 'float', this._forceFollow.value)
      .uniform('uCenter', 'vec3', this._center.value)
      .uniform('uTime', 'float', alfrid.Scheduler.deltaTime)
      .draw()
    this._fboVel.swap()

    this._drawAdd
      .bindFrameBuffer(this._fboPos.write)
      .uniformTexture('uTexPos', this._fboPos.read.texture, 0)
      .uniformTexture('uTexVel', this._fboVel.read.texture, 1)
      .uniformTexture('uTexPosOrg', this._fboPosOrg.texture, 2)
      .uniform('uCenter', 'vec3', this._center.value)
      .draw()

    this._fboPos.swap()
  }

  move () {
    this._forceNoise.value = 1
    this._forceFollow.value = 0
    setTimeout(() => {
      this._forceFollow.value = 1
      this._center.setY(2)
      this._center.z = this._center.z > -2 ? -4 : 0
    }, 1000)

    setTimeout(() => {
      this._center.y = 0
      this._forceNoise.value = 0
    }, 2000)
  }

  render () {
    if (!this._hasLoaded) { return }
    // this.update()
    this._bAxis.draw()

    this._drawRender
      .uniformTexture('texturePos', this._fboPos.read.texture, 0)
      .uniform('uViewport', 'vec2', [GL.width, GL.height])
      .draw()

    let s = 0.01
    // const r = 1.0
    // this._bBall.draw(this._center.value, [s, s, s], [1, 0, 0])
    // this._bBall.draw([0, 0, -r], [s, s, s], [0, 0, 1])
    // // this._bBall.draw([0, 0, r], [s, s, s], [0, 0, 1])
    // this._bBall.draw([r, 0, 0], [s, s, s], [1, 1, 0])
    const t = vec3.clone(ARUtils.cameraPos)
    vec3.add(t, t, ARUtils.lookDir)
    this._bBall.draw(t, [s, s, s], [1, 1, 0])
    // this._bDots.draw()

    s = 128
    GL.viewport(0, 0, s, s)
    this._bCopy.draw(this._fboPos.read.texture)
    GL.viewport(s, 0, s, s)
    this._bCopy.draw(this._fboVel.read.texture)
  }
}

export default SceneAR
