import alfrid, { GL } from 'alfrid'
import Config from './Config'
import { random } from 'randomutils'
import getMeshSave from './utils/getMeshSave'

import preload from './utils/preload'

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
    this._hasLoaded = true
    this._bBall = new alfrid.BatchBall()
    this._bAxis = new alfrid.BatchAxis()
    this._bCopy = new alfrid.BatchCopy()
    this._bDots = new alfrid.BatchDotsPlane()

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

    this._fboPosOrg.bind();
    GL.clear(0, 0, 0, 0);
    this._bCopy.draw(this._fboPos.read.texture);
    this._fboPosOrg.unbind();

    this._drawSim = new alfrid.Draw()
      .setMesh(alfrid.Geom.bigTriangle())
      .useProgram(alfrid.ShaderLibs.bigTriangleVert, fsSim)
      .setClearColor(0, 0, 0, 0)

    this._drawAdd = new alfrid.Draw()
      .setMesh(alfrid.Geom.bigTriangle())
      .useProgram(alfrid.ShaderLibs.bigTriangleVert, fsAddVel)
      .setClearColor(0, 0, 0, 0)
  }

  update () {
    this._drawSim
      .bindFrameBuffer(this._fboVel.write)
      .uniformTexture('uTexPos', this._fboPos.read.texture, 0)
      .uniformTexture('uTexVel', this._fboVel.read.texture, 1)
      .uniformTexture('uTexExtra', this._fboExtra.texture, 2)
      .uniformTexture('uTexPosOrg', this._fboPosOrg.texture, 3)
      .uniform('uTime', 'float', alfrid.Scheduler.deltaTime)
      .draw();
    this._fboVel.swap();
    
    this._drawAdd
      .bindFrameBuffer(this._fboPos.write)
      .uniformTexture('uTexPos', this._fboPos.read.texture, 0)
      .uniformTexture('uTexVel', this._fboVel.read.texture, 1)
      .draw();
    
    this._fboPos.swap();

  }

  render () {
    if (!this._hasLoaded) { return }
    this.update();
    this._bAxis.draw()
    this._bDots.draw()

    this._drawRender
      .uniformTexture('texturePos', this._fboPos.read.texture, 0)
      .uniform('uViewport', 'vec2', [GL.width, GL.height])
      .draw()

    const s = 128
    GL.viewport(0, 0, s, s)
    this._bCopy.draw(this._fboPos.read.texture)
    GL.viewport(s, 0, s, s)
    this._bCopy.draw(this._fboExtra.texture)
    GL.viewport(s * 2, 0, s, s)
    this._bCopy.draw(this._fboPosOrg.texture)
  }
}

export default SceneAR
