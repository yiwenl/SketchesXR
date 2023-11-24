import { Draw, ShaderLibs, Geom } from "alfrid";

import fs from "shaders/compose.frag";

export default class DrawCompose extends Draw {
  constructor() {
    super();

    this.setMesh(Geom.bigTriangle()).useProgram(ShaderLibs.bigTriangleVert, fs);
  }
}
