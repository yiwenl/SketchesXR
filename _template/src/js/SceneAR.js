import alfrid, { GL } from 'alfrid'

class SceneAR {
  init () {
    this._bBall = new alfrid.BatchBall()
    this._bAxis = new alfrid.BatchAxis()
    this._bCopy = new alfrid.BatchCopy()

    const s = 0.1
    console.log(GL.aspectRatio)
    this._drawPlane = new alfrid.Draw()
      .setMesh(alfrid.Geom.plane(s, s, 1))
      .useProgram(null, alfrid.ShaderLibs.copyFrag)
  }

  update ({ background }) {
    // console.log('update', o)
    if (!this._textureBackground) {
      this._textureBackground = new alfrid.GLTexture(background)

      const s = 0.1
      this._draw = new alfrid.Draw()
        .setMesh(alfrid.Geom.plane(s, s, 1))
        .useProgram(null, alfrid.ShaderLibs.copyFrag)
        // .useProgram(null, alfrid.ShaderLibs.simpleColorFrag)
        // .uniform('color', 'vec3', [0, 0, 1])
        // .uniform('opacity', 'float', 0.5)
    } else {
      this._textureBackground.updateTexture(background)
    }
  }

  render () {
    this._bAxis.draw()

    const s = 0.01
    this._bBall.draw([0, 0, 0], [s, s, s], [1, 1, 1])
    this._bBall.draw([0.1, 0, 0], [s, s, s], [1, 0, 0])
    this._bBall.draw([-0.1, 0, 0], [s, s, s], [1, 0, 0])
    this._bBall.draw([0, 0, 0.1], [s, s, s], [1, 0, 0])
    this._bBall.draw([0, 0, -0.1], [s, s, s], [1, 0, 0])

    if (this._draw) {
      this._draw
        .uniformTexture('texture', this._textureBackground, 0)
        .draw()
    }
  }
}

export default SceneAR
