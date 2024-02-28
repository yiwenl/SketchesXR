import { GL, Draw, Mesh } from "alfrid";
import Config from "./Config";
import { random } from "./utils";
import { vec3 } from "gl-matrix";
import Assets from "./Assets";
import vs from "shaders/save.vert";
import fs from "shaders/save.frag";

export default class DrawSave extends Draw {
  constructor() {
    super();

    const { numParticles: num } = Config;

    const map = Assets.get("rippling");
    const { width, height } = map;
    const ratio = width / height;

    const positions = [];
    const uvs = [];
    const normals = [];
    const datas = [];
    const spawn = [];
    const indices = [];

    const rx = 1;
    const rz = rx / ratio;

    const getPos = () => {
      const x = random(-rx, rx);
      const y = random(0.01);
      const z = random(-rz, rz);
      return [x, y, z];
    };

    let count = 0;
    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        positions.push(getPos());
        uvs.push([
          (i / num) * 2 - 1 + 0.5 / num,
          (j / num) * 2 - 1 + 0.5 / num,
        ]);
        normals.push([random(), random(), random()]);
        datas.push([0, random(), random()]);
        spawn.push([random(), random(), random()]);
        indices.push(count);
      }
    }

    const mesh = new Mesh(GL.POINTS)
      .bufferVertex(positions)
      .bufferTexCoord(uvs)
      .bufferNormal(normals)
      .bufferData(datas, "aData", 3)
      // .bufferData(spawn, "aSpawn", 3)
      .bufferIndex(indices);

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uBound", [rx, rz])
      .bindTexture("uMap", map, 0);
  }
}
