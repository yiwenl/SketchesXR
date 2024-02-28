import { Draw, Mesh, GL } from "alfrid";
import Config from "./Config";
import { vec3 } from "gl-matrix";
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

export default class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num, numSets } = Config;
    const positions = [];
    const uvs = [];
    const normals = [];
    const indices = [];

    let count = 0;

    const { random, sqrt } = Math;
    const getPos = () => {
      let r = sqrt(random()) * 3;
      return vec3.random([], r);
    };

    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        positions.push(getPos());
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        normals.push([random(), random(), random()]);
        indices.push(count);
        count++;
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs).setClearColor(0, 0, 0, 1);
  }
}
