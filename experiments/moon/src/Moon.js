import { GL, Geom, Draw } from "alfrid";
import { random, smoothstep } from "./utils";
import * as CANNON from "cannon";
import { mat4 } from "gl-matrix";
import Assets from "./Assets";
import vs from "shaders/moon.vert";
import fs from "shaders/moon.frag";

import vsFloor from "shaders/floor.vert";
import fsFloor from "shaders/floor.frag";

let draw, drawFloor;
let mtxRot;

const getPos = ({ x, y, z }) => {
  return [x, y, z];
};

const getQuat = ({ x, y, z, w }) => {
  return [x, y, z, w];
};

export default class Moon {
  constructor(mPosition, mFloorLevel) {
    this.floorLevel = mFloorLevel;

    if (!draw) {
      draw = new Draw()
        .setMesh(Assets.get("moon"))
        .useProgram(vs, fs)
        .bindTexture("texture", Assets.get("color"), 0);

      const s = 1;
      drawFloor = new Draw()
        .setMesh(Geom.plane(s, s, 1, "xz"))
        .useProgram(vsFloor, fsFloor);
    }

    const s = random(0.4, 0.2);

    this.body = new CANNON.Body({
      mass: 2, // kg
      position: new CANNON.Vec3(mPosition[0], mPosition[1], mPosition[2]), // m
      shape: new CANNON.Sphere(s),
    });

    const axis = new CANNON.Vec3(random(-1, 1), random(-1, 1), random(-1, 1));
    axis.normalize();
    const angle = random(Math.PI * 2);
    this.body.quaternion.setFromAxisAngle(axis, angle);

    // matrix
    this.mtx = mat4.create();
    if (!mtxRot) {
      mtxRot = mat4.create();
    }
  }

  render() {
    const { position, quaternion } = this.body;
    mat4.identity(this.mtx);
    mat4.translate(this.mtx, this.mtx, getPos(position));
    mat4.fromQuat(mtxRot, getQuat(quaternion));
    mat4.mul(this.mtx, this.mtx, mtxRot);

    GL.setModelMatrix(this.mtx);

    const { radius } = this.body.shapes[0];
    draw.uniform("uRadius", radius).draw();
  }

  renderFloor() {
    const { position } = this.body;
    mat4.identity(this.mtx);
    const pos = getPos(position);
    let glow = smoothstep(this.floorLevel + 1.0, this.floorLevel, pos[1]);
    glow = Math.pow(glow, 2.0);
    pos[1] = this.floorLevel;
    mat4.translate(this.mtx, this.mtx, pos);
    const { radius } = this.body.shapes[0];
    GL.setModelMatrix(this.mtx);

    drawFloor.uniform("uRadius", radius).uniform("uGlow", glow).draw();
  }
}
