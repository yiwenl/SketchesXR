import { Draw, Geom } from "alfrid";

import vs from "shaders/texts.vert";
import fs from "shaders/texts.frag";

import { randomGaussian, random, randomFloor } from "randomutils";

const numTexts = 500;

class DrawTexts extends Draw {
  constructor(mRadius) {
    super();

    const s = 0.02;
    const mesh = Geom.plane(s, s, 1);

    const posOffsets = [];
    const uvOffsets = [];
    const extras = [];
    const scales = [];

    const getPos = () => {
      const r = randomGaussian() * 0.2 + mRadius;
      const a = random(Math.PI * 2);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;

      return [x, Math.random() * 2, z];
    };

    for (let i = 0; i < numTexts; i++) {
      posOffsets.push(getPos());
      // uv
      const charIndex = randomFloor(20);
      const u = (charIndex % 5) / 5;
      const v = (4 - Math.floor(charIndex / 5)) / 5;

      uvOffsets.push([u, v]);
      extras.push([randomGaussian(), randomGaussian(), random(1)]);
      scales.push([random(1, 2), random(1, 2)]);
    }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(uvOffsets, "aUVOffset")
      .bufferInstance(scales, "aScale")
      .bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawTexts;
