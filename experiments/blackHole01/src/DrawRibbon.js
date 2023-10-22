import { Draw, Mesh } from "alfrid";
import { random } from "./utils";
import vs from "shaders/ribbon.vert";
import fs from "shaders/ribbon.frag";

const NUM_SEG = 12;
const NUM_SIDES = 3;
export default class DrawRibbon extends Draw {
  constructor() {
    super();

    const positions = [];
    const uvs = [];
    const indices = [];
    let count = 0;

    for (let j = 0; j < NUM_SIDES; j++) {
      for (let i = 0; i < NUM_SEG; i++) {
        positions.push([i, j, 0]);
        positions.push([i + 1, j, 0]);
        positions.push([i + 1, j + 1, 0]);
        positions.push([i, j + 1, 0]);

        uvs.push([i / NUM_SEG, j / NUM_SIDES]);
        uvs.push([(i + 1) / NUM_SEG, j / NUM_SIDES]);
        uvs.push([(i + 1) / NUM_SEG, (j + 1) / NUM_SIDES]);
        uvs.push([i / NUM_SEG, (j + 1) / NUM_SIDES]);

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
      .bufferIndex(indices);

    // instancing
    let num = 600;
    const uvOffsets = [];
    const extras = [];
    while (num--) {
      uvOffsets.push([random(), random()]);

      let scale = random(0.5, 1.5);
      if (random() < 0.1) {
        scale *= random(1, 2);
      }

      extras.push([random(), random(), scale]);
    }
    mesh.bufferInstance(uvOffsets, "aUVOffset");
    mesh.bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
