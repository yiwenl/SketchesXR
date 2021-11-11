import { onStateChange, States } from "./States";

import { GL, Draw, Geom, DrawBall, TweenNumber, Object3D } from "alfrid";
import { vec3, mat4 } from "gl-matrix";
import { randomFloor } from "randomutils";
import Scheduler from "scheduling";
import Config from "./Config";
import Assets from "./Assets";

// shaders
import vs from "shaders/butterflySingle.vert";
import fs from "shaders/butterflySingle.frag";

class SceneIntro {
  constructor() {
    this._offset = new TweenNumber(0, "circInOut", 0.01);

    this._drawBall = new DrawBall();
    this._target = vec3.create();
    this._pos = vec3.create();
    this._posPrev = vec3.create();
    this._dir = vec3.create();

    this._containerButterfly = new Object3D();

    // butterfly
    let s = 0.1;
    let u = randomFloor(0, 2) / 2;
    let v = randomFloor(0, 3) / 3;

    const mesh = Geom.plane(s, s, 40, "xz");
    this._drawButterfly = new Draw()
      .setMesh(mesh)
      .useProgram(vs, fs)
      .uniform("uRandom", [Math.random(), Math.random(), Math.random()])
      .uniform("uUVScale", [1 / 2, 1 / 3])
      .uniform("uUVOffset", [u, v])
      .bindTexture("uMap", Assets.get(`butterfly`), 0);

    // closing
    onStateChange((o) => {
      if (o === States.INTRO) {
        this.open();
      } else if (o === States.LANDED) {
        this.close();
      }
    });
  }

  open() {
    this._offset.value = 1;
  }

  close() {
    this._offset.value = 0;
  }

  update(mtxHit) {
    const t = Scheduler.getElapsedTime() * 1.1;
    const r = 0.5;
    const x = Math.sin(t) * 2 * r;
    const z = Math.cos(t * 3) * r;
    vec3.set(this._target, x, 0, z);
    if (GL.isMobile) {
      vec3.transformMat4(this._target, [0, 0, 0], mtxHit);
    }

    const ease = 0.02;
    vec3.copy(this._posPrev, this._pos);
    this._pos[0] += (this._target[0] - this._pos[0]) * ease;
    this._pos[2] += (this._target[2] - this._pos[2]) * ease;

    // position
    this._containerButterfly.x = this._pos[0];
    this._containerButterfly.y = this._pos[1] - 0.2;
    this._containerButterfly.z = this._pos[2];

    // rotation
    vec3.sub(this._dir, this._pos, this._posPrev);
    if (vec3.length(this._dir) > 0) {
      vec3.normalize(this._dir, this._dir);
      const theta = Math.atan2(this._dir[0], this._dir[2]) + Math.PI;
      this._containerButterfly.rotationY = theta;
    } else {
      this._containerButterfly.rotationY = 0;
    }
  }

  render() {
    GL.setModelMatrix(mat4.create());

    GL.setModelMatrix(this._containerButterfly.matrix);
    GL.disable(GL.CULL_FACE);
    this._drawButterfly
      .bindTexture("uColorMap", Assets.get(`00${Config.colorIndex}`), 1)
      .uniform("uTime", Scheduler.getElapsedTime())
      .uniform("uOffset", this._offset.value)
      .draw();
    GL.enable(GL.CULL_FACE);
    return;
  }
}

export default SceneIntro;
