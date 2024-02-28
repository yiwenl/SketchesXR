import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";
import { GL, GLTexture } from "alfrid";

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
let mtxHit = mat4.create();

// camera texture
let cameraTexture;
let _textureCam;
let _textureDepth;

export async function checkSupported() {
  if (!navigator.xr) {
    isARSupported = false;
  } else {
    isARSupported = await navigator.xr.isSessionSupported("immersive-ar");
  }

  return isARSupported;
}

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

export function init(mGl) {
  gl = mGl;
  return new Promise((resolve, reject) => {
    navigator.xr
      .requestSession("immersive-ar", {
        optionalFeatures: ["dom-overlay"],
        domOverlay: { root: document.querySelector(".container") },
        requiredFeatures: [
          "local",
          "hit-test",
          "camera-access",
          "depth-sensing",
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

        console.log("Depth Sensing :", session);
        console.log(session.depthUsage);
        console.log(session.depthDataFormat);
        console.table(session.enabledFeatures);

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
  session.requestAnimationFrame((t, frame) => loop(t, frame));
}

// binding the framebuffer to draw
export function bind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer);
}

export function unbind() {
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

// set the camera from XRFrame.pose
export function setCamera(GL, mCamera, mBind = true) {
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
    cameraTexture = binding.getCameraImage(view.camera);
    if (!_textureCam) {
      _textureCam = new GLTexture(cameraTexture);
    } else {
      _textureCam.updateTexture(cameraTexture);
    }

    // depth sensing
    const depthInfo = frame.getDepthInformation(view);
    if (depthInfo !== null) {
      // console.log("depth", depthInfo);
      const { width, height, data } = depthInfo;
      if (!_textureDepth) {
        _textureDepth = new GLTexture(
          data,
          {
            type: GL.UNSIGNED_BYTE,
            minFilter: GL.NEAREST,
            magFilter: GL.NEAREST,
          },
          width,
          height
        );
      } else {
        _textureDepth.updateTexture(data);
      }
    }

    GL.setMatrices(mCamera);
    GL.viewport(x, y, width, height);

    if (mBind) {
      bind();
    }
  }
}

// get hit test result
export function hitTest() {
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
export function onSessionEnd(mCb) {
  cbSessionEnd = mCb;
}

export function getCameraTexture() {
  return _textureCam;
}

export function getDepthTexture() {
  return _textureDepth;
}

export { isARSupported, session, canvas, gl };
