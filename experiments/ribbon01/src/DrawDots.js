import { GL, Draw, Mesh } from "alfrid";

import Config from "./Config";
import vs from "shaders/dots.vert";
import fs from "shaders/dots.frag";

export default class DrawDots extends Draw {
  constructor() {
    super();

    const { numParticles: num, numSets } = Config;

    const positions = [];
    const uvs = [];
    const indices = [];
    let count = 0;
    const { random } = Math;

    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        positions.push([random(), random(), random()]);
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
