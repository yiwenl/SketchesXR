import { Draw, Geom, ShaderLibs } from "alfrid";
import fs from "shaders/distort.frag";

export default class DrawDistort extends Draw {
  constructor() {
    super()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs);
  }
}
