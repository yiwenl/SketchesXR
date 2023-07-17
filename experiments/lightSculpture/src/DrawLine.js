import { GL, Mesh, Draw } from "alfrid";

import { random, randomInt } from "./utils";
import { vec3 } from "gl-matrix";

import vs from "shaders/dots.vert";
import fs from "shaders/dots.frag";

export const DENSITY = 20000;
const total = 50000;

export default class DrawLine extends Draw {
  constructor() {
    super();

    const positions = [];
    const data = [];
    const randoms = [];
    const indices = [];

    let num = total;
    while (num--) {
      let r = Math.pow(random(), 3);
      const p = vec3.create();
      vec3.random(p, r);
      positions.push(p);
      data.push([random(), randomInt(num), num]);
      randoms.push([random(), random(), random()]);
      indices.push(num);
    }

    this.mesh = new Mesh(GL.POINTS);
    this.mesh
      .bufferVertex(positions)
      .bufferData(data, "aData", 3)
      .bufferData(randoms, "aRandom", 3)
      .bufferIndex(indices);

    this.setMesh(this.mesh).useProgram(vs, fs).uniform("uTotal", total);

    // instancing
    this.clearLines();
  }

  clearLines() {
    this.pointAs = [];
    this.pointBs = [];
    this.colors = [];
    this.lineData = [];
  }

  addLine(mPointA, mPointB, mColor, mDensity = 1) {
    const l = vec3.length(mPointA, mPointB); // 0.17
    const numPoints = Math.floor(l * DENSITY * mDensity);

    this.pointAs.push(mPointA);
    this.pointBs.push(mPointB);
    this.colors.push(mColor);
    this.lineData.push([numPoints, random(), randomInt(total)]);

    this.mesh
      .bufferInstance(this.pointAs, "aPointA")
      .bufferInstance(this.pointBs, "aPointB")
      .bufferInstance(this.colors, "aColor")
      .bufferInstance(this.lineData, "aLineData");
  }
}
