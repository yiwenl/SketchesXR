import { Geom, Draw } from "alfrid";

import { random } from "./utils";

import vs from "shaders/cubes.vert";
import fs from "shaders/cubes.frag";

export default class DrawCubes extends Draw {
  constructor() {
    super();

    const mesh = Geom.cube(1, 1, 1);

    const posOffsets = [];
    const extras = [];

    let num = 1000;
    const r = 0.4;
    while (num--) {
      posOffsets.push([random(-r, r), random(-r, r), random(-r, r)]);
      extras.push([random(0, 1), random(0, 1), random(0, 1)]);
    }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(extras, "aExtra");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
