import { Geom, Draw, Mesh } from "alfrid";
import { random } from "./utils";
import Config from "./Config";
import { vec3 } from "gl-matrix";

import vs from "shaders/render.vert";
import fs from "shaders/render.frag";

export default class DrawRender extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;
    const s = 0.02;
    const ratio = 0.2;

    const mesh = Geom.cube(s, s * ratio, s * ratio);

    const posOffsets = [];
    const uvOffsets = [];
    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        posOffsets.push([random(1, 3), random(1, 2), random()]);
        uvOffsets.push([(i + 0.5) / num, (j + 0.5) / num]);
      }
    }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(uvOffsets, "aUV");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
