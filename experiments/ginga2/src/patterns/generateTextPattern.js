import { pixelRatio, tileSize } from "./";
import { createCanvas } from "../utils/setupProject2D";
import { pick, randomInt } from "../utils";
import texts from "../texts";

let appended = true;

export default function generateTextPattern(
  width,
  height,
  mul,
  lineColor,
  bgColor
) {
  const allChars = [];
  // const texts = pick(allTexts[0]);
  // const texts = combined;
  for (let i = 0; i < texts.length; i++) {
    allChars.push(texts.substring(i, i + 1));
  }
  const { canvas, ctx } = createCanvas(width, height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  const fontScale = randomInt(1, 3);
  const fontSize = Math.floor(tileSize * mul * fontScale);
  let nx = Math.ceil(width / fontSize);
  let ny = Math.ceil(height / fontSize);
  ctx.fillStyle = lineColor;
  ctx.textBaseline = "top";
  ctx.font = `900 ${fontSize}px Noto Serif TC`;
  for (let j = 0; j <= ny; j++) {
    for (let i = 0; i <= nx; i++) {
      const x = i * fontSize;
      const y = j * fontSize;
      ctx.fillText(pick(allChars), x, y);
    }
  }

  if (!appended) {
    document.body.appendChild(canvas);
    canvas.style.cssText = `
    position:absolute;
    top:0;
    left:0;
    z-index:999;
    `;
    appended = true;
  }

  return canvas;
}
