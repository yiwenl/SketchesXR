import { Draw, Geom, GL, GLShader, FrameBuffer, ShaderLibs } from "alfrid";

import vs from "shaders/depth.vert";
import fs from "shaders/depth.frag";

let meshTri, shaderCopy;

let hasError = false;

export default class DrawDepth extends Draw {
  constructor() {
    super();

    const s = 0.5;
    const mesh = Geom.plane(s, s, 1);
    if (!meshTri) {
      meshTri = Geom.bigTriangle();
      shaderCopy = new GLShader(
        ShaderLibs.bigTriangleVert,
        ShaderLibs.copyFrag
      );
    }

    this.setMesh(mesh).useProgram(vs, fs);
    this._fboDepth = new FrameBuffer(2, 2);
    this._fboDepth.bind();
    GL.clear(1, 0, 0, 1);
    this._fboDepth.unbind();
  }

  updateDepthTexture(mDepthInfo) {
    if (hasError) {
      return;
    }
    const { gl } = GL;
    const {
      width,
      height,
      texture,
      rawValueToMeters,
      normDepthBufferFromNormView: { matrix },
    } = mDepthInfo;

    if (!this.fboDepth) {
      console.log("create depth fbo", width, height);
      this.fboDepth = new FrameBuffer(width, height);
    }

    // console.log("Update Depth Texture", mDepthInfo);

    this.fboDepth.bind();
    GL.clear(0, 0, 1, 1);

    try {
      shaderCopy.bind();
      gl.activeTexture(gl.TEXTURE0);
      const uniformLoc = gl.getUniformLocation(
        shaderCopy.shaderProgram,
        "uMap"
      );
      // shaderCopy.uniform("uMap", "int", 0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.activeTexture(gl.TEXTURE1);
      gl.uniform1i(uniformLoc, 1);

      GL.draw(meshTri);
    } catch (e) {
      console.log("Error in DrawDepth", e);
      hasError = true;
    }

    this.fboDepth.unbind();

    this.bindTexture("uDepthMap", this.fboDepth.texture)
      .uniform("uUvTransform", matrix)
      .uniform("uRawValueToMeters", rawValueToMeters);
  }

  draw(mDepthTexture, mTransform, mValueToMeters = 1) {
    // const { gl } = GL;
    // const { _shader: shader } = this;
    // shader.bind();
    // const uniformLoc = gl.getUniformLocation(shader.shaderProgram, "uDepthMap");
    // shader.uniform("uDepthMap", "int", 0);
    // gl.bindTexture(gl.TEXTURE_2D, mDepthTexture);
    // gl.activeTexture(gl.TEXTURE1);
    // gl.uniform1i(uniformLoc, 1);

    this.uniform("uUvTransform", mTransform)
      .uniform("uRawValueToMeters", mValueToMeters)
      .bindTexture("uDepthMap", this._fboDepth.texture, 0);

    // GL.draw(this._mesh);
    super.draw();
  }
}
