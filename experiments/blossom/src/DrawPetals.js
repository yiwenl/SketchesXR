import { Draw, Geom } from "alfrid";

import Config from "./Config";
import { random } from "./utils";
import vs from "shaders/petal.vert";
import fs from "shaders/petal.frag";

export default class DrawPetals extends Draw {
  constructor() {
    super();

    const s = 0.01;
    const mesh = Geom.plane(s, s, 1, "xz");

    const uvs = [];
    const extras = [];

    const { numParticles: num } = Config;
    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        uvs.push([i / num, j / num]);
        extras.push([random(), random(), random()]);
      }
    }

    mesh.bufferInstance(uvs, "aUV").bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
