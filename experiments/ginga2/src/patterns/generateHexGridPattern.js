import { tileSize } from "./";
import { tileHex } from "./tileUtils";
import { pixelRatio } from "../features";
import { createCanvas } from "../utils/setupProject2D";

const generateHexGridPattern = (width, height, mul, lineColor, bgColor) => {
  const { canvas, ctx: ctxPattern } = createCanvas(width, height);

  const ts = (tileSize * mul * pixelRatio) / 2;
  const { canvas: canvasTile, ctx } = createCanvas(ts, ts);

  const { sin, cos, PI } = Math;

  const lineWidth = pixelRatio * mul;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  const r = ts / 2;
  ctx.translate(r, r);
  ctx.rotate(PI / 3);

  const drawTriangle = (a, b, c) => {
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.lineTo(c[0], c[1]);
    ctx.lineTo(a[0], a[1]);
    ctx.stroke();
  };

  const getCenter = (a, b, c) => {
    return [
      (a[0] + b[0] + c[0]) / 3,
      (a[1] + b[1] + c[1]) / 3,
      (a[2] + b[2] + c[2]) / 3,
    ];
  };

  // bg
  ctx.fillStyle = bgColor;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * PI * 2;
    const x = cos(a) * r;
    const y = sin(a) * r;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.fill();

  ctx.strokeStyle = lineColor;
  for (let i = 0; i <= 6; i++) {
    let a0 = (i / 6) * PI * 2;
    let a1 = ((i + 1) / 6) * PI * 2;

    const a = [0, 0];
    const b = [cos(a0) * r, sin(a0) * r];
    const c = [cos(a1) * r, sin(a1) * r];
    const center = getCenter(a, b, c);
    drawTriangle(a, b, c);
    drawTriangle(a, b, center);
    drawTriangle(a, center, c);
    drawTriangle(center, b, c);
  }

  // rings
  const ringSize = 2 * pixelRatio;
  ctx.beginPath();
  ctx.arc(0, 0, ringSize, 0, PI * 2);
  ctx.fill();
  ctx.stroke();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * PI * 2;
    const x = cos(a) * r;
    const y = sin(a) * r;
    ctx.beginPath();
    ctx.arc(x, y, ringSize, 0, PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // tiling
  tileHex(ctxPattern, canvasTile);

  return canvas;
};

export default generateHexGridPattern;
