import { Draw, Geom } from "alfrid";

import vs from "shaders/cube.vert";
import fs from "shaders/cube.frag";

export default class DrawCube extends Draw {
  constructor() {
    const s = 1;
    super().setMesh(Geom.cube(s, s, s)).useProgram(vs, fs);
  }
}
