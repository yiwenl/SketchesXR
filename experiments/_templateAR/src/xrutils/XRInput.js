import { frame, xrRefSpace } from "./XRSessionManager";

let xrHitTestSource = null;

export async function initHitTesting(session) {
  try {
    const refSpace = await session.requestReferenceSpace("viewer");
    const hitTestSource = await session.requestHitTestSource({
      space: refSpace,
    });
    xrHitTestSource = hitTestSource;
    return { refSpace, hitTestSource }; // Return the relevant objects
  } catch (error) {
    throw new Error("Failed to initialize hit testing: " + error.message);
  }
}

export function hitTest() {
  if (!frame) return null;
  const hitTestResults = frame.getHitTestResults(xrHitTestSource);
  if (hitTestResults.length > 0) {
    const pose = hitTestResults[0].getPose(xrRefSpace);
    return pose.transform.matrix;
  } else {
    return null;
  }
}
