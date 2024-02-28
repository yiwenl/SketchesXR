import "./hash";
import { GL } from "alfrid";
import SceneApp from "./SceneApp";
// import Settings from "./Settings";
import { logError } from "./utils";
import preload from "./utils/preload";
import "./utils/Capture";

import "./debug";
import addControls from "./utils/addControl";
import * as ARUtils from "./ARUtils";

let scene;
let canvas;

function _init3D() {
  const isDevelopment = process.env.NODE_ENV === "development";
  // if (isDevelopment) {
  //   Settings.init();
  // }
  canvas = document.createElement("canvas");
  canvas.id = "main-canvas";
  document.body.appendChild(canvas);

  GL.init(canvas, {
    alpha: false,
    preserveDrawingBuffer: !GL.isMobile && isDevelopment,
  });

  // if (isDevelopment && !ARUtils.isARSupported) {
  //   Settings.init();
  // }

  scene = new SceneApp();

  if (isDevelopment) {
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
      document.body.removeChild(canvas);
      scene.present();

      ARUtils.onSessionEnd(() => {
        console.log("session end");
        window.location.reload();
      });
    });
  });
}

preload().then(_init3D, logError);
