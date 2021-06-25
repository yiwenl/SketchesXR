// index.js
import { mat4 } from "gl-matrix";

export { saveImage } from "./saveImage";
export { saveJson } from "./saveJson";
export { resize } from "./resizeCanavs";
export { getDateString } from "./getDateString";
export const logError = (e) => {
  console.error(e);
};

export const biasMatrix = mat4.fromValues(
  0.5,
  0.0,
  0.0,
  0.0,
  0.0,
  0.5,
  0.0,
  0.0,
  0.0,
  0.0,
  0.5,
  0.0,
  0.5,
  0.5,
  0.5,
  1.0
);


export const iOS = (function() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
})();
