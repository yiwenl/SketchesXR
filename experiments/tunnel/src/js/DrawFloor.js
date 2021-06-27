import { Geom, Draw } from "alfrid";

import vs from "shaders/floor.vert";
import fs from "shaders/floor.frag";

class DrawFloor extends Draw {
  constructor() {
    super();

    const s = 10;
    const mesh = Geom.plane(s * 0.2, s, 1, "xz");
    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawFloor;
