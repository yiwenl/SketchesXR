import { Mesh } from "../core/Mesh";
import { vec3 } from "gl-matrix";

const Geom = {
  plane: (width, height, numSegments, axis = "xy") => {
    const positions = [];
    const coords = [];
    const indices = [];
    const normals = [];

    const gapX = width / numSegments;
    const gapY = height / numSegments;
    const gapUV = 1 / numSegments;
    const sx = -width * 0.5;
    const sy = -height * 0.5;
    let index = 0;

    for (let i = 0; i < numSegments; i++) {
      for (let j = 0; j < numSegments; j++) {
        const tx = gapX * i + sx;
        const ty = gapY * j + sy;

        const u = i / numSegments;
        const v = j / numSegments;

        if (axis === "xz") {
          positions.push([tx, 0, ty + gapY]);
          positions.push([tx + gapX, 0, ty + gapY]);
          positions.push([tx + gapX, 0, ty]);
          positions.push([tx, 0, ty]);

          coords.push([u, 1.0 - (v + gapUV)]);
          coords.push([u + gapUV, 1.0 - (v + gapUV)]);
          coords.push([u + gapUV, 1.0 - v]);
          coords.push([u, 1.0 - v]);

          normals.push([0, 1, 0]);
          normals.push([0, 1, 0]);
          normals.push([0, 1, 0]);
          normals.push([0, 1, 0]);
        } else if (axis === "yz") {
          positions.push([0, ty, tx]);
          positions.push([0, ty, tx + gapX]);
          positions.push([0, ty + gapY, tx + gapX]);
          positions.push([0, ty + gapY, tx]);

          coords.push([u, v]);
          coords.push([u + gapUV, v]);
          coords.push([u + gapUV, v + gapUV]);
          coords.push([u, v + gapUV]);

          normals.push([1, 0, 0]);
          normals.push([1, 0, 0]);
          normals.push([1, 0, 0]);
          normals.push([1, 0, 0]);
        } else {
          positions.push([tx, ty, 0]);
          positions.push([tx + gapX, ty, 0]);
          positions.push([tx + gapX, ty + gapY, 0]);
          positions.push([tx, ty + gapY, 0]);

          coords.push([u, v]);
          coords.push([u + gapUV, v]);
          coords.push([u + gapUV, v + gapUV]);
          coords.push([u, v + gapUV]);

          normals.push([0, 0, 1]);
          normals.push([0, 0, 1]);
          normals.push([0, 0, 1]);
          normals.push([0, 0, 1]);
        }

        indices.push(index * 4 + 0);
        indices.push(index * 4 + 1);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 0);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 3);

        index++;
      }
    }

    const mesh = new Mesh()
      .bufferVertex(positions)
      .bufferTexCoord(coords)
      .bufferIndex(indices)
      .bufferNormal(normals);

    return mesh;
  },
  cube: (w, h, d, isInvert = false) => {
    h = h || w;
    d = d || w;

    const x = w / 2;
    const y = h / 2;
    const z = d / 2;

    const positions = [];
    const coords = [];
    const indices = [];
    const normals = [];
    let count = 0;

    // BACK
    positions.push([-x, y, -z]);
    positions.push([x, y, -z]);
    positions.push([x, -y, -z]);
    positions.push([-x, -y, -z]);

    normals.push([0, 0, -1]);
    normals.push([0, 0, -1]);
    normals.push([0, 0, -1]);
    normals.push([0, 0, -1]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // RIGHT
    positions.push([x, y, -z]);
    positions.push([x, y, z]);
    positions.push([x, -y, z]);
    positions.push([x, -y, -z]);

    normals.push([1, 0, 0]);
    normals.push([1, 0, 0]);
    normals.push([1, 0, 0]);
    normals.push([1, 0, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // FRONT
    positions.push([x, y, z]);
    positions.push([-x, y, z]);
    positions.push([-x, -y, z]);
    positions.push([x, -y, z]);

    normals.push([0, 0, 1]);
    normals.push([0, 0, 1]);
    normals.push([0, 0, 1]);
    normals.push([0, 0, 1]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // LEFT
    positions.push([-x, y, z]);
    positions.push([-x, y, -z]);
    positions.push([-x, -y, -z]);
    positions.push([-x, -y, z]);

    normals.push([-1, 0, 0]);
    normals.push([-1, 0, 0]);
    normals.push([-1, 0, 0]);
    normals.push([-1, 0, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // TOP
    positions.push([x, y, -z]);
    positions.push([-x, y, -z]);
    positions.push([-x, y, z]);
    positions.push([x, y, z]);

    normals.push([0, 1, 0]);
    normals.push([0, 1, 0]);
    normals.push([0, 1, 0]);
    normals.push([0, 1, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    count++;

    // BOTTOM
    positions.push([x, -y, z]);
    positions.push([-x, -y, z]);
    positions.push([-x, -y, -z]);
    positions.push([x, -y, -z]);

    normals.push([0, -1, 0]);
    normals.push([0, -1, 0]);
    normals.push([0, -1, 0]);
    normals.push([0, -1, 0]);

    coords.push([0, 0]);
    coords.push([1, 0]);
    coords.push([1, 1]);
    coords.push([0, 1]);

    indices.push(count * 4 + 0);
    indices.push(count * 4 + 1);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 0);
    indices.push(count * 4 + 2);
    indices.push(count * 4 + 3);

    if (isInvert) {
      indices.reverse();
    }

    const mesh = new Mesh()
      .bufferVertex(positions)
      .bufferTexCoord(coords)
      .bufferIndex(indices)
      .bufferNormal(normals);

    return mesh;
  },
  sphere: (size, numSegments, isInvert = false) => {
    const positions = [];
    const coords = [];
    const indices = [];
    const normals = [];
    const gapUV = 1 / numSegments;
    let index = 0;

    function getPosition(i, j, isNormal = false) {
      //	rx : -90 ~ 90 , ry : 0 ~ 360
      const rx = (i / numSegments) * Math.PI - Math.PI * 0.5;
      const ry = (j / numSegments) * Math.PI * 2;
      const r = isNormal ? 1 : size;
      const pos = [];
      pos[1] = Math.sin(rx) * r;
      const t = Math.cos(rx) * r;
      pos[0] = Math.cos(ry) * t;
      pos[2] = Math.sin(ry) * t;

      const precision = 10000;
      pos[0] = Math.floor(pos[0] * precision) / precision;
      pos[1] = Math.floor(pos[1] * precision) / precision;
      pos[2] = Math.floor(pos[2] * precision) / precision;

      return pos;
    }

    for (let i = 0; i < numSegments; i++) {
      for (let j = 0; j < numSegments; j++) {
        positions.push(getPosition(i, j));
        positions.push(getPosition(i + 1, j));
        positions.push(getPosition(i + 1, j + 1));
        positions.push(getPosition(i, j + 1));

        normals.push(getPosition(i, j, true));
        normals.push(getPosition(i + 1, j, true));
        normals.push(getPosition(i + 1, j + 1, true));
        normals.push(getPosition(i, j + 1, true));

        const u = j / numSegments;
        const v = i / numSegments;

        coords.push([1.0 - u, v]);
        coords.push([1.0 - u, v + gapUV]);
        coords.push([1.0 - u - gapUV, v + gapUV]);
        coords.push([1.0 - u - gapUV, v]);

        indices.push(index * 4 + 0);
        indices.push(index * 4 + 1);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 0);
        indices.push(index * 4 + 2);
        indices.push(index * 4 + 3);

        index++;
      }
    }

    if (isInvert) {
      indices.reverse();
    }

    const mesh = new Mesh()
      .bufferVertex(positions)
      .bufferTexCoord(coords)
      .bufferIndex(indices)
      .bufferNormal(normals);

    return mesh;
  },
  bigTriangle: () => {
    const indices = [2, 1, 0];
    const positions = [
      [-1, -1],
      [-1, 4],
      [4, -1],
    ];

    const meshTri = new Mesh()
      .bufferData(positions, "aPosition", 2)
      .bufferIndex(indices);

    return meshTri;
  },
  cylinder: (mNumSeg = 12) => {
    const positions = [];
    const coords = [];
    const indices = [];
    const normals = [];
    let count = 0;

    const { sin, cos, PI } = Math;

    const getPos = (i, x, mRadius = 0.5, mCap = false) => {
      const a = (i / mNumSeg) * PI * 2.0;
      const y = cos(a) * mRadius;
      const z = sin(a) * mRadius;
      const normal = [0, y, z];
      vec3.normalize(normal, normal);
      if (mCap) {
        let n = x < 0 ? -1 : 1;
        vec3.set(normal, n, 0, 0);
      }
      return { pos: [x, y, z], normal };
    };

    let countCap = 0;
    for (let i = 0; i < mNumSeg; i++) {
      const c = getPos(i, -0.5, 0.5, true);
      const b = getPos(i + 1, -0.5, 0.5, true);
      const a = getPos(i + 1, -0.5, 0, true);

      positions.push(a.pos);
      positions.push(b.pos);
      positions.push(c.pos);
      coords.push([i / mNumSeg, 0]);
      coords.push([(i + 1) / mNumSeg, 0]);
      coords.push([i + 1 / mNumSeg, 0]);
      normals.push(a.normal);
      normals.push(b.normal);
      normals.push(c.normal);
      indices.push(countCap);
      indices.push(countCap + 1);
      indices.push(countCap + 2);
      countCap += 3;
    }

    for (let i = 0; i < mNumSeg; i++) {
      const a = getPos(i, 0.5, 0.5, true);
      const b = getPos(i + 1, 0.5, 0.5, true);
      const c = getPos(i + 1, 0.5, 0, true);

      positions.push(a.pos);
      positions.push(b.pos);
      positions.push(c.pos);
      coords.push([i / mNumSeg, 0]);
      coords.push([(i + 1) / mNumSeg, 0]);
      coords.push([i + 1 / mNumSeg, 0]);
      normals.push(a.normal);
      normals.push(b.normal);
      normals.push(c.normal);
      indices.push(countCap);
      indices.push(countCap + 1);
      indices.push(countCap + 2);
      countCap += 3;
    }

    for (let i = 0; i < mNumSeg; i++) {
      const a = getPos(i, -0.5);
      const b = getPos(i + 1, -0.5);
      const c = getPos(i + 1, 0.5);
      const d = getPos(i, 0.5);
      positions.push(a.pos);
      positions.push(b.pos);
      positions.push(c.pos);
      positions.push(d.pos);
      coords.push([i / mNumSeg, 0]);
      coords.push([(i + 1) / mNumSeg, 0]);
      coords.push([(i + 1) / mNumSeg, 1]);
      coords.push([i / mNumSeg, 1]);
      normals.push(a.normal);
      normals.push(b.normal);
      normals.push(c.normal);
      normals.push(d.normal);
      indices.push(count * 4 + 0 + countCap);
      indices.push(count * 4 + 1 + countCap);
      indices.push(count * 4 + 2 + countCap);
      indices.push(count * 4 + 0 + countCap);
      indices.push(count * 4 + 2 + countCap);
      indices.push(count * 4 + 3 + countCap);
      count++;
    }

    return new Mesh()
      .bufferVertex(positions)
      .bufferTexCoord(coords)
      .bufferNormal(normals)
      .bufferIndex(indices);
  },
};

export { Geom };
