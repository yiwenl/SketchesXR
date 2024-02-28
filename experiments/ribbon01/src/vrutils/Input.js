import EventDispatcher from "events";
import { vec3, mat4 } from "gl-matrix";

export default class Input extends EventDispatcher {
  constructor() {
    super();
    this._handedness = "";
    this._matrix = mat4.create();
    this._position = [0, 0, 0];
  }

  update(frame, inputSource, refSpace) {
    const { handedness, targetRayMode } = inputSource;
    this._handedness = handedness;
    this._joints = [];
    mat4.identity(this._matrix);

    if (targetRayMode === "tracked-pointer") {
      const targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);
      if (!!targetRayPose) {
        const { matrix } = targetRayPose.transform;
        mat4.copy(this._matrix, matrix);
      }
    }
  }

  get position() {
    vec3.transformMat4(this._position, [0, 0, 0], this._matrix);
    return this._position;
  }

  get isReady() {
    return this._handedness !== "";
  }

  get handedness() {
    return this._handedness;
  }

  get joints() {
    return this._joints;
  }

  get matrix() {
    return this._matrix;
  }
}
