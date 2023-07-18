const { floor, sin, cos, PI } = Math;

export const tileDiamond = (ctx, canvasTile) => {
  const { width, height } = ctx.canvas;
  const ts = canvasTile.width;

  const numX = floor(width / ts) + 1;
  const numY = floor(height / ts) * 2 + 2;
  ctx.translate(-ts / 2, -ts / 2);

  let y, offset;
  for (let j = 0; j <= numY; j++) {
    y = j * ts * 0.5;
    offset = j % 2 === 0 ? ts / 2 : 0;
    for (let i = 0; i <= numX; i++) {
      let x = i * ts;
      ctx.drawImage(canvasTile, x + offset, y);
    }
  }
};

export const tileHex = (ctx, canvasTile) => {
  const { width, height } = ctx.canvas;
  const ts = canvasTile.width;
  const r = ts / 2;

  ctx.translate(-r, -r);

  const numX = width / r;
  const h = r * sin(PI / 3);
  const numY = height / r / sin(PI / 3) + 1;

  for (let j = 0; j <= numY; j++) {
    const y = j * h;
    for (let i = 0; i < numX; i++) {
      const offset = j % 2 === 0 ? r * cos(PI / 3) * 3 : 0;
      ctx.save();
      ctx.translate(ts * 1.5 * i + offset, y);
      ctx.drawImage(canvasTile, 0, 0);
      ctx.restore();
    }
  }
};
