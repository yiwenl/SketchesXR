import { GL, Draw, Mesh } from "alfrid";
import Config from "./Config";
import { random } from "./utils";
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

    const { sqrt, sin, cos, PI, pow } = Math;
    const getPos = () => {
      const r = pow(sqrt(random()), 3.0) * 2.5;
      const a = random(PI * 2.0);
      return [r * cos(a), 0, r * sin(a)];
    };

    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        positions.push(getPos());
        uvs.push([
          (i / num) * 2 - 1 + 0.5 / num,
          (j / num) * 2 - 1 + 0.5 / num,
        ]);
        normals.push([random(), random(), random()]);
        datas.push([random(), random(), random()]);
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
