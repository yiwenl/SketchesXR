import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";

export let isVRSupported = false;
let gl;
let cbSessionEnd;
let session;
let xrRefSpace;
let xrViewerSpace;
let frame;
let views = [];

export const checkSupported = function checkSupported() {
  return new Promise((resolve, reject) => {
    if (!navigator.xr) {
      resolve(false);
    } else {
      navigator.xr.isSessionSupported("immersive-vr").then((supported) => {
        isVRSupported = supported;
        resolve(supported);
      });
    }
  });
};

const makeXRCompatible = (mSession) => {
  console.log("Make XR Compatible");
  session = mSession;
  return new Promise((resolve, reject) => {
    gl.makeXRCompatible().then(() => {
      session.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl),
      });
      resolve(mSession);
    });
  });
};

const onSessionStarted = (session) => {
  console.log("session started", session);

  // session end call back
  session.onend = () => {
    cbSessionEnd && cbSessionEnd();
  };

  //   gl.makeXRCompatible().then(() => {
  //     session.updateRenderState({
  //       baseLayer: new XRWebGLLayer(session, gl),
  //     });
  //     session.requestReferenceSpace("local").then((refSpace) => {
  //       session.requestAnimationFrame(onXRFrame);
  //     });
  //   });
  // };
};

export function onSessionEnd(mCb) {
  cbSessionEnd = mCb;
  console.log("set on session end", cbSessionEnd);
}

export function init(mGl) {
  gl = mGl;
  return new Promise((resolve, reject) => {
    console.log("init xr");
    navigator.xr
      .requestSession("immersive-vr")
      .then(makeXRCompatible)
      .then(() => {
        // session end handling
        console.log("add session end handling");
        session.onend = () => {
          cbSessionEnd && cbSessionEnd();
        };

        session.requestReferenceSpace("local").then((refSpace) => {
          xrRefSpace = refSpace;

          loop();
          // set animation frame source
          Scheduler.setRequestAnimationFrameSource(session);
          resolve(gl);
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// animation frame
function loop(t, mFrame) {
  frame = mFrame;

  if (frame) {
    const pose = frame.getViewerPose(xrRefSpace);
    if (pose) {
      views = pose.views;
    }
  }

  session.requestAnimationFrame((t, frame) => loop(t, frame));
}

export function getViewport(view) {
  return session.renderState.baseLayer.getViewport(view);
}

// binding the framebuffer to draw
export function bind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer);
}

export function unbind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

export function getViews() {
  return views;
}
