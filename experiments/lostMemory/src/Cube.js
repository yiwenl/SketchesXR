import { GL, EaseNumber } from "alfrid";
import DrawCube from "./DrawCube";
import { random } from "./utils";
import * as CANNON from "cannon";
import { mat4 } from "gl-matrix";
import Assets from "./Assets";

let drawCube;
let mtxRot;
let mtxInit;

const getPos = ({ x, y, z }) => {
  return [x, y, z];
};

const getQuat = ({ x, y, z, w }) => {
  return [x, y, z, w];
};

export default class Cube {
  constructor(mPosition, mMtxCamera, mCamTexture) {
    this.mtxCam = mMtxCamera;
    this.texture = mCamTexture;
    this.posOrg = mPosition;
    if (!drawCube) {
      drawCube = new DrawCube();
    }

    if (!mtxRot) {
      mtxRot = mat4.create();
      mtxInit = mat4.create();
    }

    this.mtx = mat4.create();

    const s = random(0.1, 0.2);

    this.body = new CANNON.Body({
      mass: 5, // kg
      position: new CANNON.Vec3(mPosition[0], mPosition[1], mPosition[2]), // m
      shape: new CANNON.Box(new CANNON.Vec3(s, s, s)),
    });

    const axis = new CANNON.Vec3(random(-1, 1), random(-1, 1), random(-1, 1));
    axis.normalize();
    const angle = random(Math.PI * 2);
    this.body.quaternion.setFromAxisAngle(axis, angle);

    const { position, quaternion } = this.body;
    this.mtxInit = mat4.create();
    mat4.translate(this.mtxInit, this.mtxInit, getPos(position));
    mat4.fromQuat(mtxRot, getQuat(quaternion));
    mat4.mul(this.mtxInit, this.mtxInit, mtxRot);

    this._textureLookup = Assets.get("lookup");

    this._shadowStrength = new EaseNumber(0, 0.05);
    this._shadowStrength.value = 1;
  }

  renderFloor(mFloorLevel) {
    const { position, quaternion } = this.body;
    mat4.identity(this.mtx);
    mat4.translate(this.mtx, this.mtx, getPos(position));
    mat4.fromQuat(mtxRot, getQuat(quaternion));
    mat4.mul(this.mtx, this.mtx, mtxRot);

    const { halfExtents } = this.body.shapes[0];
    const size = halfExtents.x * 2;

    GL.setModelMatrix(this.mtx);

    drawCube
      .uniform("uBackSide", 0)
      .uniform("uSize", size)
      .uniform("uCameraMatrix", this.mtxCam)
      .uniform("uModelInitMatrix", this.mtxInit)
      .uniform("uShadow", 1)
      .uniform("uLevel", mFloorLevel)
      .bindTexture("uMap", this.texture, 0)
      .bindTexture("uLookupMap", this._textureLookup, 1)
      .uniform("uShadowStrength", this._shadowStrength.value)
      .draw();
  }

  render(mFloorLevel) {
    const { position, quaternion } = this.body;
    mat4.identity(this.mtx);
    mat4.translate(this.mtx, this.mtx, getPos(position));
    mat4.fromQuat(mtxRot, getQuat(quaternion));
    mat4.mul(this.mtx, this.mtx, mtxRot);

    const { halfExtents } = this.body.shapes[0];
    const size = halfExtents.x * 2;

    GL.setModelMatrix(this.mtx);

    drawCube
      .uniform("uBackSide", 0)
      .uniform("uSize", size)
      .uniform("uCameraMatrix", this.mtxCam)
      .uniform("uModelInitMatrix", this.mtxInit)
      .uniform("uShadow", 0)
      .uniform("uLevel", mFloorLevel)
      .bindTexture("uMap", this.texture, 0)
      .bindTexture("uLookupMap", this._textureLookup, 1)
      .draw();

    GL.cullFace(GL.FRONT);
    GL.setModelMatrix(this.mtxInit);
    drawCube.uniform("uBackSide", 1).draw();

    GL.cullFace(GL.BACK);
  }
}
