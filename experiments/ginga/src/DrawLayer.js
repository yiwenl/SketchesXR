import { Draw, Geom, ShaderLibs } from "alfrid";

import fs from "shaders/layer-pattern.frag";

export default class DrawLayer extends Draw {
  constructor() {
    super();

    this.setMesh(Geom.bigTriangle()).useProgram(ShaderLibs.bigTriangleVert, fs);
  }
}
