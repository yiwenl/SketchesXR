import { Geom, Draw } from "alfrid";

import vs from "shaders/ring.vert";
import fs from "shaders/ring.frag";
import { random } from "randomutils";

class DrawRing extends Draw {
  constructor() {
    super();

    const t = 2;
    const s = 0.1;
    const mesh = Geom.cube(s, (s * 0.1) / t, s);

    const num = 120 * t;
    const numLayers = 10;
    const posOffsets = [];
    const scales = [];
    const extras = [];
    const r = 0.2;
    for (let j = 0; j < numLayers; j++) {
      const offset = random(-r, r);
      const sx = random(0.25, 1);
      const sy = random(1, 2);
      const rotSpeed = random(1, 4);
      const rotY = (j / numLayers) * Math.PI * 2;
      const rnd = [random(1), random(1), random(1)];
      for (let i = 0; i < num; i++) {
        posOffsets.push([i, rotSpeed, offset]);
        scales.push([sx, sy, rotY]);
        // extras.push(rnd);
        extras.push([rnd[0], rnd[0], random(1)]);
      }
    }

    mesh
      .bufferInstance(posOffsets, "aPosOffset")
      .bufferInstance(scales, "aScale")
      .bufferInstance(extras, "aExtra");

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uNum", num)
      .uniform("uRadius", 0.125);
  }
}

export default DrawRing;
