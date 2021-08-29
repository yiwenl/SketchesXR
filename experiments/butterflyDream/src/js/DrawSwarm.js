import { Draw, Geom, TweenNumber } from "alfrid";
import { randomGaussian, random, randomFloor } from "randomutils";
import vs from "shaders/swarm.vert";
import fs from "shaders/swarm.frag";

const _random = (a, b) => {
  // return a + randomGaussian() * (b - a);
  let p = randomGaussian();
  // p = Math.pow(p, 2.0);
  // const p = Math.sqrt(Math.random());
  return a + p * (b - a);
};

class DrawSwarm extends Draw {
  constructor() {
    super();

    const s = 1;
    const mesh = Geom.plane(s, s, 4, "xz");
    const maxHeight = 16;

    const num = 3000;
    const posOffsets = [];
    const uvOffsets = [];
    const randoms = [];

    const getPos = () => {
      const r = _random(5, 10);
      const y = random(0, maxHeight);
      const a = random(0, Math.PI * 2);
      return [Math.cos(a) * r, y, Math.sin(a) * r];
    };

    let i = num;
    while (i--) {
      let u = randomFloor(0, 2) / 2;
      let v = randomFloor(0, 3) / 3;
      posOffsets.push(getPos());
      uvOffsets.push([u, v]);
      randoms.push([randomGaussian(), randomGaussian(), randomGaussian()]);
    }

    mesh
      .bufferInstance(uvOffsets, "aUV")
      .bufferInstance(randoms, "aRandom")
      .bufferInstance(posOffsets, "aPosOffset");

    this.setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uMaxHeight", maxHeight)
      .uniform("uUVScale", [1 / 2, 1 / 3]);

    // states
    this._offset = new TweenNumber(0, "linear", 0.005);
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
