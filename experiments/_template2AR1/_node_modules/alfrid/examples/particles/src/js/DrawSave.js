import { GL, Draw, Mesh } from "alfrid";
import Config from "./Config";

import { vec3 } from "gl-matrix";
import { random } from "randomutils";

import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

class DrawSave extends Draw {
  constructor() {
    super();

    const { num } = Config;
    const positions = [];
    const uvs = [];
    const extras = [];
    const indices = [];
    let count = 0;

    const getPos = () => {
      const v = vec3.create();
      vec3.random(v, 1);
      const s = random(1, 2);
      vec3.scale(v, v, s);
      return v;
    };

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        extras.push([random(1), random(1), random(1)]);
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        indices.push(count);

        count++;
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferData(extras, "aExtra")
      .bufferIndex(indices);

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .setClearColor(0, 0, 0, 0);
  }
}

export default DrawSave;
