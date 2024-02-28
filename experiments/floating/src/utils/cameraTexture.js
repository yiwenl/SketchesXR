import { Geom, GLShader, ShaderLibs, FrameBuffer, GL } from "alfrid";
// import { getCamera } from "../ARUtils";
import { getCameraTexture } from "../xrutils";

let mesh, shaderCopy, fboCamera, camTexture;

export const updateCameraTexture = () => {
  if (!mesh) {
    mesh = Geom.bigTriangle();
    shaderCopy = new GLShader(ShaderLibs.bigTriangleVert, ShaderLibs.copyFrag);
    fboCamera = new FrameBuffer(GL.width, GL.height);
    fboCamera.bind();
    GL.clear(0, 0, 0, 1);
    fboCamera.unbind();
  }

  camTexture = getCameraTexture();
  // console.log("camera texture ", camTexture);

  if (camTexture) {
    const { gl } = GL;
    fboCamera.bind();
    GL.clear(0, 0, 0, 1);

    shaderCopy.bind();
    gl.activeTexture(gl.TEXTURE0);
    const uniformLoc = gl.getUniformLocation(shaderCopy.shaderProgram, "uMap");
    gl.uniform1i(uniformLoc, 0);
    shaderCopy.uniform("uMap", "int", 0);
    GL.draw(mesh);
    fboCamera.unbind();
  }
};

export const getCamera = () => {
  return fboCamera.texture;
};
