import { Draw, Geom, TweenNumber, GL } from "alfrid";
import { randomGaussian, random, randomFloor } from "randomutils";

import Config from "./Config";
import vs from "shaders/swarm.vert";
import fs from "shaders/swarm.frag";

const _random = (a, b) => {
  let p = randomGaussian();
  return a + p * (b - a);
};

class DrawSwarm extends Draw {
  constructor() {
    super();

    const s = 1;
    const mesh = Geom.plane(s, s, Config.meshDetail, "xz");

    const { numSwarm: num } = Config;

    const posOffsets = [];
    const uvOffsets = [];
    const randoms = [];

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        let u = randomFloor(0, 2) / 2;
        let v = randomFloor(0, 3) / 3;
        posOffsets.push([i / num + 0.5 / num, j / num + 0.5 / num]);
        uvOffsets.push([u, v]);
        randoms.push([randomGaussian(), randomGaussian(), Math.random()]);
      }
    }

    mesh
      .bufferInstance(uvOffsets, "aUV")
      .bufferInstance(randoms, "aRandom")
      .bufferInstance(posOffsets, "aPosOffset");

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uUVScale", [1 / 2, 1 / 3]);

    // states
    const mul = GL.isMobile ? 1.75 : 1.0;
    this._offset = new TweenNumber(0, "linear", 0.01 * mul);
  }

  open() {
    this._offset.value = 1;
  }

  close() {
    this._offset.value = 0;
  }

  draw() {
    this.uniform("uOffset", this._offset.value);
    super.draw();
  }
}

export default DrawSwarm;
