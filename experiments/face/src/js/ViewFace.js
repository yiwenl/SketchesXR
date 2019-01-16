// ViewFace.js

import alfrid, { GL } from 'alfrid';
import Assets from './Assets';
import vs from 'shaders/face.vert';
import fs from 'shaders/face.frag';

class ViewFace extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		this.mesh;this.mesh = Assets.get('model');
	}


	render() {
		GL.disable(GL.CULL_FACE);
		this.shader.bind();
		this.shader.uniform("uScale", "float", .1);
		GL.draw(this.mesh);
		GL.enable(GL.CULL_FACE);
	}


}

export default ViewFace;