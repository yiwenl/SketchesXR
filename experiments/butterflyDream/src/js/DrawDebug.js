import { Draw, GL, Mesh } from "alfrid";

import Config from "./Config";
import vs from "shaders/debug.vert";
import fs from "shaders/debug.frag";

class DrawDebug extends Draw {
  constructor() {
    super();

    const { numSwarm: num } = Config;

    const positions = [];
    const uvs = [];
    const indices = [];
    let index = 0;

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        uvs.push([i / num + 0.5 / num, j / num + 0.5 / num]);
        positions.push([Math.random(), Math.random(), Math.random()]);
        indices.push(index);
        index++;
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawDebug;
