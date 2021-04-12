import { GL, Draw, Mesh } from "alfrid";

import Config from "./Config";
import { random } from "randomutils";
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

    const s = 0.005;
    const r = ringRadius;

    const getPos = () => {
      let a = random(PI * 2);
      let _r = sqrt(random(1)) * s;
      let y = Math.cos(a) * _r + r;
      let z = Math.sin(a) * _r;

      const v = vec3.fromValues(0, y, z);
      vec3.rotateZ(v, v, [0, 0, 0], random(PI * 2));

      return v;
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
