import { Draw, Geom } from "alfrid";

import vs from "shaders/mountain.vert";
import fs from "shaders/mountain.frag";

class DrawMountain extends Draw {
  constructor() {
    super();

    const s = 0.5;
    const num = 100;
    const mesh = Geom.plane(s, s, num, "xz");

    this.setMesh(mesh).useProgram(vs, fs);

    this.size = s;
  }
}

export default DrawMountain;
