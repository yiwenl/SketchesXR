import { GL, Draw, Mesh, Geom } from "./alfrid";

import Config from "./Config";
import { random } from "./utils";

import vs from "./shaders/render.vert";
import fs from "./shaders/render.frag";

class DrawRender extends Draw {
  constructor() {
    super();

    const s = 0.05;
    const ratio = 1 / 5;

    const mesh = Geom.cube(s, s * ratio, s * ratio);

    // instancing
    const { numParticles: num } = Config;
    const posOffsets = [];
    const extras = [];

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        posOffsets.push([i / num, j / num, random()]);
        extras.push([random(), random(), random()]);
      }
    }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawRender;
