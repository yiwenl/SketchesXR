// ViewCompose.js

import alfrid, { GL } from 'alfrid';
import fs from 'shaders/compose.frag';

class ViewCompose extends alfrid.View {
	
	constructor() {
		super(alfrid.ShaderLibs.bigTriangleVert, fs);
	}


	_init() {
		this.mesh = alfrid.Geom.bigTriangle();
	}


	render(textureBg, textureMap) {
		this.shader.bind();
		this.shader.uniform("textureBg", "uniform1i", 0);
		textureBg.bind(0);
		this.shader.uniform("textureMap", "uniform1i", 1);
		textureMap.bind(1);
		GL.draw(this.mesh);
	}


}

export default ViewCompose;