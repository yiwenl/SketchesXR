import { Draw } from "alfrid";
import Assets from "./Assets";

import vs from "shaders/basic.vert";
import fs from "shaders/pbr.frag";

class DrawBike extends Draw {
  constructor() {
    super();

    this.setMesh(Assets.get("bike"))
      .useProgram(vs, fs)
      .bindTexture("uBRDFMap", Assets.get("brdfLUT"), 0)
      .bindTexture("uRadianceMap", Assets.get("street_radiance"), 1)
      .bindTexture("uIrradianceMap", Assets.get("street_radiance"), 2)
      .bindTexture("uColorMap", Assets.get("color"), 3)
      .bindTexture("uNormalMap", Assets.get("normal"), 4)
      .bindTexture("uORMMap", Assets.get("orm"), 5)
      .bindTexture("uEmissiveMap", Assets.get("emissive"), 6)

      .uniform("uBaseColor", [1, 1, 1])
      .uniform("uEmissiveFactor", [1, 1, 1])
      .uniform("uRoughness", 1)
      .uniform("uMetallic", 1)
      .uniform("uExposure", 1.5)
      .uniform("uNormalScale", 1)
      .uniform("uOcclusionStrength", 0)
      .uniform("uScaleDiffBaseMR", [0, 0, 0, 0])
      .uniform("uScaleFGDSpec", [0, 0, 0, 0])
      .uniform("uScaleIBLAmbient", [1, 1, 1, 1]);
  }

  draw1() {
    this.bindTexture("uBRDFMap", Assets.get("brdfLUT"), 0)
      .bindTexture("uRadianceMap", Assets.get("street_radiance"), 1)
      .bindTexture("uIrradianceMap", Assets.get("street_irradiance"), 2)
      .bindTexture("uColorMap", Assets.get("color"), 3)
      .bindTexture("uNormalMap", Assets.get("normal"), 4)
      .bindTexture("uORMMap", Assets.get("orm"), 5)
      .bindTexture("uEmissiveMap", Assets.get("emissive"), 6);

    super.draw();
  }
}

export default DrawBike;
