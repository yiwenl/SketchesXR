import { Draw, ShaderLibs, Geom, GL } from "alfrid";
import Assets from "./Assets";

import fs from "shaders/grain.frag";

class DrawFilmGrain extends Draw {
  constructor() {
    super();

    const t = Assets.get("noise");
    t.wrapS = t.wrapT = GL.REPEAT;
    this.setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs)
      .bindTexture("texture", t);
  }
}

export default DrawFilmGrain;
