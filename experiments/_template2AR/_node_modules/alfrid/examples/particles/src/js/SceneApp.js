import {
  GL,
  Scene,
  FboPingPong,
  Draw,
  DrawAxis,
  DrawDotsPlane,
  DrawCopy,
  ShaderLibs,
  Geom,
} from "alfrid";
import Config from "./Config";
import Scheduler from "scheduling";

// draw calls
import DrawSave from "./DrawSave";
import DrawRender from "./DrawRender";

// shaders
import vsSim from "shaders/sim.vert";
import fsSim from "shaders/sim.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
    this.orbitalControl.radius.value = 15;
    this.resize();
  }

  _initTextures() {
    console.log("init textures");
    const { num } = Config;

    const oSettings = {
      type: GL.FLOAT,
      minFilter: GL.NEAREST,
      magFilter: GL.NEAREST,
      mipmap: false,
    };

    this._fbo = new FboPingPong(num, num, oSettings, 4);
  }

  _initViews() {
    console.log("init views");

    this._dAxis = new DrawAxis();
    this._dDots = new DrawDotsPlane();
    this._dCopy = new DrawCopy();

    const drawSave = new DrawSave();
    drawSave.bindFrameBuffer(this._fbo.read).draw();

    this._drawRender = new DrawRender();
    this._drawSim = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vsSim, fsSim);
  }

  update() {
    this._drawSim
      .bindFrameBuffer(this._fbo.write)
      .bindTexture("texturePos", this._fbo.read.getTexture(0), 0)
      .bindTexture("textureVel", this._fbo.read.getTexture(1), 1)
      .bindTexture("textureExtra", this._fbo.read.getTexture(2), 2)
      .bindTexture("textureLife", this._fbo.read.getTexture(3), 3)
      .uniform("uTime", Scheduler.deltaTime)
      .draw();

    this._fbo.swap();
  }

  render() {
    GL.viewport(0, 0, window.innerWidth, window.innerHeight);
    GL.clear(0, 0, 0, 1);

    this._dAxis.draw();
    this._dDots.draw();

    this._drawRender
      .uniform("uViewport", [GL.width, GL.height])
      .bindTexture("texturePos", this._fbo.read.getTexture(0), 0)
      .draw();

    const s = GL.isMobile ? 64 : 128;
    GL.viewport(0, 0, s, s);
    this._dCopy.draw(this._fbo.read.getTexture(0));
    GL.viewport(s, 0, s, s);
    this._dCopy.draw(this._fbo.read.getTexture(2));
    GL.viewport(s * 2, 0, s, s);
    this._dCopy.draw(this._fbo.read.getTexture(3));
  }
}

export default SceneApp;
