import "../scss/global.scss";

import "./utils/Capture";
import { GL } from "alfrid";

import Settings from "./Settings";
import SceneApp from "./SceneApp";
import addControls from "./debug/addControls";

let scene;

if (document.body) {
  _init();
} else {
  window.addEventListener("DOMContentLoaded", _init);
}

function _init() {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.appendChild(canvas);
  canvas.className = "Main-Canvas";
  const preserveDrawingBuffer = process.env.NODE_ENV === "development";
  GL.init(canvas, { preserveDrawingBuffer });

  if (process.env.NODE_ENV === "development") {
    Settings.init();
  }

  scene = new SceneApp();

  if (process.env.NODE_ENV === "development") {
    addControls(scene);
  }
}
