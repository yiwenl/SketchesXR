import { Geom, Draw } from "alfrid";

import vs from "shaders/plane.vert";
import fs from "shaders/plane.frag";

export default class DrawPlane extends Draw {
  constructor() {
    super();

    const s = 10;
    const num = 100;
    const mesh = Geom.plane(s, s, num, "xz");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
