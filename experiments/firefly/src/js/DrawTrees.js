import { Draw, GL } from "alfrid";

import Assets from "./Assets";
import Config from "./Config";
import { random } from "randomutils";
import vs from "shaders/trees.vert";
import fs from "shaders/trees.frag";
// import fs from "shaders/depth.frag";

class DrawTrees extends Draw {
  constructor() {
    super();

    const numTrees = GL.isMobile ? 4 : 10;
    const meshes = [];
    for (let j = 0; j < 4; j++) {
      const mesh = Assets.get(`tree0${j + 1}`);
      const posOffsets = [];
      const extras = [];
      const { envSize } = Config;
      const r = envSize * 0.6;

      for (let i = 0; i < numTrees; i++) {
        posOffsets.push([random(-r, r), 0, random(-r, r)]);
        extras.push([random(1), random(1), random(1)]);
      }

      mesh
        .bufferInstance(posOffsets, "aPosOffset")
        .bufferInstance(extras, "aExtra");

      meshes.push(mesh);
    }

    const getAsset = (mID) => {
      const t = Assets.get(mID);
      t.wrapS = t.wrapT = GL.REPEAT;
      return t;
    };

    const bgColor = [19, 23, 47].map((v) => (v / 255) * 0.5);

    this.setMesh(meshes)
      .useProgram(vs, fs)
      .bindTexture("uColorMap", getAsset("tree_color"), 0)
      .bindTexture("uNormalMap", getAsset("tree_normal"), 1)
      .bindTexture("uAoMap", getAsset("tree_ao"), 2)
      .uniform("uBgColor", bgColor);
  }
}

export default DrawTrees;
