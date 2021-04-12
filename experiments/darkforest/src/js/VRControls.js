import EventDispatcher from "events";

import VRUtils from "./VRUtils";
import Scheduler from "scheduling";

export const controllerName = (hand, profiles) =>
  hand + ":" + profiles.join("|");

class VRControls extends EventDispatcher {
  constructor() {
    super();

    this.controllers = {};

    // Scheduler.addEF(() => this._loop());
  }

  _loop() {
    const { session } = VRUtils;
    // session not ready
    if (!session || !VRUtils.frame) {
      return;
    }

    const { xrRefSpace, frame } = VRUtils;
    console.log("frame", frame);

    const toLog = Math.random() > 0.95;

    session.inputSources.forEach((inputSource, s) => {
      const { gamepad, handedness: hand, profiles } = inputSource;
      let gripPose = frame.getPose(inputSource.gripSpace, xrRefSpace);
      if (toLog) {
        console.log("inputSource", inputSource, gripPose);
      }

      const controller =
        this.controllers[hand] ||
        (this.controllers[hand] = {
          hand,
          profiles,
          id: s,
          inputSource,
          buttons: [],
          axes: [],
        });
    });
  }
}

export default new VRControls();
