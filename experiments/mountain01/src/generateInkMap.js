import { GLTexture, FboPingPong, Draw, Geom, ShaderLibs, GL } from "alfrid";
import { random, rgb, rgba } from "./utils";
import { fbm3D } from "./utils/noise";

const generateInkMap = (mSize = 2048) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = mSize;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = rgb(255);
  ctx.fillRect(0, 0, mSize, mSize);

  const radius = mSize / 2;
  ctx.translate(radius, radius);

  const { PI, sin, cos, pow } = Math;
  const seed = random();

  let num = 3000;
  const _pow = random(1.5, 3);
  const baseAlpha = random(0.5, 1);
  const rMul = random(0.1, 0.6);
  while (num--) {
    const s = random(20, 100) * 0.5;
    const theta = random(PI * 2);
    const _x = cos(theta);
    const _y = sin(theta);
    const noiseRadius = 1.0 + fbm3D(_x, _y, seed, 1.0, 5) * 0.5;

    const rot = random(PI * 2);
    const p = random();
    const r = radius * p * rMul * noiseRadius;
    const a = random(0.1 * pow(1 - p, _pow), 0.1) * baseAlpha;

    ctx.fillStyle = rgba(0, 0, 0, a);
    ctx.save();
    ctx.translate(cos(theta) * r, sin(theta) * r);
    ctx.rotate(rot);
    ctx.fillRect(-s, -s, s * 2, s * 2);

    ctx.restore();
  }

  return new GLTexture(canvas);
};

export default generateInkMap;
