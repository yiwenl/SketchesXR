import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";

export let isVRSupported = false;
export let time = 0;
let gl;
let cbXRFrame;
let xrRefSpace;
let xrInlineRefSpace;
let xrHitTestSource;
let xrViewerSpace;
let cbSessionEnd;
let views = [];
let frameImmersive;
let mtxHit = mat4.create();

let binding;

export async function checkSupportedSync() {
  if (!navigator.xr) {
    isVRSupported = false;
    return false;
  } else {
    const supported = await navigator.xr.isSessionSupported("immersive-ar");
    isVRSupported = supported;
    return supported;
  }
}

export const checkSupported = function checkSupported() {
  return new Promise((resolve, reject) => {
    if (!navigator.xr) {
      resolve(false);
    } else {
      navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        isVRSupported = supported;
        resolve(supported);
      });
    }
  });
};

function onSessionEnded() {
  console.log("session ended");
  cbSessionEnd?.();
}

function _onXRFrame(t, frame) {
  time = t;
  const { session } = frame;

  let refSpace = session.isImmersive ? xrRefSpace : xrInlineRefSpace;
  let pose = frame.getViewerPose(refSpace);
  if (session.isImmersive) {
    frameImmersive = frame;
  }

  if (pose && !binding && session.isImmersive) {
    binding = new XRWebGLBinding(session, gl);
  }

  if (pose && cbXRFrame) {
    cbXRFrame(frame, pose, refSpace);
  }

  session.requestAnimationFrame(_onXRFrame);
}

async function initHitTest(session) {
  xrViewerSpace = await session.requestReferenceSpace("viewer");
  xrHitTestSource = await session.requestHitTestSource({
    space: xrViewerSpace,
  });
  // console.log("init Hit testing", xrViewerSpace, xrHitTestSource);
}

const onSessionStarted = (session) => {
  // end session handling
  session.addEventListener("end", onSessionEnded);

  // update render state
  session.updateRenderState({ baseLayer: new XRWebGLLayer(session, gl) });

  // ref space
  let refSpaceType = session.isImmersive ? "local" : "viewer";

  session.requestReferenceSpace(refSpaceType).then((refSpace) => {
    if (session.isImmersive) {
      xrRefSpace = refSpace;

      // hit testing
      initHitTest(session);

      Scheduler.setRequestAnimationFrameSource(session);
    } else {
      xrInlineRefSpace = refSpace;
    }
    session.requestAnimationFrame(_onXRFrame);
  });
};

export function hitTest() {
  if (xrHitTestSource) {
    const hitTestResults = frameImmersive.getHitTestResults(xrHitTestSource);
    if (hitTestResults.length > 0) {
      const pose = hitTestResults[0].getPose(xrRefSpace);
      mat4.copy(mtxHit, pose.transform.matrix);
      return mtxHit;
    } else {
      return null;
    }
  }
  return null;
}

export function onXRFrame(mCb) {
  cbXRFrame = mCb;
}

export function onSessionEnd(mCb) {
  cbSessionEnd = mCb;
}

export function initInline(mGL) {
  gl = mGL;
  navigator.xr.requestSession("inline").then(onSessionStarted);
}

export function init(mGL) {
  if (gl === undefined) {
    gl = mGL;
  }
  const optionalFeatures = ["hand-tracking"];
  const requiredFeatures = [
    "local",
    "hit-test",
    "mesh-detection",
    "depth-sensing",
  ];

  return new Promise((resolve, reject) => {
    navigator.xr
      .requestSession("immersive-ar", {
        requiredFeatures,
        optionalFeatures,
        depthSensing: {
          usagePreference: ["gpu-optimized"],
          dataFormatPreference: ["float32"],
        },
      })
      .then((session) => {
        // set immersive flag
        session.isImmersive = true;

        console.log("Depth Sensing :", session);
        console.log(session.depthUsage);
        console.log(session.depthDataFormat);
        console.table(session.enabledFeatures);

        // Other setup, for example prepare appropriate shader depending on
        // the depth data format if using WebGL to access the data.

        onSessionStarted(session);
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
    // .requestSession("inline")
  });
}

export function getViewport(mView, mSession) {
  return mSession.renderState.baseLayer.getViewport(mView);
}

// binding the framebuffer to draw
export function bind(mSession) {
  gl.bindFramebuffer(
    gl.FRAMEBUFFER,
    mSession.renderState.baseLayer.framebuffer
  );
}

export function unbind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

export function getViews() {
  return views;
}

export function getBinding() {
  return binding;
}
