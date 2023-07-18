import { createCanvas } from "../utils/setupProject2D";
import { pixelRatio } from "../features";

export default function generateMazePattern(
  width,
  height,
  mul,
  lineColor,
  bgColor
) {
  const { canvas, ctx } = createCanvas(width, height);

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  ctx.lineWidth = 1.5 * mul * pixelRatio;
  ctx.strokeStyle = lineColor;
  ctx.save();
  ctx.setTransform(1, -0.3, 0.6, 1, 0, 0);

  // ctx.translate(width / 4, height / 2);

  const s = 10 * mul * pixelRatio;
  const drawI = () => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s * 7, 0);
    ctx.lineTo(s * 7, s);
    ctx.lineTo(s * 6, s);
    ctx.lineTo(s * 6, s * 2);
    ctx.lineTo(s * 5, s * 2);
    ctx.lineTo(s * 5, s);
    ctx.lineTo(s * 4, s);
    ctx.lineTo(s * 4, s * 8);
    ctx.lineTo(s * 5, s * 8);
    ctx.lineTo(s * 5, s * 7);
    ctx.lineTo(s * 6, s * 7);
    ctx.lineTo(s * 6, s * 8);
    ctx.lineTo(s * 7, s * 8);
    ctx.lineTo(s * 7, s * 9);
    ctx.lineTo(0, s * 9);
    ctx.lineTo(0, s * 8);
    ctx.lineTo(s, s * 8);
    ctx.lineTo(s, s * 7);
    ctx.lineTo(s * 2, s * 7);
    ctx.lineTo(s * 2, s * 8);
    ctx.lineTo(s * 3, s * 8);
    ctx.lineTo(s * 3, s);
    ctx.lineTo(s * 2, s);
    ctx.lineTo(s * 2, s * 2);
    ctx.lineTo(s, s * 2);
    ctx.lineTo(s, s);
    ctx.lineTo(0, s);
    ctx.lineTo(0, 0);

    ctx.stroke();
  };

  const gap = s * 10;
  let count = 0;
  for (let y = -gap; y < height; y += gap * 0.5) {
    const offset = count % 2 === 0 ? s * 5 : 0;
    for (let x = -width * 1.5; x < width * 0.75; x += gap) {
      ctx.save();
      ctx.translate(x + offset, y);
      drawI();
      ctx.restore();
    }
    count++;
  }
  ctx.restore();

  return canvas;
}
