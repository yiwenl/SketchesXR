import { Draw, Geom, Mesh } from "alfrid";

import Config from "./Config";
import vs from "shaders/portal.vert";
import fs from "shaders/portal.frag";

class DrawUniverse extends Draw {
  constructor() {
    super();

    const { ringRadius } = Config;

    const r = ringRadius * 1.1;

    this.setMesh(Geom.sphere(r, 24, true))
      .useProgram(vs, fs)
      .uniform("uSize", r);
  }
}

export default DrawUniverse;
