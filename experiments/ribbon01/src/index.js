import "./hash";
import { GL } from "alfrid";
import SceneXR from "./SceneXR";
import Settings from "./Settings";
import { logError } from "./utils";
import preload from "./utils/preload";
import "./utils/Capture";

import "./debug";
import addControls from "./utils/addControl";
import {
  checkSupportedSync,
  checkSupported,
  init,
  initInline,
  onSessionEnd,
  isVRSupported,
} from "./vrutils";

let scene;
let canvas;

async function _init3D() {
  const isDevelopment = process.env.NODE_ENV === "development";
  canvas = document.createElement("canvas");
  canvas.id = "main-canvas";
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  GL.init(canvas, {
    xrCompatible: true,
    alpha: false,
    preserveDrawingBuffer: !GL.isMobile && isDevelopment,
  });

  await checkSupportedSync();
  if (isDevelopment && !isVRSupported) {
    Settings.init();
  }

  scene = new SceneXR();

  if (isDevelopment) {
    addControls(scene);
  }

  checkAR();
}

function checkAR() {
  checkSupported().then((supported) => {
    console.log("VR supported", supported);
    if (!supported) {
      document.body.classList.add("no-xr");
      scene.startDesktop();
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
  initInline(GL.gl);
  const btnAR = document.body.querySelector(".btnAR");

  btnAR.addEventListener("click", () => {
    init(GL.gl).then(() => {
      scene.present();

      onSessionEnd(() => {
        window.location.reload();
      });
    });
  });
}

preload().then(_init3D, logError);
