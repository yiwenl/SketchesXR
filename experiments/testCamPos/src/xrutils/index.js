export {
  initXRSession,
  onSessionEnd,
  endXRSession,
  frame,
  xrRefSpace,
} from "./XRSessionManager.js";

export {
  projectionMatrix,
  viewMatrix,
  viewport,
  getCameraTexture,
} from "./XRCamera.js";

export { bind, unbind } from "./XRRenderer.js";
export { hitTest } from "./XRInput.js";

export let isARSupported = false;

/**
 * Checks if the WebXR API is available in the browser and if the immersive AR session is supported.
 * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether AR is supported or not.
 * @throws {Error} If the WebXR API is not available or if there is an error checking AR support.
 */
export function checkARSupport() {
  return new Promise((resolve, reject) => {
    if (!navigator.xr) {
      reject(new Error("WebXR API is not available in this browser."));
    } else {
      navigator.xr
        .isSessionSupported("immersive-ar")
        .then((supported) => {
          isARSupported = supported;
          resolve(supported);
        })
        .catch((error) =>
          reject(new Error("Error checking AR support: " + error.message))
        );
    }
  });
}
