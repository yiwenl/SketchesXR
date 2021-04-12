import { Draw } from "alfrid";
import Assets from "./Assets";

import vs from "shaders/basic.vert";
import fs from "shaders/copy.frag";

class DrawLight extends Draw {
  constructor() {
    super();

    this.setMesh(Assets.get("led"))
      .useProgram(vs, fs)
      .bindTexture("uMap", Assets.get("emissive"), 0);
  }
}

export default DrawLight;
