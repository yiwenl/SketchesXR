import { Draw, GL, Mesh, Object3D } from "alfrid";

import vs from "shaders/rings.vert";
import fs from "shaders/rings.frag";
import { random, randomFloor } from "randomutils";

class DrawRings extends Draw {
  constructor() {
    super();

    this.container = new Object3D();

    const scale = 1;
    const uvScale = 2;
    const num = 12 * 3;
    const positions = [];
    const uvs = [];
    const indices = [];
    let count = 0;

    for (let i = 0; i < num; i++) {
      positions.push([i, -1, 0]);
      positions.push([i + 1, -1, 0]);
      positions.push([i + 1, 1, 0]);
      positions.push([i, 1, 0]);

      uvs.push([(i / num) * scale * uvScale, 0]);
      uvs.push([((i + 1) / num) * scale * uvScale, 0]);
      uvs.push([((i + 1) / num) * scale * uvScale, 1 / num]);
      uvs.push([(i / num) * scale * uvScale, 1 / num]);

      indices.push(count * 4 + 0);
      indices.push(count * 4 + 1);
      indices.push(count * 4 + 2);
      indices.push(count * 4 + 0);
      indices.push(count * 4 + 2);
      indices.push(count * 4 + 3);

      count++;
    }

    const mesh = new Mesh();
    mesh
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferIndex(indices);

    // instancing
    const ringSizeRange = [1.0, 3];
    const numRings = 150;
    const posOffsets = [];
    const extras = [];
    const uvOffset = [];

    for (let i = 0; i < numRings; i++) {
      let ringWidth = random(0.07, 0.2) / scale;
      if (Math.random() > 0.6) {
        ringWidth = 0.02;
      }

      const t = Math.pow(Math.random(), 2);
      const ringSize =
        ringSizeRange[0] + t * (ringSizeRange[1] - ringSizeRange[0]);

      posOffsets.push([ringSize, ringWidth, random(Math.PI * 2.0)]);
      uvOffset.push([random(1), random(1)]);

      extras.push([randomFloor(32) / 32, randomFloor(32) / 32, random(0.5, 1)]);
    }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(extras, "aExtra")
      .bufferInstance(uvOffset, "aUVOffset");

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uRingSizeRange", ringSizeRange)
      .uniform("uNumSeg", num);
  }

  draw() {
    // GL.setModelMatrix(this.container.matrix);
    this.uniform("uLocalMatrix", this.container.matrix);
    super.draw();
  }
}

export default DrawRings;
