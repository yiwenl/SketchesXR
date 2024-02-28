import { GL, Draw, DrawCopy, Geom, ShaderLibs, FboPingPong } from "alfrid";

import generateNoiseTexture from "./generateNoiseTexture";
import generateCircleTexture from "./generateCircleTexture";

import fsSim from "shaders/ink-sim.frag";
import fsOutput from "shaders/output.frag";

const MAX_STEPS = 100;

let drawSim, drawCopy, drawOutput, fbo;

const generateInkTexture = () => {
  const tNoise = generateNoiseTexture();
  const tCircle = generateCircleTexture();

  if (!fbo) {
    drawCopy = new DrawCopy();
    drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fsSim)
      .setClearColor(0, 0, 0, 1);

    drawOutput = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fsOutput)
      .setClearColor(0, 0, 0, 1);

    const fboSize = 1024;
    fbo = new FboPingPong(fboSize, fboSize, {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    });
  }

  fbo.read.bind();
  GL.clear(0, 0, 0, 0);
  drawCopy.draw(tCircle);
  fbo.read.unbind();

  let i = MAX_STEPS;
  while (i--) {
    drawSim
      .bindFrameBuffer(fbo.write)
      .bindTexture("uTexBase", tCircle, 0)
      .bindTexture("uTexPrev", fbo.read.texture, 1)
      .bindTexture("uTexFlow", tNoise, 2)
      .draw();

    fbo.swap();
  }

  return fbo.read.texture;
};

export default generateInkTexture;
