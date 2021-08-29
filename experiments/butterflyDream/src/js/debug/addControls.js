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
    gui.add(Config, "savePixelRatio", [1, 1.5, 2]).onFinishChange(reload);
    gui.add(Config, "bufferflyMap", [0, 1, 2]).onFinishChange(refresh);
    gui.add(Config, "numParticles", [4, 8, 16, 32]).onFinishChange(reload);
    gui.add(Config, "bufferflyScale", 0, 1).onFinishChange(refresh);
    gui.add(Config, "autoSave").onFinishChange(refresh);
    gui.add(Settings, "reset").name("Reset Default");
  }, 200);
};

export default addControls;
