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

  setTimeout(() => {
    gui
      .add(Config, "numParticles", [16, 32, 50, 64, 128])
      .onFinishChange(Settings.reload);

    gui.add(scene, "toggle");
    // gui.add(ARUtils, "isARSupported").listen();
    // gui.add(oControl, "webgl2").listen();
    gui.add(Config, "debug").onFinishChange(Settings.refresh);
    // gui.add(Config, "autoSave").onFinishChange(Settings.refresh);
    // gui.add(oControl, "save").name("Save Settings");
    gui.add(Settings, "reset").name("Reset Default");
  }, 200);
};

export default addControls;
