import { tileSize } from "./";
import { tileDiamond } from "./tileUtils";
import { pixelRatio } from "../features";
import { createCanvas } from "../utils/setupProject2D";

const generateFlowerPattern = (width, height, mul, lineColor, bgColor) => {
  const { canvas, ctx: ctxPattern } = createCanvas(width, height);

  const { PI } = Math;
  const ts = (tileSize * mul * pixelRatio) / 2;
  const { canvas: canvasTile, ctx } = createCanvas(ts, ts);
  const r = ts * 0.175;
  const s = 0.8;
  const xs = 0.9;
  const theta = 0.5;
  const yOffset = (30 * pixelRatio) / 2;
  const stemX = 2 * pixelRatio;
  const stemY = -ts * 0.25;

  ctx.translate(ts / 2, ts / 2);
  const drawPetal = () => {
    ctx.fillStyle = bgColor;

    ctx.save();
    ctx.translate(0, -ts * 0.22);
    ctx.scale(s, s);
    ctx.beginPath();
    ctx.arc(0, 0, r, PI - theta, PI * 2 + theta);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, ts / 4);
    ctx.lineTo(-r * xs, yOffset);
    ctx.lineTo(r * xs, yOffset);
    ctx.fill();
    ctx.restore();

    // stems
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 0.7 * pixelRatio;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-stemX, stemY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(stemX, stemY);
    ctx.stroke();
  };

  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.rotate((i * PI) / 2);
    drawPetal();
    ctx.restore();
  }
  ctx.fillStyle = lineColor;
  ctx.beginPath();
  ctx.arc(0, 0, 3 * pixelRatio, 0, PI * 2);
  ctx.fill();

  ctxPattern.fillStyle = lineColor;
  ctxPattern.fillRect(0, 0, width, height);

  tileDiamond(ctxPattern, canvasTile);

  return canvas;
};

export default generateFlowerPattern;
