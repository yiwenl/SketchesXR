import { GL, Draw, Mesh } from "alfrid";

import Config from "./Config";
import { random, randomGaussian } from "randomutils";
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";
import { vec3 } from "gl-matrix";

class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num, ringRadius, ringPosition } = Config;
    const { sin, cos, PI, sqrt } = Math;

    const positions = [];
    const uvs = [];
    const normals = [];
    const datas = [];
    const indices = [];

    const radius = 2;

    const getPos = () => {
      const v = vec3.create();
      vec3.random(v, radius * Math.sqrt(Math.random()));

      return v;
    };

    let index = 0;
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        normals.push([randomGaussian(), randomGaussian(), randomGaussian()]);
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
