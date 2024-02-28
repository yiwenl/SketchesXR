import { Draw, Geom, ShaderLibs } from "alfrid";
import Assets from "./Assets.js";

export default class DrawEnv extends Draw {
  constructor() {
    super();

    this.setMesh(Geom.sphere(10, 24, true))
      .useProgram(ShaderLibs.skyboxVert, ShaderLibs.copyFrag)
      .bindTexture("texture", Assets.get("studio"), 0);
  }
}
