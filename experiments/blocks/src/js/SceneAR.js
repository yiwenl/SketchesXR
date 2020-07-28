import alfrid, { GL } from 'alfrid'
import Assets from './Assets'
import Config from './Config'
import vs from 'shaders/cubes.vert'
import fs from 'shaders/cubes.frag'

const { mat4, vec3 } = window

const CUBE_SIZE = 0.1
const numRows = 573

const COLORSET0 = [
  0, 0, 0,
  21, 31, 94,
  51, 172, 168,
  159, 219, 170,
  241, 255, 171
]

const COLORSET1 = [
  0, 0, 0,
  47, 5, 42,
  53, 13, 94,
  197, 0, 134,
  219, 190, 46
]

const YOFFSET = 0
const SEPARATION = 0.5

class SceneAR {
  init () {
    // state
    this._hasStarted = false

    // model matrix prep
    this._mtxBase = mat4.create()
    this._mtxCenter = mat4.create()

    const easing = 0.05
    this._levelLeft = new alfrid.EaseNumber(1, easing)
    this._levelRight = new alfrid.EaseNumber(1, easing)

    this._clipPlane = new alfrid.EaseNumber(0)
    this._clipPlane.value = CUBE_SIZE * numRows

    // setup draw calls

    const getMesh = (mSide) => {
      let min = 99999
      let max = 0
      const data = Assets.get(`data${mSide}`)
      const isLeft = mSide === 'Left'

      const columnLength = data.length / 573
      const mesh = alfrid.Geom.cube(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE)

      const posOffsets = []
      for (let i = 0; i < columnLength; i++) {
        for (let j = 0; j < numRows; j++) {
          let x
          if (isLeft) {
            x = i * CUBE_SIZE - columnLength * CUBE_SIZE + CUBE_SIZE * 0.5
          } else {
            // x = (columnLength - i) * CUBE_SIZE
            x = i * CUBE_SIZE
          }

          const z = j * CUBE_SIZE
          const index = j * columnLength + i
          const y = data[index]
          min = Math.min(y, min)
          max = Math.max(y, max)

          posOffsets.push([x, y, z])
        }
      }
      mesh.bufferInstance(posOffsets, 'aPosOffset')
      return { mesh, min, max, columnLength }
    }

    const oLeft = getMesh('Left')
    const oRight = getMesh('Right')

    this._drawCubesLeft = new alfrid.Draw()
      .setMesh(oLeft.mesh)
      .useProgram(vs, fs)
      .uniform('uRange', 'vec2', [oLeft.min, oLeft.max])
      .uniform('uColumnLength', 'float', oLeft.columnLength)
      .uniform('uCubeSize', 'float', CUBE_SIZE)
      .uniform('uColors', 'vec3', COLORSET0)

    this._drawCubesRight = new alfrid.Draw()
      .setMesh(oRight.mesh)
      .useProgram(vs, fs)
      .uniform('uRange', 'vec2', [oRight.min, oRight.max])
      .uniform('uColumnLength', 'float', oRight.columnLength)
      .uniform('uCubeSize', 'float', CUBE_SIZE)
      .uniform('uColors', 'vec3', COLORSET1)

    this._bBall = new alfrid.BatchBall()
  }

  play (mMtx) {
    if (this._hasStarted) { return }

    mat4.copy(this._mtxCenter, mMtx)
    this._mtxLeft = mat4.create()
    this._mtxRight = mat4.create()

    const scale = 0.1
    const offsetX = numRows * CUBE_SIZE * 0.5
    mat4.copy(this._mtxLeft, mMtx)
    mat4.translate(this._mtxLeft, this._mtxLeft, vec3.fromValues(0, 0, -SEPARATION * scale))
    mat4.rotateY(this._mtxLeft, this._mtxLeft, -Math.PI / 2)
    mat4.scale(this._mtxLeft, this._mtxLeft, vec3.fromValues(scale, scale, scale))
    mat4.translate(this._mtxLeft, this._mtxLeft, vec3.fromValues(0, 0, -offsetX))

    mat4.copy(this._mtxRight, mMtx)
    mat4.translate(this._mtxRight, this._mtxRight, vec3.fromValues(0, 0, SEPARATION * scale))
    mat4.rotateY(this._mtxRight, this._mtxRight, -Math.PI / 2)
    mat4.scale(this._mtxRight, this._mtxRight, vec3.fromValues(scale, scale, scale))
    mat4.translate(this._mtxRight, this._mtxRight, vec3.fromValues(0, 0, -offsetX))

    this._hasStarted = true
  }

  update () {

  }

  render () {
    if (!this._hasStarted) { return }
    // GL.rotate(this._mtxCenter)

    GL.rotate(this._mtxLeft)
    this._drawCubesLeft
      .uniform('uDirection', 'float', 1.0)
      .uniform('uDataHeight', 'float', Config.maxDataHeight)
      .uniform('uTime', 'float', alfrid.Scheduler.deltaTime)
      .uniform('uShading', 'float', Config.shading)
      .uniform('uBlockWidth', 'float', Config.blockWidth)
      .uniform('uClipPlane', 'float', this._clipPlane.value)
      .uniform('uLevel', 'float', this._levelLeft.value)
      .uniform('uWaveNoise', 'float', Config.waveNoise)
      .draw()

    GL.rotate(this._mtxRight)
    this._drawCubesRight
      .uniform('uDirection', 'float', -1.0)
      .uniform('uDataHeight', 'float', Config.maxDataHeight)
      .uniform('uTime', 'float', alfrid.Scheduler.deltaTime)
      .uniform('uBlockWidth', 'float', Config.blockWidth)
      .uniform('uShading', 'float', Config.shading)
      .uniform('uClipPlane', 'float', this._clipPlane.value)
      .uniform('uLevel', 'float', this._levelRight.value)
      .uniform('uWaveNoise', 'float', Config.waveNoise)
      .draw()
  }
}

export default SceneAR
