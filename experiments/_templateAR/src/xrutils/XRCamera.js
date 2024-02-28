import { mat4 } from "gl-matrix";

export const projectionMatrix = mat4.create();
export const viewMatrix = mat4.create();
export let viewport = [0, 0, 0, 0];

let cameraTexture = null;

/**
 * Sets the camera properties for augmented reality rendering.
 *
 * @param {XRSession} session - The XR session.
 * @param {XRFrame} frame - The XR frame.
 * @param {XRReferenceSpace} xrRefSpace - The XR reference space.
 */
export function updateCamera(session, frame, xrRefSpace, binding) {
  const pose = frame.getViewerPose(xrRefSpace);
  if (!pose || pose.views.length === 0) {
    // console.warn("Viewer pose is not available or has no views.");
    return;
  }

  const view = pose.views[0];
  const { x, y, width, height } =
    session.renderState.baseLayer.getViewport(view);
  viewport = [x, y, width, height];

  mat4.copy(viewMatrix, view.transform.inverse.matrix);
  mat4.copy(projectionMatrix, view.projectionMatrix);

  // update camera texture
  cameraTexture = binding.getCameraImage(view.camera);
}

export function getCameraTexture() {
  return cameraTexture;
}
