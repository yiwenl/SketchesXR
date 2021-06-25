import { Mesh, GL, Draw } from "alfrid";

import Config from "./Config";
import { random, randomGaussian } from "randomutils";

// shaders
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;
    const positions = [];
    const uvs = [];
    const normals = [];
    const extras = [];
    const indices = [];
    let count = 0;

    const getPos = () => {
      const r = randomGaussian() * 0.2 + 0.02;
      const a = random(Math.PI * 2);
      const tz = 0.02;
      const z = randomGaussian() * tz - tz * 0.5;

      return [Math.cos(a) * r, Math.sin(a) * r, z];
    };

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        normals.push([randomGaussian(), randomGaussian(), randomGaussian()]);
        extras.push([random(1), random(1), random(1)]);
        indices.push(count);
        count++;
      }
    }

    const mesh = new Mesh(GL.POINTS);
    mesh
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferData(extras, "aData")
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawSave;
