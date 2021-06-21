import { Draw, Geom, FboPingPong, GL } from "alfrid";

import vs from "shaders/pass.vert";
import fs from "shaders/blur.frag";

class BlurPass {
  constructor(mFboSize = 1024) {
    this._fbo = new FboPingPong(mFboSize, mFboSize, {
      minFilter: GL.LINEAR,
      magFilter: GL.LINEAR,
    });

    this._draw = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vs, fs)
      .uniform("uResolution", [mFboSize, mFboSize])
      .setClearColor(0, 0, 0, 1);
  }

  update(mSource) {
    const num = 3;
    const s = 1;

    for (let i = 0; i < num; i++) {
      const t = i === 0 ? mSource : this._fbo.read.texture;
      this._draw
        .bindFrameBuffer(this._fbo.write)
        .bindTexture("uMap", t, 0)
        .uniform("uDirection", [s, 0])
        .draw();

      this._fbo.swap();

      this._draw
        .bindFrameBuffer(this._fbo.write)
        .bindTexture("uMap", this._fbo.read.texture, 0)
        .uniform("uDirection", [0, s])
        .draw();

      this._fbo.swap();
    }
  }

  get texture() {
    return this._fbo.read.texture;
  }
}

export default BlurPass;
