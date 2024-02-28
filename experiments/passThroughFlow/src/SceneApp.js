import { GL, DrawBall, DrawAxis, DrawCopy, Scene, EaseNumber } from "alfrid";
import { bind, unbind, getViewport, onXRFrame } from "./VRUtils";
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

    onXRFrame((frame, pos) => this._onFrame(frame, pos));
  }

  _initTextures() {}

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();

    this._drawBlocks = new DrawBlocks();
  }

  renderScene() {
    // const time = performance.now() * 0.001;
    this._drawBlocks.uniform("uTime", Scheduler.getElapsedTime()).draw();
  }

  _onFrame(frame, pose) {
    // rendering
    const { views } = pose;
    const { session } = frame;

    bind(session);
    // GL.clear(0, 0, 0, 1);
    views.forEach((view) => {
      const { x, y, width, height } = getViewport(view, session);
      this.camera.setFromViewProjection(
        view.transform.inverse.matrix,
        view.projectionMatrix
      );
      GL.setMatrices(this.camera);
      GL.viewport(x, y, width, height);
      this.renderScene();
    });
    unbind();
  }
}

export default SceneApp;
