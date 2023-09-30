import { GL, Draw, Mesh } from "alfrid";
import Config from "./Config";
import { mix, random } from "./utils";
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

export default class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;

    const positions = [];
    const uvs = [];
    const normals = [];
    const datas = [];
    const indices = [];

    const { sqrt, sin, cos, PI } = Math;
    const getPos = () => {
      let r = sqrt(random());
      r = mix(1, 2, r);
      const a = random(PI * 2);
      const x = cos(a) * r;
      const y = sin(a) * r;
      const z = random(-1, 1) * 0.25;
      return [x, y, z];
    };

    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        positions.push(getPos());
        uvs.push([
          (i / num) * 2 - 1 + 0.5 / num,
          (j / num) * 2 - 1 + 0.5 / num,
        ]);
        normals.push([random(), random(), random()]);
        datas.push([0, random(), random()]);
        indices.push(i);
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferData(datas, "aData", 3)
      .bufferIndex(indices);

    this.setMesh(mesh).useProgram(vs, fs);
  }
}
