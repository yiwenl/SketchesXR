import { tileSize } from "./";
import { random } from "../utils";
import { tileDiamond } from "./tileUtils";
import { pixelRatio } from "../features";
import { createCanvas } from "../utils/setupProject2D";

const generateDiamondPattern = (width, height, mul, lineColor, bgColor) => {
  const { canvas, ctx: ctxPattern } = createCanvas(width, height);

  const { PI } = Math;
  const ts = (tileSize * mul * pixelRatio) / 2;
  const { canvas: canvasTile, ctx } = createCanvas(ts, ts);
  ctx.fillStyle = bgColor;
  ctx.translate(ts / 2, ts / 2);
  ctx.rotate(PI / 4);
  const r = ts * 0.65;
  ctx.fillRect(-r / 2, -r / 2, r, r);
  let s = r * random(0.2, 0.5);
  let t = r * random(0.2, 0.3);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2 * pixelRatio * mul;
  ctx.strokeRect(-s / 2, -s / 2, s, s);
  ctx.strokeRect(-s / 2 + t, -s / 2 + t, s, s);
  ctx.strokeRect(-s / 2 - t, -s / 2 + t, s, s);
  ctx.strokeRect(-s / 2 - t, -s / 2 - t, s, s);
  ctx.strokeRect(-s / 2 + t, -s / 2 - t, s, s);

  ctxPattern.fillStyle = lineColor;
  ctxPattern.fillRect(0, 0, width, height);

  tileDiamond(ctxPattern, canvasTile);

  return canvas;
};

export default generateDiamondPattern;
