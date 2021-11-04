import { GL, Geom, Draw, Object3D } from "alfrid";

import vs from "shaders/floor.vert";
import fs from "shaders/floor.frag";
class DrawFloor extends Draw {
  constructor() {
    super();

    this._container = new Object3D();
    this._container.y = -4;

    const s = 15;
    this.setMesh(Geom.plane(s, s, 1, "xz")).useProgram(vs, fs);
  }

  draw() {
    GL.setModelMatrix(this._container.matrix);
    super.draw();
  }
}

export default DrawFloor;
