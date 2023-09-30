import { GL, FrameBuffer, Draw, ShaderLibs, Geom } from "alfrid";

import fs from "shaders/grading.frag";
let fbo, draw;

export default function colorGrade(mSource, mLookup) {
  if (!fbo) {
    fbo = new FrameBuffer(GL.width, GL.height);
    draw = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs)
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(fbo);
  }

  draw
    .bindTexture("uMap", mSource, 0)
    .bindTexture("uLookupMap", mLookup, 1)
    .draw();

  return fbo.texture;
}
