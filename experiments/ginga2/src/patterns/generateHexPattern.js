import { tileSize } from "./";
import { random, randomInt } from "../utils";
import { tileHex } from "./tileUtils";
import { pixelRatio } from "../features";
import { createCanvas } from "../utils/setupProject2D";

const generateHexPattern = (width, height, mul, lineColor, bgColor) => {
  const { canvas, ctx: ctxPattern } = createCanvas(width, height);

  const ts = (tileSize * mul * pixelRatio) / 2;
  const { canvas: canvasTile, ctx } = createCanvas(ts, ts);

  const { sin, cos, PI } = Math;

  const lineWidth = pixelRatio * mul;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  const r = ts / 2;
  ctx.translate(r, r);
  // ctx.rotate(PI / 3);

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
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  const num = randomInt(4, 9);
  const cos60 = cos(PI / 3);
  const sin60 = sin(PI / 3);
  const h = sin60 * r;
  const dx = cos60 * r;
  const l = dx * 2;

  let x, y, p;

  const drawLines = () => {
    for (let i = 0; i <= num; i++) {
      p = i / num;
      x = -dx * (1 - p);
      y = h * p - h;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + l, y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-dx, -h);
    ctx.lineTo(-dx + l, -h);
    ctx.lineTo(l, 0);
    ctx.stroke();
  };

  const theta = (PI * 2) / 3;
  // ctx.rotate(randomInt(3) * theta);
  for (let j = 0; j < 3; j++) {
    ctx.rotate(theta);
    if (j === 0 || random() > 0.5) {
      drawLines();
    }
  }
  tileHex(ctxPattern, canvasTile);

  return canvas;
};

export default generateHexPattern;
