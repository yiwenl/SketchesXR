import { Draw, Geom } from "alfrid";

import Config from "./Config";
import vs from "shaders/floor.vert";
import fs from "shaders/floor.frag";
// import fs from "shaders/depth.frag";

class DrawFloor extends Draw {
  constructor() {
    super();

    const s = Config.envSize * 1.5;

    this.setMesh(Geom.plane(s, s, 1, "xz")).useProgram(vs, fs);
  }
}

export default DrawFloor;
