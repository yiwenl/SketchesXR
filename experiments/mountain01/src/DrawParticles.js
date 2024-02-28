import { GL, Mesh, Draw } from "alfrid";
import { random } from "./utils";
import Config from "./Config";

import vs from "shaders/particles.vert";
import fs from "shaders/particles.frag";

export default class DrawParticles extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;

    const positions = [];
    const uvs = [];
    const indices = [];

    let count = 0;
    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        positions.push([random(1, 3), random(), random()]);
        uvs.push([i / num, j / num]);
        indices.push(count);
        count++;
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
