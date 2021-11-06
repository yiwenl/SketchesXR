import { Draw, Geom, TweenNumber } from "alfrid";

import Assets from "./Assets";
import Config from "./Config";
import { randomGaussian, random, randomFloor } from "randomutils";
import vs from "shaders/bufferfly.vert";
import fs from "shaders/bufferfly.frag";

const randomGaussianRange = (a, b) => {
  return a + (b - a) * randomGaussian();
};

class DrawButterFlies extends Draw {
  constructor() {
    super();

    const s = 1;
    const mesh = Geom.plane(s, s, 6, "xz");

    const { numParticles: num } = Config;
    const uvOffsets = [];
    const uvOffsets2 = [];
    const randoms = [];
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        uvOffsets.push([i / num, j / num]);
        randoms.push([randomGaussian(), randomGaussian(), random(Math.PI * 2)]);

        let u = randomFloor(0, 2) / 2;
        let v = randomFloor(0, 3) / 3;
        uvOffsets2.push([u, v]);
      }
    }

    mesh.bufferInstance(randoms, "aRandom");
    mesh.bufferInstance(uvOffsets, "aUVOffset");
    mesh.bufferInstance(uvOffsets2, "aUVOffset2");

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uUVScale", [1 / 2, 1 / 3]);

    // states
    this._offset = new TweenNumber(0, "linear", 0.005);
  }

  open() {
    this._offset.value = 1;
  }

  close(mForce = false) {
    if (mForce) {
      this._offset.setTo(0);
    } else {
      this._offset.value = 0;
    }
  }

  draw() {
    if (this._offset.value <= 0.01) {
      return;
    }
    this.uniform("uOffset", this._offset.value);
    super.draw();
  }
}

export default DrawButterFlies;
