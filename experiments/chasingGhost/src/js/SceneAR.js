import alfrid, { GL } from 'alfrid'
import Config from './Config'
import getMeshSave from './utils/getMeshSave'
import { biasMatrix } from './utils'
import ARUtils from './ARUtils'

import preload from './utils/preload'
import AnimateVec3 from './AnimateVec3'

import vsSave from 'shaders/save.vert'
import fsSave from 'shaders/save.frag'
import vsRender from 'shaders/render.vert'
import fsRender from 'shaders/render.frag'
import fsSim from 'shaders/sim.frag'
import fsAddVel from 'shaders/addVel.frag'
import vsFloor from 'shaders/floor.vert'
import fsFloor from 'shaders/floor.frag'

class SceneAR {
  init () {
    this._hasLoaded = false
    this._isMoving = false

    this._cameraLight = new alfrid.CameraOrtho()
    const s = 3
    this._cameraLight.ortho(-s, s, s, -s, 0.1, 5)
    this._shadowMatrix = mat4.create()

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
    this._fboDepth = new alfrid.FrameBuffer(512, 512)

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

    this._drawAdd = new alfrid.Draw()
      .setMesh(alfrid.Geom.bigTriangle())
      .useProgram(alfrid.ShaderLibs.bigTriangleVert, fsAddVel)
      .setClearColor(0, 0, 0, 0)

    this._drawFloor = new alfrid.Draw()
      .setMesh(alfrid.Geom.plane(3, 3, 1, 'xz'))
      .useProgram(vsFloor, fsFloor)
      .uniform('color', 'vec3', [1, 0, 0])
      .uniform('opacity', 'float', 1)

    this._offsetShadow = new alfrid.EaseNumber(1)
    // gui
    const { gui } = window
    gui.add(this, 'move')

    this._hasLoaded = true
  }

  update () {
    if (!this._hasLoaded) {
      return
    }
    const { vec3 } = window
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

    // update shadow camera
    const eye = vec3.clone(this._center.value)
    eye[1] += 2.5
    eye[0] += 1
    eye[2] += 1.2
    this._cameraLight.lookAt(eye, this._center.value, [0, 0, -1])

    mat4.identity(this._shadowMatrix, this._shadowMatrix)
    mat4.multiply(this._shadowMatrix, this._cameraLight.projection, this._cameraLight.viewMatrix)
    mat4.multiply(this._shadowMatrix, biasMatrix, this._shadowMatrix)

    // update shadow map
    this._fboDepth.bind()
    GL.clear(0, 0, 0, 0)
    GL.setMatrices(this._cameraLight)
    this._drawRender
      .uniformTexture('texturePos', this._fboPos.read.texture, 0)
      .uniformTexture('textureDepth', this._fboPosOrg.texture, 1)
      .uniform('uViewport', 'vec2', [1024, 1024])
      .uniform('uRenderDepth', 'float', 1.0)
      .uniform('uShadowMatrix', 'mat4', this._shadowMatrix)
      .draw()
    this._fboDepth.unbind()

    if (!ARUtils.isSupported) {
      return
    }

    // check position

    const c1 = vec2.fromValues(this._center.x, this._center.z)
    const c2 = vec2.fromValues(ARUtils.cameraPos[0], ARUtils.cameraPos[2])

    // const d = vec3.distance(this._center.value, ARUtils.cameraPos)
    const d = vec2.distance(c1, c2)
    // console.log('Distance to target', d, c1, c2)
    if (d < 1.5) {
      const dir = vec3.clone(ARUtils.lookDir)
      vec3.mul(dir, dir, [1, 0, 1])
      vec3.normalize(dir, dir)
      vec3.scale(dir, dir, 4)
      this.move(this._center.x + dir[0], this._center.z + dir[2])
    }
  }

  move (x, z) {
    if (this._isMoving) {
      return
    }
    console.log('move to ', x, z)
    this._offsetShadow.value = 1
    this._forceNoise.value = 1
    this._forceFollow.value = 0
    setTimeout(() => {
      this._forceFollow.value = 1
      this._center.setY(2)
      this._center.x = x
      this._center.z = z
    }, 1000)

    setTimeout(() => {
      this._center.y = 0
      this._forceNoise.value = 0
      this._isMoving = false
      this._offsetShadow.value = 1
    }, 2000)
    this._isMoving = true
  }

  render () {
    if (!this._hasLoaded) { return }
    // this.update()
    // this._bAxis.draw()

    this._drawRender
      .uniformTexture('texturePos', this._fboPos.read.texture, 0)
      .uniformTexture('textureDepth', this._fboDepth.texture, 1)
      .uniform('uViewport', 'vec2', [GL.width, GL.height])
      .uniform('uRenderDepth', 'float', 0.0)
      .uniform('uShadowMatrix', 'mat4', this._shadowMatrix)
      .uniform('uShadowStrength', 'float', this._offsetShadow.value)
      .draw()

    GL.pushMatrix()
    const m = mat4.create()
    mat4.translate(m, m, [this._center.x, -1.6, this._center.z])
    GL.rotate(m)
    this._drawFloor
      .uniform('uShadowMatrix', 'mat4', this._shadowMatrix)
      .uniformTexture('texture', this._fboDepth.texture, 0)
      .draw()
    GL.popMatrix()

    /*
    let s = 0.01
    const t = vec3.clone(ARUtils.cameraPos)
    vec3.add(t, t, ARUtils.lookDir)
    this._bBall.draw(t, [s, s, s], [1, 1, 0])
    */

    // const s = 200
    // GL.viewport(0, 0, s, s)
    // this._bCopy.draw(this._fboDepth.texture)
  }
}

export default SceneAR
