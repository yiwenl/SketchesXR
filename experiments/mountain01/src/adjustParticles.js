import { Draw, Geom, ShaderLibs } from "alfrid";

import fs from "shaders/adjust.frag";

export default function (fbo, r, tInk, tHeight) {
  let numSteps = 10;

  const draw = new Draw()
    .setMesh(Geom.bigTriangle())
    .useProgram(ShaderLibs.bigTriangleVert, fs)
    .setClearColor(0, 0, 0, 0);

  while (numSteps--) {
    draw
      .bindFrameBuffer(fbo.write)
      .bindTexture("uPosMap", fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", fbo.read.getTexture(4), 4)
      .bindTexture("uInkMap", tInk, 5)
      .bindTexture("uHeightMap", tHeight, 6)
      .uniform("uBound", r)
      .uniform("uSeed", Math.random() * 10)
      .draw();

    fbo.swap();
  }
}
