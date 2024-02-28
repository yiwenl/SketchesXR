import { GL, DrawBall, DrawAxis, DrawCopy, Scene, EaseNumber } from "alfrid";
import { getViews, bind, unbind, getViewport } from "./VRUtils";
import Scheduler from "scheduling";

// Example code
import DrawBlocks from "./DrawBlocks";

class SceneApp extends Scene {
  constructor() {
    super();

    // this.orbitalControl.lock();
    this.orbitalControl.rx.value = -0.4;
    this.orbitalControl.ry.value = -0.4;

    // states
    this._offsetOpen = new EaseNumber(1);
    this._hasPresented = false;
  }

  present() {
    console.log("present");
    // window.addEventListener("touchstart", this._onTouch);
    // this._offsetOpen.setTo(0);
    // this._hasPresented = true;
  }

  _initTextures() {}

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();

    this._drawBlocks = new DrawBlocks();
  }

  update() {}

  renderScene() {
    this._drawBlocks.uniform("uTime", Scheduler.getElapsedTime()).draw();
  }

  render() {
    const views = getViews();

    if (views.length > 0) {
      bind();
      GL.clear(0, 0, 0, 1);
      views.forEach((view) => {
        const { x, y, width, height } = getViewport(view);
        this.camera.setFromViewProjection(
          view.transform.inverse.matrix,
          view.projectionMatrix
        );
        GL.setMatrices(this.camera);
        GL.viewport(x, y, width, height);
        this.renderScene();
      });
      unbind();
    } else {
      GL.clear(0, 0, 0, 1);
      this.renderScene();
    }
  }
}

export default SceneApp;
