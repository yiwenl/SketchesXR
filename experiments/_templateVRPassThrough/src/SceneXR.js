import {
  GL,
  Geom,
  Mesh,
  Draw,
  DrawBall,
  DrawAxis,
  DrawCopy,
  CameraPerspective,
  OrbitalControl,
  EaseNumber,
} from "alfrid";
import {
  bind,
  unbind,
  getViewport,
  onXRFrame,
  time,
  hitTest,
  getBinding,
} from "./vrutils";
import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";

// Example code
import DrawHandRay from "./DrawHandRay";
import DrawBlocks from "./DrawBlocks";
import HandInput, { ON_DOWN, ON_DOUBLE_TAP } from "./vrutils/HandInput";

import DrawDepth from "./vrutils/DrawDepth";

// shaders
import vs from "shaders/basic.vert";
import fs from "shaders/color.frag";

const drawRay = false;
let logCount = 0;

class SceneXR {
  constructor() {
    // camera
    this.camera = new CameraPerspective();

    this._initTextures();
    this._initViews();

    // states
    this._offsetOpen = new EaseNumber(1);
    this._hasPresented = false;

    // hand tracking
    this._hands = {
      left: new HandInput(),
      right: new HandInput(),
    };

    // hit test
    this._mtxHit = mat4.create();

    this._anchors = [];
    this._depths = [];

    this._hands.right.on(ON_DOWN, () => {
      console.log("down");
    });
    this._hands.right.on(ON_DOUBLE_TAP, () => {
      const hit = hitTest();
      if (!!hit) {
        console.log("hit", hit);
        const mtxHit = mat4.clone(hit);
        this._anchors.push(mtxHit);
      }
    });

    onXRFrame((frame, pos, refSpace) => this._onFrame(frame, pos, refSpace));
  }

  startDesktop() {
    this.camera.setPerspective((70 * Math.PI) / 180, GL.aspectRatio, 0.1, 100);
    this.orbitalControl = new OrbitalControl(this.camera, 5, window);

    Scheduler.addEF(() => this.renderDesktop());
  }

  _initTextures() {}

  present() {
    this._offsetOpen.value = 1;
    this._hasPresented = true;
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._drawHandRay = new DrawHandRay();

    this._drawBlocks = new DrawBlocks();

    // mesh detection
    this._hasRoomMesh = false;
    this._meshRoom = new Mesh(GL.LINES);
    this._drawRoom = new Draw().useProgram(vs, fs);
    this._mtxRoom = mat4.create();
    this._lastChangedTime = 0;

    // depth
    this._drawDepth = new DrawDepth();
  }

  renderDesktop() {
    GL.viewport(0, 0, GL.width, GL.height);
    GL.clear(0, 0, 0, 0);
    GL.setMatrices(this.camera);
    this.renderScene();
  }

  _updateDetectedMeshes(frame, refSpace, detectedMeshes) {
    detectedMeshes.forEach((mesh) => {
      const { vertices, indices, meshSpace, lastChangedTime } = mesh;

      const pose = frame.getPose(meshSpace, refSpace);
      const {
        transform: { matrix },
      } = pose;
      mat4.copy(this._mtxRoom, matrix);

      if (lastChangedTime !== this._lastChangedTime) {
        const positions = [];

        for (let i = 0; i < vertices.length; i += 3) {
          positions.push([vertices[i], vertices[i + 1], vertices[i + 2]]);
        }
        this._meshRoom.bufferVertex(positions).bufferIndex(indices);
        this._lastChangedTime = lastChangedTime;
        this._drawRoom.setMesh(this._meshRoom);
      }
    });

    this._hasRoomMesh = true;
  }

  _onFrame(frame, pose, refSpace) {
    // rendering
    if (!pose) {
      console.log("no pose");
      return;
    }
    const { views } = pose;
    const { session, detectedMeshes } = frame;
    const binding = getBinding();

    // mesh detection
    if (detectedMeshes.size > 0) {
      this._updateDetectedMeshes(frame, refSpace, detectedMeshes);
    }

    // if (session.isImmersive) {
    this._depths = [];
    if (session.enabledFeatures.indexOf("depth-sensing") > -1) {
      for (const view of views) {
        const depthInformation = binding.getDepthInformation(view);
        if (depthInformation) {
          this._depths.push(depthInformation);
          // if (this._depths.length === 1) {
          //   this._drawDepth.updateDepthTexture(depthInformation);
          // }
        }
      }
    }

    const hit = hitTest();
    if (!!hit) {
      mat4.copy(this._mtxHit, hit);
    } else {
      mat4.identity(this._mtxHit);
    }

    if (!!refSpace) {
      for (let inputSource of session.inputSources) {
        const { handedness } = inputSource;
        const input = this._hands[handedness];
        if (input) {
          input.update(frame, inputSource, refSpace);
        } else {
          console.log("input missing", inputSource);
        }
      }
    }

    bind(session);
    if (views.length === 1) {
      GL.clear(0, 0, 0, 1);
    }

    views.forEach((view, i) => {
      const { x, y, width, height } = getViewport(view, session);
      this.camera.setFromViewProjection(
        view.transform.inverse.matrix,
        view.projectionMatrix
      );
      GL.setMatrices(this.camera);
      GL.viewport(x, y, width, height);
      this.renderScene(i);
    });
    unbind();
  }

  renderScene(mIndex = 0) {
    let g = 0.005;
    GL.setModelMatrix(mat4.create());

    // console.log("Render index", mIndex);

    if (!this._hasPresented) {
      return;
    }
    // for (let s in this._hands) {
    //   const input = this._hands[s];
    //   const { matrix, joints, position } = input;
    //   // draw hand joints
    //   GL.setModelMatrix(mat4.create());
    //   joints.forEach((p) => {
    //     this._dBall.draw(p, [g, g, g], [1, 0.5, 0]);
    //   });
    //   this._dBall.draw(position, [g, g, g], [1, 0.5, 0]);

    //   // draw ray
    //   if (drawRay) {
    //     GL.setModelMatrix(matrix);
    //     this._drawHandRay.draw();
    //   }
    // }

    // draw depth
    if (this._depths.length > 0) {
      const {
        texture,
        rawValueToMeters,
        normDepthBufferFromNormView: { matrix },
      } = this._depths[0];
      this._drawDepth.draw(texture, matrix, rawValueToMeters);
    }

    // // draw hit
    // GL.setModelMatrix(this._mtxHit);
    // g = 0.01;
    // this._dBall.draw([0, 0, 0], [g, g, g], [1, 0, 0]);

    // g = 0.015;
    // this._anchors.forEach((mtx) => {
    //   GL.setModelMatrix(mtx);
    //   this._dBall.draw([0, 0, 0], [g, g, g], [1, 0.5, 0]);
    // });

    // // render room
    // if (this._hasRoomMesh && 0) {
    //   GL.setModelMatrix(this._mtxRoom);
    //   this._drawRoom
    //     .uniform("uColor", [0, 1, 0])
    //     .uniform("uOpacity", 0.1)
    //     .draw();
    // }
  }
}

export default SceneXR;
