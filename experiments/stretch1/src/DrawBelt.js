import { Draw, Mesh } from "alfrid";

import { pick, random } from "./utils";

import vs from "shaders/belt.vert";
import fs from "shaders/belt.frag";

export default class DrawBelt extends Draw {
  constructor() {
    super();

    // const mesh = Geom.plane(0.2, 5, 100, "xz");

    const positions = [];
    const uvs = [];
    const indices = [];
    let count = 0;

    let num = 300;
    const beltWidth = 0.1;
    const beltLenght = 5;
    for (let i = 0; i < num; i++) {
      positions.push([-beltWidth, 0, -(i / num) * beltLenght]);
      positions.push([beltWidth, 0, -(i / num) * beltLenght]);
      positions.push([beltWidth, 0, -((i + 1) / num) * beltLenght]);
      positions.push([-beltWidth, 0, -((i + 1) / num) * beltLenght]);

      uvs.push([0, i / num]);
      uvs.push([1, i / num]);
      uvs.push([1, (i + 1) / num]);
      uvs.push([0, (i + 1) / num]);

      indices.push(count * 4 + 0);
      indices.push(count * 4 + 1);
      indices.push(count * 4 + 2);
      indices.push(count * 4 + 0);
      indices.push(count * 4 + 2);
      indices.push(count * 4 + 3);

      count++;
    }

    const mesh = new Mesh()
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferIndex(indices);

    // instancing
    let numInstances = 300;
    let posOffsets = [];
    const extras = [];

    const { sin, cos, PI } = Math;

    while (numInstances--) {
      let x, z;
      let numTries = 0;
      do {
        const r = random(1, 7);
        const a = random(-1, 1) * PI * 0.4 - PI * 0.5;
        x = cos(a) * r;
        z = sin(a) * r;
      } while (Math.abs(x) < 0.3 && numTries++ < 100);
      const scale = random(0.1, 2);
      posOffsets.push([x, scale, z]);
      extras.push([random(1, 2), random(0.5, 1), random()]);
    }

    posOffsets = posOffsets.sort((a, b) => {
      return b[2] - a[2];
    });

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
