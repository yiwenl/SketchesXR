import { GL, Draw, FrameBuffer, Geom, ShaderLibs } from "alfrid";
import { random } from "./utils";

import fs from "shaders/noise.frag";
let draw, fbo;

const generateNoiseTexture = () => {
  if (!fbo) {
    const size = 1024;
    fbo = new FrameBuffer(size, size, { type: GL.FLOAT });

    draw = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs)
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(fbo);
  }
  draw.uniform("uSeed", random()).draw();

  return fbo.texture;
};

export default generateNoiseTexture;
