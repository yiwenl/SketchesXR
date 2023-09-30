import { GL, Mesh, Draw } from "alfrid";

import Config from "./Config";
import { vec3 } from "gl-matrix";
import { random, randomGaussian } from "randomutils";

import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

const DEFAULT_Y = 0.3;

class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;

    const positions = [];
    const uvs = [];
    const data = [];
    const extra = [];
    const indices = [];
    let count = 0;

    const getPos = () => {
      const r = Math.sqrt(Math.random()) * Config.moonRadius;
      const v = vec3.create();
      vec3.random(v, r);
      v[1] = -Math.abs(v[1]);
      v[1] += DEFAULT_Y;
      return v;
    };

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        positions.push(getPos());
        uvs.push([(i / num) * 2 - 1, (j / num) * 2 - 1]);
        data.push([random(1), 1, 0]);
        extra.push([randomGaussian(), randomGaussian(), randomGaussian()]);
        indices.push(count);
        count++;
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferData(extra, "aExtra")
      .bufferData(data, "aData")
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawSave;
