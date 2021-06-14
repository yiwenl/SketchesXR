import { GL, Scene, DrawAxis, DrawDotsPlane, DrawCopy } from "alfrid";

class SceneApp extends Scene {
  constructor() {
    super();

    this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
    this.orbitalControl.radius.value = 15;
    this.resize();
  }

  _initTextures() {}

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dDots = new DrawDotsPlane();
    this._dCopy = new DrawCopy();
  }

  render() {
    GL.clear(0, 0, 0, 1);

    this._dAxis.draw();
    this._dDots.draw();
  }
}

export default SceneApp;
