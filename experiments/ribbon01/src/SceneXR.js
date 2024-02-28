import {
  GL,
  DrawBall,
  DrawAxis,
  DrawCopy,
  CameraPerspective,
  OrbitalControl,
  EaseNumber,
  FboPingPong,
  FrameBuffer,
  Object3D,
} from "alfrid";
import { bind, unbind, getViewport, onXRFrame, time, hitTest } from "./vrutils";
import Config from "./Config";
import Scheduler from "scheduling";
import { mat4 } from "gl-matrix";
import { random } from "./utils";

// Example code
import DrawHandRay from "./DrawHandRay";
import DrawBlocks from "./DrawBlocks";
import DrawSave from "./DrawSave";
import DrawDots from "./DrawDots";
import DrawSim from "./DrawSim";
import DrawRibbon from "./DrawRibbon";
import HandInput, { ON_DOWN, ON_DOUBLE_TAP } from "./vrutils/HandInput";

const drawRay = false;

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

    this.seed = random(100);

    // hit test
    this._mtxHit = mat4.create();
    this._container = new Object3D();
    this._containerParticles = new Object3D();
    this._container.addChild(this._containerParticles);

    // this._hands.right.on(ON_DOWN, () => {
    //   console.log("down");
    // });
    // this._hands.right.on(ON_DOUBLE_TAP, () => {
    //   const hit = hitTest();
    //   if (!!hit) {
    //     console.log("hit", hit);
    //     const mtxHit = mat4.clone(hit);
    //     this._anchors.push(mtxHit);
    //   }
    // });

    onXRFrame((frame, pos, refSpace) => this._onFrame(frame, pos, refSpace));
  }

  startDesktop() {
    this.resize();

    this.camera.setPerspective((70 * Math.PI) / 180, GL.aspectRatio, 0.1, 100);
    this.orbitalControl = new OrbitalControl(this.camera, 5, window);
    this.orbitalControl.radius.value = 10;

    Scheduler.addEF(() => this.renderDesktop());
  }

  _initTextures() {
    const { numParticles: num, numSets } = Config;
    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
    };

    this._fbo = new FboPingPong(num, num, oSettings, 3);
    const size = num * numSets;
    this._fboPos = new FrameBuffer(size, size, oSettings);
    this._fboPos.bind();
    GL.clear(0, 0, 0, 1);
    this._fboPos.unbind();
    this._index = 0;
  }

  present() {
    this._offsetOpen.value = 1;
    this._hasPresented = true;

    // reposition particles
    const scale = 0.25;
    this._containerParticles.scaleX =
      this._containerParticles.scaleY =
      this._containerParticles.scaleZ =
        scale;

    // this._containerParticles.y = 0.5;
    this._containerParticles.z = -0.5;
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dCopy = new DrawCopy();
    this._dBall = new DrawBall();
    this._drawHandRay = new DrawHandRay();

    this._drawBlocks = new DrawBlocks();
    this._drawDots = new DrawDots();
    this._drawSim = new DrawSim();
    this._drawRibbon = new DrawRibbon();

    // init particles
    new DrawSave().bindFrameBuffer(this._fbo.read).draw();
  }

  renderDesktop() {
    this.update();
    GL.viewport(0, 0, GL.width, GL.height);
    GL.clear(0, 0, 0, 0);
    GL.setMatrices(this.camera);
    this.renderScene();
  }

  update() {
    this._container.matrix;

    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .uniform("uTime", time + this.seed)
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .bindTexture("uVelMap", this._fbo.read.getTexture(1), 1)
      .bindTexture("uExtraMap", this._fbo.read.getTexture(2), 2)
      .draw();

    this._fbo.swap();

    // update position map
    const { numParticles: num, numSets: numSetsStr } = Config;
    const numSets = parseInt(numSetsStr);
    const tx = this._index % numSets;
    const ty = Math.floor(this._index / numSets);
    this._index++;
    if (this._index >= numSets * numSets) {
      this._index = 0;
    }

    GL.disable(GL.DEPTH_TEST);
    this._fboPos.bind();
    GL.viewport(tx * num, ty * num, num, num);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    this._fboPos.unbind();
  }

  _onFrame(frame, pose, refSpace) {
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

    views.forEach((view, i) => {
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

  renderScene() {
    let g = 0.005;

    const _time = Scheduler.getElapsedTime();
    // this._drawBlocks.uniform("uTime", _time).draw();
    GL.setModelMatrix(this._containerParticles.matrix);
    this._drawDots
      .bindTexture("uPosMap", this._fbo.read.getTexture(0), 0)
      .uniform("uViewport", [GL.width, GL.height])
      .draw();

    this._drawRibbon
      .bindTexture("uPosMap", this._fboPos.texture, 0)
      // .bindTexture("uDepthMap", tDepth, 1)
      .uniform("uIndex", this._index)
      // .uniform("uLight", this._lightPosition)
      // .uniform("uShadowMatrix", this.mtxShadow)
      .draw();

    GL.setModelMatrix(mat4.create());
    g = 0.1;
    const r = 5;
    this._dBall.draw([r, 0, 0], [g, g, g], [1, 0, 0]);
    this._dBall.draw([-r, 0, 0], [g, g, g], [1, 0, 0]);
    this._dBall.draw([0, r, 0], [g, g, g], [1, 0, 0]);
    this._dBall.draw([0, -r, 0], [g, g, g], [1, 0, 0]);
    this._dBall.draw([0, 0, r], [g, g, g], [1, 0, 0]);
    this._dBall.draw([0, 0, -r], [g, g, g], [1, 0, 0]);

    if (!this._hasPresented) {
      g = 400;
      GL.viewport(0, 0, g, g);
      this._dCopy.draw(this._fboPos.texture);
      return;
    }

    g = 0.005;
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

    // draw hit
    GL.setModelMatrix(this._mtxHit);
    g = 0.01;
    this._dBall.draw([0, 0, 0], [g, g, g], [1, 0, 0]);
  }

  resize() {
    const _resize = () => {
      const pixelRatio = 1.5;
      GL.setSize(
        window.innerWidth * pixelRatio,
        window.innerHeight * pixelRatio
      );
      if (this.camera) {
        this.camera.setAspectRatio(GL.aspectRatio);
      }
    };
    _resize();
    window.addEventListener("resize", _resize);
  }
}

export default SceneXR;
