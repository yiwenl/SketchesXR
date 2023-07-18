import { GL, Draw, Geom, ShaderLibs } from "alfrid";
import fs from "shaders/blur.frag";
let draw;

export default function applyBlur(fbo) {
  if (!draw) {
    const s = 0.5;
    draw = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs)
      .setClearColor(0, 0, 0, 0)
      .uniform("uResolution", "vec2", [GL.width * s, GL.height * s]);
  }

  let num = 3;

  while (num--) {
    draw
      .bindFrameBuffer(fbo.write)
      .bindTexture("texture", fbo.read.getTexture(), 0)
      .uniform("uDirection", [1, 0])
      .draw();

    fbo.swap();

    draw
      .bindFrameBuffer(fbo.write)
      .bindTexture("texture", fbo.read.getTexture(), 0)
      .uniform("uDirection", [0, 1])
      .draw();

    fbo.swap();
  }
}
