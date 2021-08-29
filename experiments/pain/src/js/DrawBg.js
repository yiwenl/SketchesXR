import { Draw, Mesh } from "alfrid";

import vs from "shaders/bg.vert";
import fs from "shaders/bg.frag";

class DrawBg extends Draw {
  constructor() {
    super();
    const r = 1.85;
    const h = 2;
    const num = 24;

    const positions = [];
    const indices = [];
    let count = 0;

    const getPos = (i, j) => {
      const a = (i / num) * Math.PI * 2;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = j * h;

      return [x, y, z];
    };

    for (let i = 0; i < num; i++) {
      const j = 0;
      positions.push(getPos(i, j));
      positions.push(getPos(i + 1, j));
      positions.push(getPos(i + 1, j + 1));
      positions.push(getPos(i, j + 1));

      indices.push(count * 4 + 0);
      indices.push(count * 4 + 1);
      indices.push(count * 4 + 2);
      indices.push(count * 4 + 0);
      indices.push(count * 4 + 2);
      indices.push(count * 4 + 3);

      count++;
    }

    const mesh = new Mesh().bufferVertex(positions).bufferIndex(indices);
    this.setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uMaxHeight", h);
  }
}

export default DrawBg;
