import { Geom, Draw } from "alfrid";

import vs from "shaders/hand-ray.vert";
import fs from "shaders/hand-ray.frag";

export default class DrawHandRay extends Draw {
  constructor() {
    super();

    const s = 0.005;
    this.setMesh(Geom.cube(s, s, 1))
      .useProgram(vs, fs)
      .uniform("uColor", [1, 1, 1])
      .uniform("uOpacity", 0.5);
  }
}
