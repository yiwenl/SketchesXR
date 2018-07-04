// ViewBg.js


import alfrid, { GL } from 'alfrid';
import fs from 'shaders/bg.frag';
import Assets from './Assets';

class ViewBg extends alfrid.View {
	
	constructor(texture) {
		super(null, fs);
		this.texture = texture;
	}


	_init() {
		this.mesh = alfrid.Geom.sphere(20, 48, true);
	}


	render() {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		this.texture.bind(0);
		GL.draw(this.mesh);
	}


}

export default ViewBg;