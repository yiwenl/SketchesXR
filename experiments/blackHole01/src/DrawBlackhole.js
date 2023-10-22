import { Draw, Geom, ShaderLibs } from "alfrid";

import fs from "shaders/blackhole.frag";

export default class DrawBlackhole extends Draw {
  constructor() {
    super()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs);
  }
}
