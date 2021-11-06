import { onStateChange, States } from "./States";

import { GL, Draw, Geom, DrawBall, ShaderLibs, Object3D } from "alfrid";
import { vec3, mat4 } from "gl-matrix";
import Scheduler from "scheduling";

class SceneIntro {
  constructor() {
    this._isActive = true;

    this._drawBall = new DrawBall();
    this._target = vec3.create();
    this._pos = vec3.create();
    this._posPrev = vec3.create();
    this._dir = vec3.create();

    this._containerButterfly = new Object3D();

    const s = 0.2;
    this._drawDebug = new Draw()
      .useProgram(ShaderLibs.basicVert, ShaderLibs.simpleColorFrag)
      .setMesh(Geom.cube(s * 0.1, s * 0.1, s))
      .uniform("uColor", [1, 1, 0])
      .uniform("uOpacity", 1);

    // closing
    onStateChange((o) => {
      if (o === States.LANDED && this._isActive) {
        this.close();
      }
    });
  }

  open() {}

  close() {
    this._isActive = false;
  }

  update(mtxHit) {
    const t = Scheduler.getElapsedTime() * 1.1;
    const r = 1;
    const x = Math.sin(t) * 2 * r;
    const z = Math.cos(t * 3) * r;
    vec3.set(this._target, x, 0, z);
    if (GL.isMobile) {
      vec3.transformMat4(this._target, [0, 0, 0], mtxHit);
      // if (Math.random() > 0.94) console.log(this._target);
    }

    const ease = 0.02;
    vec3.copy(this._posPrev, this._pos);
    this._pos[0] += (this._target[0] - this._pos[0]) * ease;
    this._pos[2] += (this._target[2] - this._pos[2]) * ease;

    // position
    this._containerButterfly.x = this._pos[0];
    this._containerButterfly.y = this._pos[1];
    this._containerButterfly.z = this._pos[2];

    // rotation
    vec3.sub(this._dir, this._pos, this._posPrev);
    if (vec3.length(this._dir) > 0) {
      vec3.normalize(this._dir, this._dir);
      const theta = Math.atan2(this._dir[0], this._dir[2]);
      this._containerButterfly.rotationY = theta;
    } else {
      this._containerButterfly.rotationY = 0;
    }
  }

  render(mtxHit) {
    GL.setModelMatrix(mat4.create());
    const s = 0.05;
    this._drawBall.draw(this._target, [s, s, s], [1, 1, 1]);

    GL.setModelMatrix(this._containerButterfly.matrix);
    // this._drawBall.draw(this._pos, [s, s, s], [0, 1, 0]);
    this._drawDebug.draw();
    return;
  }
}

export default SceneIntro;
