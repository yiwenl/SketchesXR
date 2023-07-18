import { createCanvas } from "../utils/setupProject2D";
import { rgb, random, randomInt, pick, signs } from "../utils";
import { noise3D } from "../utils/noise";
import { vec2 } from "gl-matrix";

const tileSize = 800;
const petalSize = 60;
const { sin, cos, PI } = Math;

export default function generateRiverFlowerPattern() {
  const { canvas, ctx } = createCanvas(tileSize, tileSize);

  // drawing functions
  const petal = () => {
    const s = petalSize;
    const w = random(0.5, 0.7);
    const h = random(0.9, 1);
    ctx.beginPath();
    ctx.moveTo(s * 0.5, s * h);
    ctx.bezierCurveTo(
      s * (0.5 - w),
      s * 0.4,
      s * 0.2,
      -s * 0.2,
      s * 0.5,
      s * 0.2
    );
    ctx.moveTo(s * 0.5, s * h);
    ctx.bezierCurveTo(
      s * (0.5 + w),
      s * 0.4,
      s * 0.8,
      -s * 0.2,
      s * 0.5,
      s * 0.2
    );
    ctx.fill();
  };

  const flower = (mX, mY) => {
    ctx.save();
    ctx.translate(mX, mY);
    const _s = random(1, 1.5);
    ctx.scale(_s, _s);

    ctx.fillStyle = rgb(255);
    const initRotation = random(PI * 2);
    const num = random() < 0.8 ? 5 : pick([3, 4]);
    const offAngle = 0.1;
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        const a = (i / 5) * PI * 2 + random(-offAngle, offAngle);
        ctx.save();
        ctx.rotate(a + initRotation);
        ctx.translate(-petalSize * 0.5, -petalSize * 1.1);
        petal();
        ctx.restore();
      }
    }

    ctx.restore();
  };

  const river = (mX = 0, mY = 0) => {
    ctx.save();
    ctx.translate(mX, mY);
    ctx.beginPath();
    ctx.lineWidth = 7;
    ctx.strokeStyle = rgb(255);
    const numLines = randomInt(3, 6);
    const numSeg = 100;

    const waveRange = 100;
    const waveLength = random(20, 15);
    const initAngle = random(PI * 2);
    let seeds = [];
    for (let j = 0; j < numLines; j++) {
      seeds.push(random(waveRange * 0.5));
    }

    for (let j = 0; j < numLines; j++) {
      let sx = 40 * j;
      ctx.beginPath();
      const seed = seeds[j];

      for (let k = 0; k < 2; k++) {
        if (k === 0) {
          ctx.lineWidth = 30;
          ctx.globalCompositeOperation = "destination-out";
        } else {
          ctx.lineWidth = 7;
        }

        for (let i = 0; i < numSeg; i++) {
          const p = i / numSeg;
          let x = sin(p * waveLength + initAngle) * waveRange + sx;
          let y = p * tileSize;
          let noise = noise3D(x, y, seed, 0.002);
          x += noise * waveRange;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
      }
    }

    ctx.restore();
  };

  const swirl = (mX = 0, mY = 0) => {
    ctx.save();
    ctx.translate(mX, mY);
    ctx.rotate(-PI * 0.5 + pick([0, 1]) * PI + random(-0.2, 0.2));
    const numLines = randomInt(1, 3);
    // ctx.fillStyle = _bgColor;

    const drawSwirl = () => {
      let num = 50;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      let r = 0;
      let a = 0;
      const totalAngle = PI * 2.8;
      const gapAngle = totalAngle / num;
      for (let i = 0; i < num; i++) {
        const inc = a > PI * 2 ? 0.1 : 2;
        r += inc;
        a += gapAngle;
        ctx.lineTo(cos(a) * r, sin(a) * r);
      }
      ctx.stroke();
      let x = cos(a) * r;
      let y = sin(a) * r;
      let _r = 50;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(
        x - _r * 0.2,
        y - _r * 1.5,
        x - _r * 2.5,
        y - _r * 2,
        x - _r * 3,
        y
      );
      ctx.stroke();

      r = 35;
      a = PI;
      const x1 = cos(a) * r;
      const y1 = sin(a) * r;

      r = 74;
      a = PI * 2;
      const x2 = cos(a) * r;
      const y2 = sin(a) * r;

      r = 72;
      a = PI * 2.8;
      const x3 = cos(a) * r;
      const y3 = sin(a) * r;

      for (let i = 0; i < 2; i++) {
        _r = 100 + i * 30;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(x1, y1 - _r, x2, y1 - _r, x2, y2);
        ctx.stroke();
      }
      for (let i = 0; i < numLines; i++) {
        _r = 130 + i * 30;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.bezierCurveTo(x2, y2 + _r, x3, y2 + _r, x3, y3);
        ctx.stroke();
      }
    };

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = rgb(255, 0, 0);
    ctx.strokeStyle = rgb(255);
    ctx.lineWidth = 50;
    drawSwirl();
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = rgb(255);
    ctx.lineWidth = 7;
    drawSwirl();

    ctx.restore();
  };

  // draw rivers

  const dir = pick(signs);
  ctx.save();
  ctx.translate(tileSize / 2, tileSize / 2);
  ctx.transform(1, 0.4 * dir, -0.2 * dir, 1, 0, 0);
  ctx.translate(-tileSize / 2, -tileSize / 2);
  river(tileSize * 0.2);
  river(tileSize / 2);
  river(tileSize * 0.8);

  // draw sirls
  swirl(tileSize * random(0.35, 0.3), tileSize * random(0.3, 0.25));
  swirl(tileSize * random(0.7, 0.75), tileSize * random(0.75, 0.8));

  ctx.restore();

  // draw flowers
  const flowers = [];

  const checkHit = (f) => {
    let tooClose = false;
    let d;
    flowers.forEach(({ pos, r }) => {
      d = vec2.distance(pos, f);
      if (d < r) tooClose = true;
    });
    return tooClose;
  };
  ctx.fillStyle = rgb(255);
  while (flowers.length < 7) {
    let x, y;
    do {
      x = random(tileSize);
      y = random(tileSize);
    } while (checkHit([x, y]));
    flowers.push({ pos: [x, y], r: petalSize * 3 });
    flower(x, y);
  }

  while (flowers.length < 25) {
    let x, y;
    do {
      x = random(tileSize);
      y = random(tileSize);
    } while (checkHit([x, y]));
    flowers.push({ pos: [x, y], r: petalSize });
    // flower(x, y);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(random(PI * 2));
    petal();
    ctx.restore();
  }

  // apply mask
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = rgb(255);
  ctx.beginPath();
  ctx.arc(tileSize / 2, tileSize / 2, tileSize / 2, 0, PI * 2);
  ctx.fill();

  return canvas;
}
