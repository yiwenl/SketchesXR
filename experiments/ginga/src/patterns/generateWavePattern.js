import { tileSize } from "./";
import { pixelRatio } from "../features";
import { createCanvas } from "../utils/setupProject2D";

const generateWavePattern = (width, height, mul, lineColor, bgColor) => {
  const { canvas, ctx } = createCanvas(width, height);

  // const mul = randomInt(1, 5) * 0.5;
  const ts = (tileSize * mul * pixelRatio) / 2;

  const { canvas: canvasTile, ctx: ctxTile } = createCanvas(ts * 2, ts);
  const { width: tw, height: th } = canvasTile;
  ctxTile.fillStyle = bgColor;
  ctxTile.fillRect(0, 0, tw, th);

  const drawCircles = (mX, mY) => {
    ctxTile.save();
    ctxTile.translate(mX, mY);

    // background
    ctxTile.fillStyle = bgColor;
    ctxTile.beginPath();
    ctxTile.arc(0, 0, th, 0, Math.PI * 2);
    ctxTile.fill();

    ctxTile.strokeStyle = lineColor;
    const lineWidth = pixelRatio * mul;
    ctxTile.lineWidth = lineWidth;
    const gap = th / 8;
    for (let i = 1; i <= 8; i++) {
      const r = i * gap - lineWidth / 2;
      ctxTile.beginPath();
      ctxTile.arc(0, 0, r, 0, Math.PI * 2);
      ctxTile.stroke();
    }

    ctxTile.restore();
  };
  drawCircles(0, th / 2);
  drawCircles(tw, th / 2);
  drawCircles(tw / 2, th);
  drawCircles(0, th / 2 + th);
  drawCircles(tw, th / 2 + th);

  for (let j = 0; j < height; j += th) {
    for (let i = 0; i < width; i += tw) {
      ctx.drawImage(canvasTile, i, j);
    }
  }

  return canvas;
};

export default generateWavePattern;
