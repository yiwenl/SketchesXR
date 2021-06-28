import { GL, Object3D } from "alfrid";

import Config from "./Config";
import DrawTrees from "./DrawTrees";
import { mat4 } from "gl-matrix";

class Subscene extends Object3D {
  constructor() {
    super();

    // matrices
    this._mtx = mat4.create();

    // views
    this._drawTrees = new DrawTrees();
  }

  render(mMatrixHit) {
    mat4.mul(this._mtx, mMatrixHit, this.matrix);
    GL.setModelMatrix(this._mtx);

    const treeColor = Config.treeColor.map((v) => v / 255);
    this._drawTrees.uniform("uTreeColor", treeColor).draw();
  }
}

export default Subscene;
