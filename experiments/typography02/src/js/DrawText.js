import { Draw, Mesh, Object3D, GL } from "alfrid";

import Assets from "./Assets";
import vs from "shaders/text.vert";
import fs from "shaders/text.frag";
import { vec3 } from "gl-matrix";
import { randomFloor, random } from "randomutils";

class DrawText extends Draw {
  constructor() {
    super();

    this.container = new Object3D();

    const numSeg = 24 * 2;
    const positions = [];
    const uvs = [];
    const uvOffsets = [];
    const indices = [];
    let count = 0;

    for (let j = 0; j < 4; j++) {
      const rx = randomFloor(32) / 32;
      const ry = randomFloor(32) / 32;

      for (let i = 0; i < numSeg; i++) {
        positions.push([i, -1, j / 4]);
        positions.push([i + 1, -1, j / 4]);
        positions.push([i + 1, 1, j / 4]);
        positions.push([i, 1, j / 4]);

        uvs.push([i / numSeg, 0]);
        uvs.push([(i + 1) / numSeg, 0]);
        uvs.push([(i + 1) / numSeg, 1]);
        uvs.push([i / numSeg, 1]);

        uvOffsets.push([rx, ry]);
        uvOffsets.push([rx, ry]);
        uvOffsets.push([rx, ry]);
        uvOffsets.push([rx, ry]);

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
      .bufferData(uvOffsets, "aUVOffset", 2)
      .bufferIndex(indices);

    // instancing
    const posOffsets = [];
    const extras = [];

    const numRings = 5;
    const r = 0.5;

    const rings = [{ pos: [0, 0, 0], radius: 0.5 }];

    let tries = 0;
    let pos, radius;

    const checkHit = (pos, radius) => {
      let d;
      let hit = false;
      rings.forEach((ring) => {
        d = vec3.distance(pos, ring.pos);
        if (d < (ring.radius + radius) * 0.25) hit = true;
      });

      if (!hit) {
        rings.push({
          pos,
          radius,
        });
      }
    };
    do {
      pos = [random(-r, r), random(0, r), random(-r, r)];
      radius = random(0.5, 1.5);
      checkHit(pos, radius);
    } while (rings.length < numRings && tries++ < 1000);

    this.rings = rings;

    rings.forEach(({ pos, radius }) => {
      posOffsets.push(pos);
      extras.push([radius, random(1), random(1)]);
    });

    // posOffsets.push([0, 0, 0]);
    // extras.push([0.5, 0, 0]);
    // for (let i = 0; i < numRings; i++) {
    //   posOffsets.push([random(-r, r), random(0, r), random(-r, r)]);
    //   extras.push([random(0.5, 1.5), random(1), random(1)]);
    // }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(extras, "aExtra");

    const texture = Assets.get("texts");
    texture.wrapS = texture.wrapT = GL.REPEAT;
    texture.minFilter = texture.magFilter = GL.LINEAR;
    this.setMesh(mesh)
      .useProgram(vs, fs)
      .bindTexture("texture", texture, 0);
  }
}

export default DrawText;
