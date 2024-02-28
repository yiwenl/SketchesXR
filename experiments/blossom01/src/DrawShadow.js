import { Geom, Draw } from "alfrid";

import vs from "shaders/shadow.vert";
import fs from "shaders/shadow.frag";

export default class DrawShadow extends Draw {
  constructor() {
    super();

    const s = 4;

    this.setMesh(Geom.plane(s, s, 1, "xz")).useProgram(vs, fs);
  }
}
