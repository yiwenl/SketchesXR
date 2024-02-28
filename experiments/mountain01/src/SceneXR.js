import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  CameraPerspective,
  OrbitalControl,
  FrameBuffer,
  FboPingPong,
  EaseNumber,
} from "alfrid";
import { bind, unbind, getViewport, onXRFrame, time, hitTest } from "./vrutils";
import Scheduler from "scheduling";
import { vec3, mat4 } from "gl-matrix";
import { getMonoColor } from "./utils";
import Config from "./Config";

// interaction
import HandInput, { ON_UP, ON_DRAG } from "./vrutils/HandInput";

// Example code
import DrawHandRay from "./DrawHandRay";
import DrawMountain from "./DrawMountain";
import DrawSave from "./DrawSave";
import DrawParticles from "./DrawParticles";
import DrawSim from "./DrawSim";
import DrawBlocks from "./DrawBlocks";
import adjustParticles from "./adjustParticles";

// textures
import generateHeightMap from "./generateHeightMap";
import generateBaseMap from "./generateBaseMap";
import generateInkTexture from "./generateInkTexture";

const drawRay = false;
const drawHand = false;

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

    this._mtxHit = mat4.create();

    this._initInteraction();

    // hit test

    // this._hands.right.on(ON_UP, () => {
    //   const hit = hitTest();
    //   if (!!hit) {
    //     const mtxHit = mat4.clone(hit);
    //     this._anchors.push(mtxHit);
    //   }
    // });

    onXRFrame((frame, pos, refSpace) => this._onFrame(frame, pos, refSpace));
  }

  _initInteraction() {
    this._mtxMountain = mat4.create();
    this._mtxMountainInv = mat4.create();

    this._hands.left.on(ON_UP, () => {
      const hit = hitTest();
      if (!!hit) {
        mat4.copy(this._mtxMountain, hit);
        mat4.invert(this._mtxMountainInv, this._mtxMountain);
      }
    });

    this._touchLeft = [999, 999, 999];
    this._touchRight = [999, 999, 999];

    ["right"].forEach((s) => {
      const tipName = s.substring(0, 1).toUpperCase() + s.substring(1);
      this._hands[s].on(ON_DRAG, (e) => {
        vec3.copy(this[`_touch${tipName}`], e.position);

        vec3.transformMat4(
          this[`_touch${tipName}`],
          this[`_touch${tipName}`],
          this._mtxMountainInv
        );
      });

      this._hands[s].on(ON_UP, () => {
        vec3.set(this[`_touch${tipName}`], 999, 999, 999);
      });
    });
  }

  startDesktop() {
    this.camera.setPerspective((70 * Math.PI) / 180, GL.aspectRatio, 0.1, 100);
    this.orbitalControl = new OrbitalControl(this.camera, 1, window);
    this.orbitalControl.rx.value = -0.5;
    this.orbitalControl.ry.value = -0.3;

    Scheduler.addEF(() => this.renderDesktop());
  }

  _initTextures() {
    this._textureHeight = generateHeightMap();
    this._textureInk = generateInkTexture();
    this._textureBase = generateBaseMap(Math.random());

    const { numParticles: num } = Config;
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };
    this._fbo = new FboPingPong(num, num, oSettings, 5);
    this._fboPosOrg = new FrameBuffer(num, num, oSettings);
  }

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
    this._drawSim = new DrawSim();
    this._drawMountain = new DrawMountain();
    this._drawParticles = new DrawParticles();
    new DrawSave(this._drawMountain.size * 0.5)
      .bindFrameBuffer(this._fbo.read)
      .draw();

    adjustParticles(
      this._fbo,
      this._drawMountain.size * 0.5,
      this._textureInk,
      this._textureHeight
    );

    this._fboPosOrg.bind();
    GL.clear(0, 0, 0, 0);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPosOrg.unbind();
  }

  update() {
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 3)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 4)
      .bindTexture("uPosOrgMap", this._fboPosOrg.texture, 5)
      .uniform("uTime", time)
      .uniform("uTouchLeft", this._touchLeft)
      .uniform("uTouchRight", this._touchRight)
      .draw();

    this._fbo.swap();
  }

  renderScene() {
    let g = 0.005;
    GL.setModelMatrix(this._mtxMountain);

    this._drawMountain
      .bindTexture("uHeightMap", this._textureHeight, 0)
      .bindTexture("uInkMap", this._textureInk, 1)
      .bindTexture("uBaseMap", this._textureBase, 2)
      .draw();

    let r = this._drawMountain.size * 0.5;

    this._dBall.draw(this._touchLeft, [g, g, g], [1, 0.5, 0]);
    this._dBall.draw(this._touchRight, [g, g, g], [1, 0.5, 0]);

    this._drawParticles
      // this._drawBlocks
      .uniform("uViewport", [GL.width, GL.height])
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uDataMap", this._fbo.read.getTexture(3), 2)
      .bindTexture("uColorMap", this._fbo.read.getTexture(4), 3)
      .draw();

    if (!this._hasPresented) {
      g = 2;
      GL.viewport(0, 0, g, g);
      this._dCopy.draw(this._fbo.read.getTexture(3));
      GL.viewport(g, 0, g, g);
      this._dCopy.draw(this._fbo.read.getTexture(0));
      GL.viewport(g * 2, 0, g, g);
      this._dCopy.draw(this._fboPosOrg.texture);
      // this._dCopy.draw(this._textureInk);
      // this._dCopy.draw(this._textureBase);
      // this._dCopy.draw(this._textureHeight);

      return;
    }

    if (drawHand) {
      for (let s in this._hands) {
        const input = this._hands[s];
        const { matrix, joints, position } = input;
        // draw hand joints
        GL.setModelMatrix(mat4.create());
        joints.forEach((p) => {
          this._dBall.draw(p, [g, g, g], [1, 0.5, 0]);
        });
        this._dBall.draw(position, [g, g, g], [1, 0.5, 0]);

        // draw ray
        if (drawRay) {
          GL.setModelMatrix(matrix);
          this._drawHandRay.draw();
        }
      }
    }

    // draw hit
    GL.setModelMatrix(this._mtxHit);
    g = 0.01;
    this._dBall.draw([0, 0, 0], [g, g, g], [1, 0, 0]);
  }

  renderDesktop() {
    this.update();
    GL.viewport(0, 0, GL.width, GL.height);
    GL.clear(...getMonoColor(0.1), 1);
    GL.setMatrices(this.camera);
    this.renderScene();
  }

  _onFrame(frame, pose, refSpace) {
    // update system
    this.update();

    // rendering
    if (!pose) {
      console.log("no pose");
      return;
    }
    const { views } = pose;
    const { session } = frame;

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

    views.forEach((view) => {
      const { x, y, width, height } = getViewport(view, session);
      this.camera.setFromViewProjection(
        view.transform.inverse.matrix,
        view.projectionMatrix
      );
      GL.setMatrices(this.camera);
      GL.viewport(x, y, width, height);
      this.renderScene();
    });
    unbind();
  }
}

export default SceneXR;
