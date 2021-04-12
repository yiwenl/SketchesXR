import { Draw, Geom } from "alfrid";

import vs from "shaders/pass.vert";
import fs from "shaders/vignette.frag";

class DrawVignette extends Draw {
  constructor() {
    super();

    this.setMesh(Geom.bigTriangle()).useProgram(vs, fs);
  }
}

export default DrawVignette;
