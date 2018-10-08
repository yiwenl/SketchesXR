// ViewShadow.js

import alfrid, { GL } from 'alfrid';
import Config from './Config';
import vs from 'shaders/shadow.vert';
import fs from 'shaders/shadow.frag';

class ViewShadow extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		const s = Config.radius * 2;
		this.mesh = alfrid.Geom.plane(s, s, 1, 'xz');
	}


	render(offset) {
		this.shader.bind();
		this.shader.uniform("uY", "float", offset * 0.1 + Config.radius);
		this.shader.uniform("uOffset", "float", offset);
		GL.draw(this.mesh);
	}


}

export default ViewShadow;