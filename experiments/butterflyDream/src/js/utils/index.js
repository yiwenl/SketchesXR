// index.js
import { mat4, vec3 } from "gl-matrix";

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

export const definesToString = (defines) => {
  let outStr = "";
  for (const def in defines) {
    if (defines[def]) {
      outStr += "#define " + def + " " + defines[def] + "\n";
    }
  }
  return outStr;
};

export const angleBetween = (mA, mB) => {
  const dotValue = vec3.dot(mA, mB);
  return Math.acos(dotValue);
};

export const DEGREE = (mValue) => {
  return Math.floor((mValue * 180) / Math.PI);
};

export const RAD = (mValue) => {
  return (mValue * Math.PI) / 180;
};


export const iOS = () => {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

