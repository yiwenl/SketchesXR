import { GLTexture } from "alfrid";
import { rgb, random } from "./utils";
import { fbm3D } from "./utils/noise";

const generateCircleTexture = () => {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, size, size);

  const { sin, cos, PI } = Math;
  const offsetRange = 50;

  const drawCircle = (r, c) => {
    ctx.save();
    ctx.translate(
      random(-offsetRange, offsetRange),
      random(-offsetRange, offsetRange)
    );
    const num = 48 * 2;
    const seed = random(-r, r);

    ctx.fillStyle = c;
    ctx.beginPath();
    for (let i = 0; i < num; i++) {
      const theta = (i / num) * PI * 2;
      let x = cos(theta) * r;
      let y = sin(theta) * r;
      const n = fbm3D(x, y, seed, 0.01, 10);
      const mul = 1 + n * 0.2;
      x = cos(theta) * r * mul;
      y = sin(theta) * r * mul;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.fill();
    ctx.restore();
  };

  ctx.translate(size / 2, size / 2);
  const s = 0.75;
  drawCircle(random(200, 400) * s, rgb(10));
  drawCircle(random(64, 256) * s, rgb(random(10, 50)));

  return new GLTexture(canvas);
};

export default generateCircleTexture;
