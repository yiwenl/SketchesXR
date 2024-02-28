import { makeXRCompatible } from "./XRRenderer.js";
import { initHitTesting } from "./XRInput.js";
import { updateCamera } from "./XRCamera.js";
import Scheduler from "scheduling";

export let frame = null;
export let xrRefSpace = null;
let session = null;
let cbSessionEnd = null;
let webglBinding = null;

/**
 * Manages the XR session and provides utility functions for XR session management.
 * @module XRSessionManager
 */

/**
 * Initializes the XR session.
 * @param {WebGLRenderingContext} gl - The WebGL rendering context.
 * @returns {Promise<void>} A promise that resolves when the XR session is initialized.
 */
export async function initXRSession(gl) {
  // Initialization code
  session = await navigator.xr.requestSession("immersive-ar", {
    optionalFeatures: ["dom-overlay"], // for touch events
    domOverlay: { root: document.querySelector(".container") },
    requiredFeatures: ["local", "hit-test", "camera-access"],
  });
  webglBinding = await makeXRCompatible(session, gl);
  xrRefSpace = await session.requestReferenceSpace("local");
  await initHitTesting(session);

  session.onend = () => {
    // Session end handling
    // endXRSession();
    console.log("session ended");
    cbSessionEnd?.();
  };

  // Additional setup
  Scheduler.setRequestAnimationFrameSource(session);

  loop();
}

/**
 * Starts the XR session loop.
 * @param {Function} callback - The callback function to be called on each XR frame.
 */
export function startXRSessionLoop(callback) {
  // Start session loop
  function onXRFrame(time, frame) {
    callback(time, frame, session, xrRefSpace);
    session.requestAnimationFrame(onXRFrame);
  }

  session.requestAnimationFrame(onXRFrame);
}

/**
 * Ends the XR session.
 */
export function endXRSession() {
  // End session code
  console.log("endXRSession", session, session.end);
  if (session) session.end();
}

/**
 * Sets a callback function to be called when the XR session ends.
 * @param {Function} callback - The callback function to be called when the XR session ends.
 */
export function onSessionEnd(mCb) {
  cbSessionEnd = mCb;
}

// ... other session management functions ...
function loop(t, mFrame) {
  if (mFrame) {
    frame = mFrame;
    updateCamera(session, mFrame, xrRefSpace, webglBinding);
  }

  session.requestAnimationFrame((t, frame) => loop(t, frame));
}
