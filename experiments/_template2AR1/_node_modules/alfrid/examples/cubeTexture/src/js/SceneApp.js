import {
  GL,
  Scene,
  Draw,
  Geom,
  DrawAxis,
  DrawDotsPlane,
  GLCubeTexture,
  parseHdr,
  parseDds,
} from "alfrid";
import Config from "./Config";
import Assets from "./Assets";

import vs from "shaders/skybox.vert";
import fs from "shaders/skybox.frag";

class SceneApp extends Scene {
  constructor() {
    super();

    this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
    this.orbitalControl.radius.value = 8;
    this.resize();
  }

  _initTextures() {
    // png
    const getAsset = (n) => Assets.get(n);
    const sources = ["px", "nx", "py", "ny", "pz", "nz"].map(getAsset);
    this._texture = new GLCubeTexture(sources);

    // hdr
    const HDRMaps = ["pxHDR", "nxHDR", "pyHDR", "nyHDR", "pzHDR", "nzHDR"].map(
      (n) => parseHdr(Assets.get(n))
    );
    const widthHdr = HDRMaps[0].shape[0];
    const heightHdr = HDRMaps[0].shape[1];
    const sourcesHDR = HDRMaps.map((o) => o.data);
    this._textureHdr = new GLCubeTexture(
      sourcesHDR,
      { type: GL.FLOAT },
      widthHdr,
      heightHdr
    );

    // dds
    const oStudio = Assets.get("street1_radiance");
    const dataStudio = parseDds(oStudio);
    const sourceDds = dataStudio.map((o) => o.data);
    const widthDds = dataStudio[0].shape[0];
    const heightDds = dataStudio[0].shape[1];

    this._textureDds = new GLCubeTexture(
      sourceDds,
      { type: GL.FLOAT },
      widthDds,
      heightDds
    );
  }

  _initViews() {
    this._dAxis = new DrawAxis();
    this._dDots = new DrawDotsPlane();

    const s = 20;
    this._drawSkybox = new Draw()
      .setMesh(Geom.cube(s, s, s, true))
      .useProgram(vs, fs)
      .bindTexture("texture", this._texture, 0);
  }

  render() {
    GL.clear(0, 0, 0, 1);

    this._dAxis.draw();
    this._dDots.draw();

    if (Config.source === "png") {
      this._drawSkybox.bindTexture("texture", this._texture, 0);
    } else if (Config.source === "hdr") {
      this._drawSkybox.bindTexture("texture", this._textureHdr, 0);
    } else {
      this._drawSkybox.bindTexture("texture", this._textureDds, 0);
    }

    this._drawSkybox.draw();
  }
}

export default SceneApp;
