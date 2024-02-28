import Input from "./Input";
import { allJoints } from "./hand-joints";

const distance = (a, b) => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

const TAP_DIST_THRESHOLD = 0.01;
const RELEASE_DIST_THRESHOLD = 0.02;
const MIN_DRAG_COUNT = 2;
const STATE_UP = "up";
const STATE_DOWN = "down";

export const ON_UP = "onUp";
export const ON_DOWN = "onDown";
export const ON_DRAG = "onDrag";

export default class HandInput extends Input {
  constructor() {
    super();

    this._joints = [];
    this._state = STATE_UP;
    this._downCount = 0;
  }

  update(frame, inputSource, refSpace) {
    super.update(frame, inputSource, refSpace);

    this._joints = [];

    const { hand } = inputSource;
    if (!hand) {
      // console.log("No hand found");
      return;
    }

    const getJointPose = (jointName) => {
      return frame.getJointPose(hand.get(jointName), refSpace);
    };

    if (hand.get("wrist")) {
      allJoints.forEach((jointName) => {
        let pose = getJointPose(jointName);

        if (!pose) return;

        const {
          transform: {
            position: { x, y, z },
          },
        } = pose;

        this._joints.push([x, y, z]);
      });
    }

    // gesture
    const poseIndexTip = getJointPose("index-finger-tip");
    const poseThumbTip = getJointPose("thumb-tip");
    if (!poseIndexTip || !poseThumbTip) {
      // console.log("No pose found");
      return;
    }

    const {
      transform: { position: positionIndexTip },
    } = poseIndexTip;
    const {
      transform: { position: positionThumbTip },
    } = poseThumbTip;

    let dist = distance(positionIndexTip, positionThumbTip);

    if (this._state === STATE_UP && dist < TAP_DIST_THRESHOLD) {
      this._state = STATE_DOWN;
      this.emit(ON_DOWN, {
        position: [
          (positionIndexTip.x + positionThumbTip.x) / 2,
          (positionIndexTip.y + positionThumbTip.y) / 2,
          (positionIndexTip.z + positionThumbTip.z) / 2,
        ],
      });
    }

    if (this._state === STATE_DOWN && dist > RELEASE_DIST_THRESHOLD) {
      this._state = STATE_UP;
      this.emit(ON_UP);
    }

    if (this._state === STATE_DOWN) {
      this._downCount++;
      if (this._downCount > MIN_DRAG_COUNT) {
        this.emit(ON_DRAG, {
          position: [
            (positionIndexTip.x + positionThumbTip.x) / 2,
            (positionIndexTip.y + positionThumbTip.y) / 2,
            (positionIndexTip.z + positionThumbTip.z) / 2,
          ],
        });
      }
    } else {
      this._downCount = 0;
    }
  }
}
