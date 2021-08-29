import { GL, Draw, Mesh } from "alfrid";

import Config from "./Config";
import { random, randomGaussian } from "randomutils";
import { vec3 } from "gl-matrix";
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num, paintingSize } = Config;

    const positions = [];
    const uvs = [];
    const normals = [];
    const datas = [];
    const indices = [];

    const getPos = () => {
      const r = randomGaussian() * 2.0;
      const a = random(Math.PI * 2);

      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const h = 0.2;
      const y = random(-h, h);

      return [x, y, z];
    };

    let index = 0;
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        normals.push([random(1), random(1), random(1)]);
        datas.push([random(1), random(1), random(1)]);

        indices.push(index++);
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferData(datas, "aData", 3)
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawSave;
