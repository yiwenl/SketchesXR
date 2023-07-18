import { Geom, Draw } from "alfrid";

import { random } from "./utils";
import vs from "shaders/blocks.vert";
import fs from "shaders/blocks.frag";

export default class DrawBlocks extends Draw {
  constructor() {
    super();

    const s = 1;
    const mesh = Geom.cube(s, s, s);

    const posOffsets = [];
    const extras = [];
    const colors = [];

    let num = 180;
    while (num--) {
      posOffsets.push([random(), random(Math.PI * 2), random(2, 8)]);
      extras.push([random(0.05, 0.3), random(), random()]);
      colors.push([1, random(), random()]);
    }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(extras, "aExtra")
      .bufferInstance(colors, "aColor");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
