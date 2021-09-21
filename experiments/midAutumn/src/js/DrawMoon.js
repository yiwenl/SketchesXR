import { Draw } from "alfrid";
import Assets from "./Assets";

import vs from "shaders/moon.vert";
import fs from "shaders/copy.frag";

class DrawMoon extends Draw {
  constructor() {
    super();

    this.setMesh(Assets.get("moon"))
      .useProgram(vs, fs)
      .bindTexture("texture", Assets.get("color"), 0);
  }
}

export default DrawMoon;
