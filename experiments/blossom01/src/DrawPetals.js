import { Geom, Draw } from "alfrid";
import Config from "./Config";
import { random } from "./utils";
import { vec3 } from "gl-matrix";
import vs from "shaders/petal.vert";
import fs from "shaders/petal.frag";

export default class DrawPetals extends Draw {
  constructor() {
    super();

    const s = 0.01;
    const ratio = 1;
    const mesh = Geom.plane(s, s * ratio, 1, "xz");

    // instancing
    const { numParticles: num } = Config;
    const extras = [];
    const uvs = [];
    const axis = [];
    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        extras.push([random(0.5, 2), random(Math.PI * 2), random()]);
        uvs.push([(i + 0.5) / num, (j + 0.5) / num]);
        axis.push(vec3.random([], 1));
      }
    }

    mesh
      .bufferInstance(extras, "aExtra")
      .bufferInstance(uvs, "aUV")
      .bufferInstance(axis, "aAxis");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
