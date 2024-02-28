import { Draw, Geom, ShaderLibs, FrameBuffer, GL } from "alfrid";
import { random } from "./utils";

import fs from "shaders/height.frag";

const generateHeightMap = (mSize = 1024) => {
  const fbo = new FrameBuffer(mSize, mSize, {
    type: GL.FLOAT,
    minFilter: GL.NEAREST,
    magFilter: GL.NEAREST,
  });
  new Draw()
    .setMesh(Geom.bigTriangle())
    .useProgram(ShaderLibs.bigTriangleVert, fs)
    .setClearColor(0, 0, 0, 0)
    .bindFrameBuffer(fbo)
    .uniform("uSeed", random())
    .uniform("uHeight", random(0.8, 1.2) * 0.25)
    .uniform("uStiff", random(1.5, 1.7))
    .draw();

  return fbo.texture;
};

export default generateHeightMap;
