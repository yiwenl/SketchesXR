// addControls.js

import Settings from "../Settings";
import Config from "../Config";
import { saveJson } from "../utils";
import { GL } from "alfrid";
import * as ARUtils from "../ARUtils";

const addControls = (scene) => {
  const oControl = {
    save: () => {
      saveJson(Config, "Settings");
    },
    webgl2: GL.webgl2.toString(),
  };
  const { refresh, reload } = Settings;

  setTimeout(() => {
    gui
      .add(Config, "colorIndex", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
      .onFinishChange(refresh);
    // gui.add(Config, "savePixelRatio", [1, 1.5, 2]).onFinishChange(reload);
    // gui.add(Config, "meshDetail", [4, 5, 6, 7, 8]).onFinishChange(reload);
    // gui.add(Config, "bufferflyMap", [0, 1, 2]).onFinishChange(refresh);
    gui.add(Config, "numParticles", [4, 8, 16, 32]).onFinishChange(reload);
    gui
      .add(Config, "numSwarm", [16, 32, 50, 64, 80, 128, 256])
      .onFinishChange(reload);
    gui.add(Config, "bufferflyScale", 0, 1).onFinishChange(refresh);
    gui.add(Config, "bufferflySwarmScale", 0, 1).onFinishChange(refresh);
    gui.add(Config, "contrast", 1, 5).onFinishChange(refresh);
    gui.add(Config, "brightness", 0, 1).onFinishChange(refresh);
    gui.add(Config, "filmGrainStrength", 0, 0.5).onFinishChange(refresh);
    gui
      .add(Config, "fov", 30, 160)
      .step(1)
      .onChange(() => {
        scene.updateFov();
        Settings.refresh();
      });
    gui.addColor(Config, "bg").onFinishChange(Settings.refresh);
    // gui.add(Config, "autoSave").onFinishChange(refresh);
    gui.add(oControl, "save").name("Save Settings");
    gui.add(Settings, "reset").name("Reset Default");
    // gui.add(scene, "toggleState");
    // gui.add(scene._sceneSwarm, "reset");

    if (GL.isMobile) {
      dat.GUI.toggleHide();
    }
  }, 200);
};

export default addControls;
