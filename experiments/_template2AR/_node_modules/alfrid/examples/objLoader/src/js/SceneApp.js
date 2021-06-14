import {
  GL,
  Scene,
  Draw,
  DrawAxis,
  DrawDotsPlane,
  parseObj,
  loadObj,
} from "alfrid";

import Assets from "./Assets";
import { mat4 } from "gl-matrix";

// shader
import vs from "shaders/basic.vert";
import fs from "shaders/diffuse.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    const s = 2;
    this.mtxGiant = mat4.create();
    mat4.translate(this.mtxGiant, this.mtxGiant, [-s, -2, 0]);
    this.mtxHead = mat4.create();
    mat4.translate(this.mtxHead, this.mtxHead, [s, 0, 0]);

    // camera
    this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
    this.orbitalControl.radius.value = 15;
    this.resize();
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dDots = new DrawDotsPlane();

    // parse the obj file
    const oModel = Assets.get("model");
    const meshes = parseObj(oModel);

    // load and parse the obj file
    loadObj("assets/obj/giant.obj").then(
      (meshGiant) => {
        this.drawGiant = new Draw().setMesh(meshGiant).useProgram(vs, fs);
      },
      (err) => console.log(err)
    );

    this.draw = new Draw().setMesh(meshes).useProgram(vs, fs);
  }

  render() {
    GL.clear(0, 0, 0, 1);

    this._dAxis.draw();
    this._dDots.draw();

    GL.setModelMatrix(this.mtxHead);
    this.draw.draw();

    if (this.drawGiant) {
      GL.setModelMatrix(this.mtxGiant);
      this.drawGiant.draw();
    }
  }
}

export default SceneApp;
