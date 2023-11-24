// these are the variables you can use as inputs to your algorithms
// console.log(fxhash); // the 64 chars hex number fed to your algorithm
// console.log(fxrand()); // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// import "./test01";

import "./hash";
import { GL } from "alfrid";
import SceneApp from "./SceneApp";
import Settings from "./Settings";
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
  canvas = document.createElement("canvas");
  canvas.id = "main-canvas";
  document.body.appendChild(canvas);
  console.log("GL.isMobile", GL.isMobile);

  GL.init(canvas, {
    alpha: false,
    preserveDrawingBuffer: !GL.isMobile && isDevelopment,
  });

  if (!GL.webgl2) {
    document.body.classList.add("no-webgl2");
    return;
  }

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
