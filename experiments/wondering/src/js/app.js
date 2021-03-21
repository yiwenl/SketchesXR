import "../scss/global.scss";

import "./utils/Capture";
import { GL } from "alfrid";
import * as ARUtils from "./ARUtils";

import Settings from "./Settings";
import SceneApp from "./SceneApp";
import preload from "./utils/preload";
import addControls from "./debug/addControls";
import Config from "./Config";

let canvas;
let container;

const logError = (e) => {
  console.error(e);
};

let scene;

if (document.body) {
  _init();
} else {
  window.addEventListener("DOMContentLoaded", _init);
}

function _init() {
  preload().then(_init3D, logError);
}

function _init3D() {
  canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  container = document.querySelector(".container");

  container.appendChild(canvas);
  canvas.className = "Main-Canvas";
  const preserveDrawingBuffer =
    process.env.NODE_ENV === "development" && !GL.isMobile;
  const webgl1 = false;
  GL.init(canvas, { webgl1, preserveDrawingBuffer });

  // if (process.env.NODE_ENV === "development" && !ARUtils.isARSupported) {
  //   Settings.init();
  // }

  scene = new SceneApp();

  if (process.env.NODE_ENV === "development" && window.gui) {
    addControls(scene);
  }

  checkAR();
}

function checkAR() {
  ARUtils.checkSupported().then((supported) => {
    // gui.add(ARUtils, "isARSupported").listen();

    if (!supported) {
      document.body.classList.add("no-xr");
    } else {
      initStartButton();
    }
  });
}

function initStartButton() {
  const btnAR = document.body.querySelector(".btnAR");
  btnAR.addEventListener("click", () => {
    ARUtils.init(GL.gl).then((gl) => {
      container.removeChild(canvas);
      scene.present();
    });
  });
}
