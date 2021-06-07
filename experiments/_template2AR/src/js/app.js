import "../scss/global.scss";

import "./utils/Capture";
import { GL } from "alfrid";
import * as ARUtils from "./ARUtils";

import Settings from "./Settings";
import SceneApp from "./SceneApp";
import preload from "./utils/preload";
import { logError } from "./utils";
import addControls from "./debug/addControls";

let canvas;
let container;

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

  if (process.env.NODE_ENV === "development" && !ARUtils.isARSupported) {
    Settings.init();
  }

  scene = new SceneApp();

  if (process.env.NODE_ENV === "development") {
    addControls(scene);
  }

  checkAR();
}

function checkAR() {
  ARUtils.checkSupported().then((supported) => {
    if (!supported) {
      document.body.classList.add("no-xr");
    } else {
      document.body.classList.add("has-xr");
      initStartButton();
    }
  });

  setTimeout(() => {
    document.body.classList.add("hide-messages");
  }, 5000);
}

function initStartButton() {
  const btnAR = document.body.querySelector(".btnAR");
  btnAR.addEventListener("click", () => {
    ARUtils.init(GL.gl).then((gl) => {
      container.removeChild(canvas);
      scene.present();

      ARUtils.onSessionEnd(() => {
        console.log("session end");
        window.location.reload();
      });
    });
  });
}
