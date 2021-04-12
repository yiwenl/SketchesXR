import {
  GL,
  OrbitalControl,
  Draw,
  DrawAxis,
  DrawDotsPlane,
  CameraPerspective,
  Geom,
} from "alfrid";
import Config from "./Config";
import Assets from "./Assets";
import VRUtils from "./VRUtils";
import VRControls from "./VRControls";
import { resize } from "./utils";
import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";
import { random } from "randomutils";

// draw calls
import DrawTrees from "./DrawTrees";

import vs from "shaders/basic.vert";
import vsController from "shaders/controller.vert";
import fs from "shaders/diffuse.frag";

class SceneApp {
  constructor() {
    console.log("WebGL2 ? ", GL.webgl2);
    this.camera = new CameraPerspective(Math.PI / 2, GL.aspectRatio, 0.1, 100);
    this.camera.lookAt([0, 0, -1], [0, 0, 0]);
    this.mtx = mat4.create();

    this._initTextures();
    this._initViews();
    this.resize();

    if (VRUtils.isSupported) {
      Scheduler.setRequestAnimationFrameSource(VRUtils.session);
      VRUtils.on("onUpdate", (views) => this.update(views));
      VRUtils.on("onRender", (views) => this._loopVR(views));
    } else {
      mat4.translate(this.mtx, this.mtx, [0, -1.8, 0]);
      this.orbitalControl = new OrbitalControl(this.camera, window, 1);
      Scheduler.addEF(() => this._loop());
    }
  }

  _initTextures() {}

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dDots = new DrawDotsPlane();

    // draw calls
    // this._drawTrees = new DrawTrees();

    const mesh = Assets.get("tree");

    const numTrees = 200;
    const positions = [];
    const extras = [];
    const r = 30;
    for (let i = 0; i < numTrees; i++) {
      positions.push([random(-r, r), 0, random(-r, r)]);
      extras.push([random(1), random(1), random(1)]);
    }

    mesh.bufferInstance(positions, "aPosOffset");
    mesh.bufferInstance(extras, "aExtra");

    this._dTrees = new Draw().setMesh(mesh).useProgram(vs, fs);

    this._controllers = {
      left: new Draw().setMesh(Assets.get("left")).useProgram(vsController, fs),
      right: new Draw()
        .setMesh(Assets.get("right"))
        .useProgram(vsController, fs),
    };
  }

  _clearBackground() {
    const g = 0;
    GL.clear(g, g, g, 1);
  }

  _loop() {
    this.update();

    this._clearBackground();
    GL.setMatrices(this.camera);
    GL.setModelMatrix(this.mtx);
    this.render();
  }

  _loopVR(mViews) {
    this._clearBackground();
    mViews.forEach(({ viewport, viewMatrix, projectionMatrix }) => {
      GL.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      this.camera.setFromViewProjection(viewMatrix, projectionMatrix);
      GL.setMatrices(this.camera);
      this.render();
    });
  }

  update(mViews = []) {}

  render() {
    this._dAxis.draw();
    this._dDots.draw();

    this._dTrees.draw();

    // this._controllers.forEach((c) => c.draw());

    for (let s in VRUtils.controllers) {
      const c = VRUtils.controllers[s];
      GL.setModelMatrix(c.matrix);

      // console.log(c.matrix);
      this._controllers[s].draw();
    }
    GL.setModelMatrix(mat4.create());

    // this._drawTrees.draw();
  }

  resize() {
    resize();
    this.camera.setAspectRatio(GL.aspectRatio);
  }
}

export default SceneApp;
