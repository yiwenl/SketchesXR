import { GL, Draw, Mesh } from "alfrid";
import { random } from "./utils";
import { vec3 } from "gl-matrix";
import Config from "./Config";

import vs from "shaders/rings.vert";
import fs from "shaders/rings.frag";

export default class DrawRing extends Draw {
  constructor(mRadiusScale = 1, mTranslate = [0, 0, 0]) {
    super();
    console.log(mRadiusScale, mTranslate);

    let num = 100000;

    const positions = [];
    const data = [];
    const randoms = [];
    const indices = [];
    const { PI } = Math;

    while (num--) {
      let r = Math.pow(random(), 3);
      const p = vec3.create();
      vec3.random(p, r);
      positions.push(p);

      data.push([random(PI * 2), random(), random()]);
      randoms.push([random(), random(), random()]);
      indices.push(num);
    }

    // instancing
    const posOffset = [];
    const { numRings } = Config;
    for (let i = 0; i < numRings; i++) {
      const p = (i + 0.5) / numRings;
      posOffset.push([(p - 0.5) * 2, p, random()]);
    }

    this.mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferData(data, "aData")
      .bufferData(randoms, "aRandom")
      .bufferIndex(indices)
      .bufferInstance(posOffset, "aPosOffset");

    this.setMesh(this.mesh)
      .useProgram(vs, fs)
      .uniform("uRadiusScale", mRadiusScale)
      .uniform("uTranslate", mTranslate)
      .uniform("uPointScale", GL.isMobile ? 5.0 : 1.0);
  }
}
