import { GLTexture } from "alfrid";
import Assets from "../Assets";
const texts = "生老病死愁苦憂惱怨憎離求惡魔鬼兇咒怪妒闇";

const generateText = () => {
  const o = Assets.get("texts1");
  if (o) {
    return o;
  }
  const size = 1000;
  const num = 5;

  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");

  const fontSize = size / num;
  ctx.font = `bolder ${fontSize}px Source Han Serif TW`;
  ctx.textBaseline = "top";
  ctx.textAlign = "left";

  ctx.fillStyle = "white";

  document.body.appendChild(canvas);
  canvas.style.cssText = `
    position:fixed;
    top:0;
    left:0;
    z-index:999;
  `;

  for (let i = 0; i < texts.length; i++) {
    const c = texts.charAt(i);

    const x = (i % num) * fontSize;
    const y = Math.floor(i / num) * fontSize;
    ctx.fillText(c, x, y);
  }

  return new GLTexture(canvas);
};

export default generateText;
