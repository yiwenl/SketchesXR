import { Draw, Geom, ShaderLibs } from "alfrid";
import fs from "shaders/distort.frag";

export default class DrawDistort extends Draw {
  constructor() {
    const o = super();
    console.log(o);

    this.setMesh(Geom.bigTriangle()).useProgram(ShaderLibs.bigTriangleVert, fs);
  }
}
