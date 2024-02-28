import Input from "./Input";
import { vec3 } from "gl-matrix";

const joints = ["wrist", "index-finger-tip", "thumb-tip"];

const TAP_DIST_THRESHOLD = 0.01;
const RELEASE_DIST_THRESHOLD = 0.02;
const MIN_DRAG_COUNT = 2;
const STATE_UP = "up";
const STATE_DOWN = "down";
const DOUBLE_TAP_INTERVAL = 300;
const VELOCITY_THRESHOLD = 0.0002;

export const ON_UP = "onUp";
export const ON_DOUBLE_TAP = "onDoubleTap";
export const ON_DOWN = "onDown";
export const ON_DRAG = "onDrag";

export default class HandInput extends Input {
  constructor() {
    super();

    this._joints = [];
    this._state = STATE_UP;
    this._downCount = 0;
    this._lastTime = 0;

    this._lastTapTime = 0;

    // tip velocity
    this._lastIndexPosition = null;
    this._lastThumbPosition = null;
  }

  update(frame, inputSource, refSpace) {
    super.update(frame, inputSource, refSpace);

    // joints detection
    this._joints = [];
    const { hand } = inputSource;
    if (!hand) {
      // console.log("No hand found");
      return;
    }

    const getJointPose = (jointName) => {
      return frame.getJointPose(hand.get(jointName), refSpace);
    };

    const getJointPosition = (jointName) => {
      const pose = getJointPose(jointName);
      if (!pose) return null;
      const {
        transform: {
          position: { x, y, z },
        },
      } = pose;

      return [x, y, z];
    };

    if (hand.get("wrist")) {
      joints.forEach((jointName) => {
        let pose = getJointPose(jointName);

        if (!pose) return;
        this._joints.push(getJointPosition(jointName));
      });
    }

    const poseIndexTip = getJointPose("index-finger-tip");
    const poseThumbTip = getJointPose("thumb-tip");

    if (!poseIndexTip || !poseThumbTip) {
      // console.log("No pose found");
      return;
    }

    // gesture detection
    const currentTime = new Date().getTime();
    const positionIndexTip = getJointPosition("index-finger-tip");
    const positionThumbTip = getJointPosition("thumb-tip");

    const getTipPosition = () => {
      const tip = vec3.clone(positionIndexTip);
      vec3.add(tip, tip, positionThumbTip);
      vec3.scale(tip, tip, 0.5);
      return tip;
    };

    if (this._lastIndexPosition && this._lastThumbPosition && this._lastTime) {
      const timeDiff = currentTime - this._lastTime; // Time difference in milliseconds
      // Calculate distance and velocity for the index finger tip
      const distIndex = vec3.distance(
        positionIndexTip,
        this._lastIndexPosition
      );
      const velocityIndex = distIndex / timeDiff;

      // Calculate distance and velocity for the thumb tip
      const distThumb = vec3.distance(
        positionThumbTip,
        this._lastThumbPosition
      );
      const velocityThumb = distThumb / timeDiff;

      let dist = vec3.distance(positionIndexTip, positionThumbTip);
      const avgVelocity = (velocityIndex + velocityThumb) / 2;

      // if (this._state === STATE_UP && dist < TAP_DIST_THRESHOLD) {
      if (
        this._state === STATE_UP &&
        dist < TAP_DIST_THRESHOLD &&
        avgVelocity > VELOCITY_THRESHOLD
      ) {
        this._state = STATE_DOWN;
        this.emit(ON_DOWN, {
          position: getTipPosition(),
        });

        // doudle tap detection
        const tapLength = currentTime - this._lastTapTime;

        if (tapLength < DOUBLE_TAP_INTERVAL && tapLength > 0) {
          // Handle the double tap event
          this.emit(ON_DOUBLE_TAP, {
            position: getTipPosition(),
          });
        }

        this._lastTapTime = currentTime;
      }

      if (this._state === STATE_DOWN && dist > RELEASE_DIST_THRESHOLD) {
        this._state = STATE_UP;
        this.emit(ON_UP);
      }

      if (this._state === STATE_DOWN) {
        this._downCount++;
        if (this._downCount > MIN_DRAG_COUNT) {
          this.emit(ON_DRAG, {
            position: getTipPosition(),
          });
        }
      } else {
        this._downCount = 0;
      }
    }

    // update latest positions
    this._lastIndexPosition = positionIndexTip;
    this._lastThumbPosition = positionThumbTip;
    this._lastTime = currentTime;
  }
}
