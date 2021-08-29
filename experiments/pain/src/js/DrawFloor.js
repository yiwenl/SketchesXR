import { Draw, Geom } from "alfrid";

import vs from "shaders/floor.vert";
import fs from "shaders/floor.frag";

class DrawFloor extends Draw {
  constructor() {
    super();

    const s = 5;
    this.setMesh(Geom.plane(s, s, 1, "xz")).useProgram(vs, fs);
  }
}

export default DrawFloor;
