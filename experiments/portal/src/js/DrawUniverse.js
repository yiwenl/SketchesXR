import { Draw, Geom, ShaderLibs } from "alfrid";

import Assets from "./Assets";
import vs from "shaders/universe.vert";

class DrawUniverse extends Draw {
  constructor() {
    super();

    this.setMesh(Geom.sphere(5, 24, true))
      .useProgram(vs, ShaderLibs.copyFrag)
      .bindTexture("texture", Assets.get("starsmap"), 0);
  }
}

export default DrawUniverse;
