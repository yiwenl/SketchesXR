import DrawSwarm from "./DrawSwarm";
import Scheduler from "scheduling";

class SceneSwarm {
  constructor() {
    this._drawSwarm = new DrawSwarm();

    this.open();
  }

  open() {
    this._drawSwarm.open();
  }

  close() {
    this._drawSwarm.close();
  }

  update() {}

  render(tColorCurr, tColorNext, mOffsetColor) {
    this._drawSwarm
      .uniform("uTime", Scheduler.getElapsedTime())
      .bindTexture("uColor0Map", tColorCurr, 0)
      .bindTexture("uColor1Map", tColorNext, 1)
      .uniform("uColorOffset", mOffsetColor)
      .draw();
  }
}

export default SceneSwarm;
