import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";
import { createCanvas } from "./utils/setupProject2D";

let isARSupported = false;

// webgl
let canvas;
let gl;

// xr
let session;
let xrRefSpace;
let xrViewerSpace;
let xrHitTestSource;
let frame;
let cbSessionEnd;
let binding;
let cameraTexture;
let fboCamera;
let dCopy;
let depthInfo;
let depthImageSource;
let ctxDepthSource;
let depthImage;
let ctxDepth;

let mtxHit = mat4.create();

const checkSupported = function checkSupported() {
  return new Promise((resolve, reject) => {
    if (!navigator.xr) {
      resolve(false);
    } else {
      navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        isARSupported = supported;
        resolve(supported);
      });
    }
  });
};

const makeXRCompatible = (mSession) => {
  session = mSession;
  return new Promise((resolve, reject) => {
    gl.makeXRCompatible().then(() => {
      session.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl),
      });
      resolve();
    });
  });
};

const initHitTesting = () => {
  return new Promise((resolve, reject) => {
    session.requestReferenceSpace("viewer").then((refSpace) => {
      xrViewerSpace = refSpace;
      session
        .requestHitTestSource({ space: xrViewerSpace })
        .then((hitTestSource) => {
          xrHitTestSource = hitTestSource;
          resolve();
        });
    });
  });
};

const init = function (mGl) {
  gl = mGl;
  return new Promise((resolve, reject) => {
    navigator.xr
      .requestSession("immersive-ar", {
        optionalFeatures: ["dom-overlay"],
        domOverlay: { root: document.querySelector(".container") },
        requiredFeatures: [
          "depth-sensing",
          "local",
          "hit-test",
          "camera-access",
        ],
        depthSensing: {
          usagePreference: ["cpu-optimized"],
          dataFormatPreference: ["luminance-alpha"],
        },
      })
      .then(makeXRCompatible)
      .then(initHitTesting)
      .then(() => {
        // session end handling
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
};

// animation frame
function loop(t, mFrame) {
  frame = mFrame;
  session.requestAnimationFrame((t, frame) => loop(t, frame));
}

// binding the framebuffer to draw
function bind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer);
}

const upateDepthImage = (mDepthInfo) => {
  const { width, height, data, rawValueToMeters } = mDepthInfo;
  if (!depthImage) {
    const oDepthSource = createCanvas(width, height);
    const oDepth = createCanvas(height, width);
    depthImageSource = oDepthSource.canvas;
    ctxDepthSource = oDepthSource.ctx;

    depthImage = oDepth.canvas;
    ctxDepth = oDepth.ctx;
  }

  const numArr = [];
  const dataArr = new Uint16Array(data);
  for (let i = 0; i < width * height; i++) {
    numArr.push(dataArr[i] * rawValueToMeters);
  }

  const depthLimit = 1.0;
  const colorArray = numArr
    .map((val) => {
      if (val <= 0) {
        return [0, 0, 0, 1];
      } else {
        const g = 1 - val / depthLimit;
        return [g, g, g, 1];
      }
    })
    .flat()
    .map((val) => val * 255.0);

  const colorBuffer = new Uint8ClampedArray(colorArray);
  const imageData = new ImageData(colorBuffer, width);
  ctxDepthSource.putImageData(imageData, 0, 0);

  ctxDepth.save();
  ctxDepth.translate(height, 0);
  ctxDepth.rotate(Math.PI * 0.5);
  ctxDepth.drawImage(depthImageSource, 0, 0);
  ctxDepth.restore();
};

function getDepthImage() {
  return depthImage;
}

// set the camera from XRFrame.pose
function setCamera(GL, mCamera, mBind = true) {
  if (!session || !frame) {
    return;
  }

  const pose = frame.getViewerPose(xrRefSpace);

  if (pose) {
    if (!binding) {
      binding = new XRWebGLBinding(session, gl);
    }
    const view = pose.views[0]; // ar has only 1 view
    const { x, y, width, height } =
      session.renderState.baseLayer.getViewport(view);
    mCamera.setFromViewProjection(
      view.transform.inverse.matrix,
      view.projectionMatrix
    );

    // get camera texture
    // cameraTexture = binding.getCameraImage(view.camera);

    GL.setMatrices(mCamera);
    GL.viewport(x, y, width, height);

    if (mBind) {
      bind();
    }
  }
}

// get hit test result
function hitTest() {
  if (!frame || !xrHitTestSource) {
    return null;
  }

  const hitTestResults = frame.getHitTestResults(xrHitTestSource);
  if (hitTestResults.length > 0) {
    const pose = hitTestResults[0].getPose(xrRefSpace);
    mat4.copy(mtxHit, pose.transform.matrix);
    return mtxHit;
  } else {
    return null;
  }
}

// session end callback
function onSessionEnd(mCb) {
  cbSessionEnd = mCb;
}

function getCameraTexture() {
  return cameraTexture;
}

export {
  isARSupported,
  session,
  canvas,
  gl,
  checkSupported,
  init,
  setCamera,
  bind,
  hitTest,
  onSessionEnd,
  getCameraTexture,
  getDepthImage,
};
