let gl;
let session;

export const makeXRCompatible = (mSession, mGl) => {
  gl = mGl;
  session = mSession;

  return new Promise((resolve, reject) => {
    mGl
      .makeXRCompatible()
      .then(() => {
        mSession.updateRenderState({
          baseLayer: new XRWebGLLayer(mSession, mGl),
        });
        resolve(new XRWebGLBinding(session, gl));
      })
      .catch((error) => {
        reject(new Error("Failed to make XR compatible: " + error.message));
      });
  });
};

export function bind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer);
}

export function unbind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}
