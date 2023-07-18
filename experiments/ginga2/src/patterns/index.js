import { GL, GLTexture } from "alfrid";
import { pick, rgb, shuffle } from "../utils";

// patterns
import generateWavePattern from "./generateWavePattern";
import generateDotWavePattern from "./generateDotWavePattern";
import generateHexPattern from "./generateHexPattern";
import generateHexGridPattern from "./generateHexGridPattern";
import generateFlowerPattern0 from "./generateFlowerPattern0";
import generateDiamondPattern0 from "./generateDiamondPattern0";
import generateMazePattern from "./generateMazePattern";

const patternsFuncs = [
  generateMazePattern,
  generateWavePattern,
  generateDotWavePattern,
  generateHexPattern,
  generateHexGridPattern,
  generateFlowerPattern0,
  generateDiamondPattern0,
];

export function generatePattern(width, height, mul, lineColor, bgColor) {
  // console.log(width, height);
  let generatePatternFunc = pick(patternsFuncs);
  const _ary = shuffle([lineColor, bgColor]);
  // let _ary = [lineColor, bgColor];
  // _ary = shuffle(_ary);
  const canvasPattern = generatePatternFunc(
    width,
    height,
    mul,
    rgb(_ary[0]),
    rgb(_ary[1])
  );

  return new GLTexture(canvasPattern, {
    wrapS: GL.MIRRORED_REPEAT,
    wrapT: GL.MIRRORED_REPEAT,
    minFilter: GL.LINEAR,
  });
}

export const pixelRatio = 2;
export const tileSize = 1080 / 8;
// export const generateTextPattern = _generateTextPattern;
