import { Draw, Geom } from "alfrid";

import vs from "shaders/mark.vert";
import fs from "shaders/mark.frag";

class DrawMark extends Draw {
  constructor() {
    super();

    const s = 0.1;
    const mesh = Geom.plane(s, s, 1, "xz");
    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawMark;
