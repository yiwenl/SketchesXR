// index.js
import { GLTexture } from "alfrid";
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

export const getColorTexture = (mColor = "white") => {
  const c = document.createElement("canvas");
  c.width = c.height = 16;
  const ctx = c.getContext("2d");
  ctx.fillStyle = mColor;
  ctx.fillRect(0, 0, c.width, c.height);
  return new GLTexture(c);
};
