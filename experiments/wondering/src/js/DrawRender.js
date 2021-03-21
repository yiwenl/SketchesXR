import { Draw, Geom } from "alfrid";

import Config from "./Config";
import { random } from "randomutils";
import vs from "shaders/render.vert";
import fs from "shaders/render.frag";

class DrawRender extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;

    const s = 0.001;
    const mesh = Geom.sphere(s, 12);
    // const mesh = Geom.cube(s * 2, s * 2, s * 2);

    // instancing
    const uvs = [];
    const extras = [];
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        uvs.push([i / num, j / num]);
        extras.push([random(1, 2), random(1), random(1)]);
      }
    }

    mesh.bufferInstance(uvs, "aUV");
    mesh.bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawRender;
