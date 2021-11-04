import { GL, Draw, Mesh } from "alfrid";

import Config from "./Config";
import { random, randomGaussian } from "randomutils";
import { vec3 } from "gl-matrix";
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

class DrawSwarmSave extends Draw {
  constructor() {
    super();

    const { numSwarm: num, maxHeight } = Config;

    const positions = [];
    const uvs = [];
    const normals = [];
    const datas = [];
    const indices = [];

    const getPos = () => {
      const r = random(5, 10);
      const a = random(Math.PI * 2);

      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = random(0, maxHeight);

      return [x, y, z];
    };

    const getCircPos = () => {
      const r = random(1, 5);
      const a = random(Math.PI * 2);

      const z = -randomGaussian() - 1;
      const y = Math.sin(a) * r;
      const x = Math.cos(a) * r;

      return [x, y, z];
    };

    let index = 0;
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        normals.push([randomGaussian(), randomGaussian(), randomGaussian()]);
        datas.push(getCircPos());

        indices.push(index++);
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferData(datas, "aData", 3)
      .bufferIndex(indices);

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .setClearColor(0, 0, 0, 1);
  }
}

export default DrawSwarmSave;
