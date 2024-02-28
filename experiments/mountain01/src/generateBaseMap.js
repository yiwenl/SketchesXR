import { GLTexture } from "alfrid";
import { rgb } from "./utils";
import { fbm3D } from "./utils/noise";
import { vec2 } from "gl-matrix";
// import {}

const generateBaseMap = (mSeed) => {
  const canvas = document.createElement("canvas");
  const size = 2048;
  canvas.width = canvas.height = size;
  const baseNoiseScale = 0.2;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = rgb(0);
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size / 2, size / 2);
  const r = size / 2;

  const { PI, sin, cos } = Math;
  const num = 120;
  ctx.fillStyle = rgb(255, 0, 0);
  ctx.beginPath();
  for (let i = 0; i < num; i++) {
    const theta = (i / num) * PI * 2;
    let x = cos(theta) * 10;
    let z = sin(theta) * 10;
    let maxRadius = (0.95 + fbm3D(x, z, mSeed, baseNoiseScale, 6) * 0.05) * r;
    const xz = [x, z];
    vec2.normalize(xz, xz);
    vec2.scale(xz, xz, maxRadius);
    x = xz[0];
    z = xz[1];

    if (i === 0) {
      ctx.moveTo(x, z);
    } else {
      ctx.lineTo(x, z);
    }
  }

  ctx.fill();

  return new GLTexture(canvas);
};

export default generateBaseMap;
