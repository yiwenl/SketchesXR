import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  Scene,
  CameraPerspective,
} from "alfrid";
import { saveImage, getDateString } from "./utils";
import Config from "./Config";

import DrawCubes from "./DrawCubes";

import { io } from "socket.io-client";

let hasSaved = false;
let canSave = false;
let hasFovSet = false;

class SceneApp extends Scene {
  constructor() {
    super();

    setTimeout(() => {
      canSave = true;
    }, 500);
  }

  _init() {
    // lock camera controls
    // this.orbitalControl.lock();

    this.cameraAR = new CameraPerspective();

    this._initSocket();
    this.resize();
  }

  _initSocket() {
    this.socket = io("https://192.168.1.209:8888", {
      secure: true,
      rejectUnauthorized: false,
    });

    this.socket.on("broadcastCameraData", ({ cameraPos, cameraFov }) => {
      // console.log("Received broadcasted camera data:", data);

      // Process the received data as needed
      if (Math.random() < 0.1) {
        console.log(cameraPos);
      }
      if (!hasFovSet) {
        this.cameraAR.setPerspective(cameraFov, GL.aspectRatio, 0.01, 10);
        hasFovSet = true;
      }

      const target = [0, 0, -0.55];
      this.cameraAR.lookAt(cameraPos, target);
    });
  }

  _initTextures() {}

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();

    this._drawCubes = new DrawCubes();
  }

  update() {}

  render() {
    let g = 0.1;
    GL.clear(g, g, g, 1);
    GL.setMatrices(this.cameraAR);
    const target = [0, 0, -0.55];

    g = 0.05;

    this._dAxis.draw();
    // this._dBall.draw([0.1, 0, -0.55], [g, g, g], [1, 0, 0]);
    // this._dBall.draw([0, 0, -0.55], [g, g, g], [1, 1, 1]);
    // this._dBall.draw([-0.1, 0, -0.55], [g, g, g], [0, 1, 0]);

    this._drawCubes.draw();

    if (canSave && !hasSaved && Config.autoSave) {
      saveImage(GL.canvas, getDateString());
      hasSaved = true;
    }
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    const pixelRatio = 1.5;
    GL.setSize(innerWidth * pixelRatio, innerHeight * pixelRatio);
  }
}

export default SceneApp;
