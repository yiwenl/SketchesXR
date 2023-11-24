import { Draw, Mesh } from "alfrid";

import Config from "./Config";
import { vec3 } from "gl-matrix";
import { random } from "./utils";

import vs from "shaders/ribbon.vert";
import fs from "shaders/ribbon.frag";

export default class DrawRibbon extends Draw {
  constructor() {
    super();

    const { numSegs, numParticles: num } = Config;
    const numSides = 3;

    const { PI } = Math;

    const getPos = (i, j) => {
      const pos = [1, 0, 0];
      const a = (j / numSides) * PI * 2.0;
      vec3.rotateY(pos, pos, [0, 0, 0], -a);

      const normal = vec3.clone(pos);
      pos[1] = i;

      return {
        pos,
        normal,
      };
    };

    const positions = [];
    const uvs = [];
    const normals = [];
    const indices = [];
    let count = 0;

    for (let j = 0; j < numSides; j++) {
      for (let i = 0; i < numSegs; i++) {
        const p0 = getPos(i, j);
        const p1 = getPos(i + 1, j);
        const p2 = getPos(i + 1, j + 1);
        const p3 = getPos(i, j + 1);

        positions.push(p0.pos, p1.pos, p2.pos, p3.pos);
        normals.push(p0.normal, p1.normal, p2.normal, p3.normal);

        uvs.push([i / numSegs, j / numSides]);
        uvs.push([(i + 1) / numSegs, j / numSides]);
        uvs.push([(i + 1) / numSegs, (j + 1) / numSides]);
        uvs.push([i / numSegs, (j + 1) / numSides]);

        indices.push(count * 4 + 0);
        indices.push(count * 4 + 1);
        indices.push(count * 4 + 2);
        indices.push(count * 4 + 0);
        indices.push(count * 4 + 2);
        indices.push(count * 4 + 3);

        count++;
      }
    }

    const mesh = new Mesh()
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferIndex(indices);

    // instancing
    const uvOffset = [];
    const extras = [];
    let _num = 2;
    _num = num;
    for (let j = 0; j < _num; j++) {
      for (let i = 0; i < _num; i++) {
        uvOffset.push([(i + 0.5) / _num, (j + 0.5) / _num]);
        extras.push([random(), random(), random()]);
      }
    }

    mesh.bufferInstance(uvOffset, "aUVOffset").bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
