import { GL, Draw, Mesh } from "alfrid";
import { random } from "./utils";

import vs from "shaders/particles.vert";
import fs from "shaders/particles.frag";

export default class DrawParticles extends Draw {
  constructor() {
    super();

    const positions = [];
    const uvs = [];
    const indices = [];
    const numParticles = 10000;
    let num = numParticles;

    const r = 0.2;

    while (num--) {
      positions.push([random(-r, r), random(-r, r) + r / 2, random(-r, r)]);
      uvs.push([random(), random()]);
      indices.push(num);
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
