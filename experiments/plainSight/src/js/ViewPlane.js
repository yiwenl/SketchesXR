import alfrid, { GL } from "alfrid";

import vs from "shaders/plane.vert";

let bCopy;

const random = (min, max) => {
  return min + Math.random() * (max - min);
};

class ViewPlane extends alfrid.View {
  constructor() {
    super(vs);
  }

  _init() {
    if (!bCopy) {
      bCopy = new alfrid.BatchCopy();
    }
    this._fbo = new alfrid.FrameBuffer(GL.width, GL.height);

    const w = random(0.5, 1);
    const h = random(0.5, 1);

    this.mesh = alfrid.Geom.plane(w, h, 1);
    this._position = [0, 0, 0];
    this.z = -3;
  }

  capture(camera, texture) {
    this._fbo.bind();
    GL.clear(0, 0, 0, 0);
    bCopy.draw(texture);
    this._fbo.unbind();
  }

  render() {
    this.shader.bind();
    this.shader.uniform("uPosition", "vec3", this._position);
    this.shader.uniform("texture", "uniform1i", 0);
    this.texture.bind(0);
    GL.draw(this.mesh);
  }

  get texture() {
    return this._fbo.getTexture();
  }

  get x() {
    return this._position[0];
  }
  set x(value) {
    this._position[0] = value;
  }

  get y() {
    return this._position[1];
  }
  set y(value) {
    this._position[1] = value;
  }

  get z() {
    return this._position[2];
  }
  set z(value) {
    this._position[2] = value;
  }
}

export default ViewPlane;
