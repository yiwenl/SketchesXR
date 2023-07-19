import { GL, Draw, Geom, ShaderLibs } from "alfrid";

import fs from "shaders/outline.frag";
let draw;
export default function generateOutline(mFboOutline, mXORMap) {
  const lineWidth = 1;
  const s = 2;
  if (!draw) {
    draw = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs)
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(mFboOutline)
      .uniform("uResolution", [GL.width * s, GL.height * s])
      .uniform("uLineWidth", lineWidth)
      .draw();
  }

  draw.bindTexture("texture", mXORMap, 0).draw();
}
