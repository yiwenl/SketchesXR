import { Draw, Mesh, GL } from "alfrid";

import { random } from "./utils";
import { vec3 } from "gl-matrix";

import vs from "shaders/dot-line.vert";
import fs from "shaders/dot-line.frag";

const total = 100000;
export default class DrawLines extends Draw {
  constructor() {
    super();

    const positions = [];
    const offset = [];
    const data = [];
    const indices = [];

    let num = total;
    while (num--) {
      const p = vec3.create();
      let r = Math.sqrt(random());
      r = Math.pow(r, 50.0);
      vec3.random(p, r);
      positions.push([random(), random(0.5, 2), random()]);
      offset.push(p);
      data.push([random(), random(), random(), random()]);
      indices.push(num);
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferData(data, "aData")
      .bufferData(offset, "aOffset")
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
