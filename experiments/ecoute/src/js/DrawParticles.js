import { Draw, Mesh, GL, Geom } from "alfrid";

import Config from "./Config";
import vs from "shaders/render.vert";
import fs from "shaders/render.frag";

class DrawParticles extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;

    const s = 0.04;
    const mesh = Geom.cube(s * 3, s * 0.5, s);

    const uvOffset = [];

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        uvOffset.push([i / num, j / num]);
      }
    }

    mesh.bufferInstance(uvOffset, "aUVOffset");

    // const mesh = new Mesh(GL.POINTS)
    //   .bufferVertex(positions)
    //   .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawParticles;
