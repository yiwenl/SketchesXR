import { Geom, Draw } from "alfrid";

import Config from "./Config";
import { random } from "./utils";
import vs from "shaders/blocks.vert";
import fs from "shaders/blocks.frag";

export default class DrawBlocks extends Draw {
  constructor() {
    super();

    const s = 0.005;
    const ratio = 0.4;
    const mesh = Geom.cube(s, s * ratio, s * ratio);

    const extras = [];
    const uvOffsets = [];

    const { numParticles: num } = Config;

    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        extras.push([random(1, 3), random(), random()]);
        uvOffsets.push([i / num, j / num]);
      }
    }

    mesh.bufferInstance(uvOffsets, "aUV").bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
