import "../scss/global.scss";

import {
  GL,
  GLTool,
  Geom,
  CameraPerspective,
  Draw,
  DrawAxis,
  DrawDotsPlane,
  DrawCopy,
  DrawBall,
  DrawLine,
  DrawCamera,
  OrbitalControl,
} from "../../src/alfrid";
import { vec3, mat4 } from "gl-matrix";
import Scheduler from "scheduling";

import vs from "../shaders/test.vert";
import fs from "../shaders/test.frag";

const canvas1 = document.createElement("canvas");
const canvas2 = document.createElement("canvas");
document.body.appendChild(canvas1);
document.body.appendChild(canvas2);

const webgl1 = false;
GL.init(canvas1, { webgl1 });
GL.setSize(window.innerWidth / 2, window.innerHeight);

const GL2 = new GLTool();
const ctx2 = canvas2.getContext("webgl");
GL2.init(ctx2);
GL2.setSize(window.innerWidth / 2, window.innerHeight);

const contexts = [GL, GL2];
// const contexts = [GL];
console.log(GL);

contexts.forEach((_GL) => _init(_GL));

function _init(mGL) {
  // helpers
  const drawAxis = new DrawAxis(mGL);
  const drawDotsPlane = new DrawDotsPlane(mGL);
  const drawCopy = new DrawCopy(mGL);
  const drawBall = new DrawBall(mGL);
  const drawLine = new DrawLine(mGL);
  const drawCamera = new DrawCamera(mGL);

  // camera
  const camera = new CameraPerspective(Math.PI / 2, GL.getAspectRatio(), 1, 50);
  const camera1 = new CameraPerspective(Math.PI / 2, GL.getAspectRatio(), 1, 5);
  const control = new OrbitalControl(camera, window, 5);
  control.rx.value = control.ry.value = 0.3;
  camera1.lookAt([2, 2, 2], [0, 0, 0]);

  // plane
  const s = 0.05;
  const mesh = Geom.plane(s, s, 1);
  const posOffsets = [];
  const num = 100;
  let i = num;
  while (i--) {
    const v = vec3.create();
    vec3.random(v, 3);
    posOffsets.push(v);
  }
  // console.table(posOffsets);
  mesh.bufferInstance(posOffsets, "aPosOffset");
  const draw = new Draw(mGL).setMesh(mesh).useProgram(vs, fs);

  Scheduler.addEF(() => render(mGL));

  // render();
  function render(mGL) {
    mGL.viewport(0, 0, mGL.width, mGL.height);
    const g = 0.1;
    if (mGL.webgl2) {
      mGL.clear(g, 0, 0, 1);
    } else {
      mGL.clear(0, g, 0, 1);
    }

    mGL.setMatrices(camera);
    drawAxis.draw();
    drawDotsPlane.draw();
    // draw.draw();

    const s = 0.1;
    drawCamera.draw(camera1, [1, 0.5, 0]);
    drawBall.draw([2, 2, 2], [s, s, s], [1, 0, 0]);
  }

  // resize
  window.addEventListener("resize", resize);
  resize();

  function resize() {
    mGL.setSize(window.innerWidth / 2, window.innerHeight);
    camera.setAspectRatio(mGL.getAspectRatio());
  }
}
