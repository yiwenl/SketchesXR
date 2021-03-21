import { GL, Draw, Mesh } from "alfrid";

import Config from "./Config";
import { random } from "randomutils";
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";
import { vec3 } from "gl-matrix";

class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num, paintingSize } = Config;

    const positions = [];
    const uvs = [];
    const normals = [];
    const data = [];
    const indices = [];

    const getPos = () => {
      const p = vec3.create();
      const r = Math.sqrt(Math.random()) * random(0.1, 0.2);
      vec3.random(p, r);

      p[1] += Config.centerY;
      return p;
    };

    let index = 0;
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        normals.push([random(1, 2), random(1), random(1)]);
        data.push([random(1), random(1), random(1)]);

        indices.push(index++);
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferData(data, "aData", 3)
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawSave;
