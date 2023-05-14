import { GL } from "alfrid";

import * as dat from "dat.gui";
import Config from "../Config";
import Settings from "../Settings";
import { saveJson } from "./";

export default (scene) => {
  const { refresh, reload } = Settings;
  const oControl = {
    colorTest: [255, 255, 255],
    save: () => {
      saveJson(Config, "Settings");
    },
  };

  const gui = new dat.GUI({ width: 300 });
  window.gui = gui;

  gui.addColor(oControl, "colorTest");

  gui.add(Config, "autoSave").onFinishChange(reload);
  gui.add(oControl, "save").name("Save Settings");
  gui.add(Settings, "reset").name("Reset Default");
};
