// ViewRing.js

import alfrid, { GL } from 'alfrid';
import Assets from './Assets';
import fs from 'shaders/ring.frag';

class ViewRing extends alfrid.View {
	
	constructor() {
		super(null, fs);
	}


	_init() {
		const s = 0.1;
		this.mesh = alfrid.Geom.plane(s, s, 1, 'xz');
		this.opacity = new alfrid.EaseNumber(0);
	}


	render() {
		this.shader.bind();
		this.shader.uniform("uOpacity", "float", this.opacity.value);
		this.shader.uniform("texture", "uniform1i", 0);
		Assets.get('ring').bind(0);
		GL.draw(this.mesh);
	}


}

export default ViewRing;