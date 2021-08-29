import { Draw } from "alfrid";

import Assets from "./Assets";

import vs from "shaders/person.vert";
import fs from "shaders/person.frag";

class DrawPerson extends Draw {
  constructor() {
    super();
    this.setMesh(Assets.get("person")).useProgram(vs, fs);
  }
}

export default DrawPerson;
