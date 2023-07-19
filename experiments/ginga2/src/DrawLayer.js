import { Draw, Geom, ShaderLibs } from "alfrid";

import fs from "shaders/layer.frag";

export default class DrawLayer extends Draw {
  constructor() {
    super()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs);
  }
}
