import "./hash";
import { GL } from "alfrid";
import SceneApp from "./SceneApp";
import { logError } from "./utils";
import preload from "./utils/preload";
import "./utils/Capture";
import addControls from "./utils/addControl";

import { checkARSupport, initXRSession, onSessionEnd } from "./xrutils";

let scene;
let canvas;
const isDevelopment = process.env.NODE_ENV === "development";

async function checkAR() {
  const supported = await checkARSupport();
  document.body.classList.add(supported ? "has-xr" : "no-xr");
  if (!supported) return;

  const btnAR = document.body.querySelector(".btnAR");
  btnAR.addEventListener("click", async () => {
    await initXRSession(GL.gl);

    document.body.removeChild(canvas);
    scene.present();

    onSessionEnd(() => {
      console.log("Session end");
      window.location.reload();
    });
  });
}

function _init3D() {
  canvas = document.createElement("canvas");
  canvas.id = "main-canvas";
  document.body.appendChild(canvas);

  GL.init(canvas, {
    alpha: false,
    preserveDrawingBuffer: !GL.isMobile && isDevelopment,
  });

  scene = new SceneApp();

  if (isDevelopment) {
    addControls(scene);
  }

  checkAR();
}

preload().then(_init3D, logError);
