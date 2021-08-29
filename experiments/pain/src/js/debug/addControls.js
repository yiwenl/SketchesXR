// addControls.js

import Settings from "../Settings";
import Config from "../Config";
import { saveJson } from "../utils";
import { GL } from "alfrid";

const addControls = (scene) => {
  const oControl = {
    save: () => {
      saveJson(Config, "Settings");
    },
    webgl2: GL.webgl2.toString(),
  };

  setTimeout(() => {
    gui.addColor(Config, "bgColor0").onFinishChange(Settings.refresh);
    gui.addColor(Config, "bgColor1").onFinishChange(Settings.refresh);
    gui.addColor(Config, "floorColor").onFinishChange(Settings.refresh);
    gui.addColor(Config, "coverColor").onFinishChange(Settings.refresh);
    gui.add(Config, "coverOpacity", 0, 1).onFinishChange(Settings.refresh);
    gui.add(Config, "autoSave").onFinishChange(Settings.refresh);
    gui.add(oControl, "save").name("Save Settings");
    gui.add(Settings, "reset").name("Reset Default");
  }, 200);
};

export default addControls;
