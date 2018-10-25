// ViewColor.js

import alfrid, { GL } from 'alfrid';

import fs from 'shaders/update-color.frag';

class ViewColor extends alfrid.View {
	
	constructor() {
		super(alfrid.ShaderLibs.bigTriangleVert, fs);
	}


	_init() {
		this.mesh = alfrid.Geom.bigTriangle();
	}


	render(textureColor, texturePos, textureExtra, textureBg, mForce = false) {
		this.shader.bind();
		this.shader.uniform("textureColor", "uniform1i", 0);
		textureColor.bind(0);
		this.shader.uniform("texturePos", "uniform1i", 1);
		texturePos.bind(1);
		this.shader.uniform("textureBg", "uniform1i", 2);
		textureBg.bind(2);
		this.shader.uniform("textureExtra", "uniform1i", 3);
		textureExtra.bind(3);

		this.shader.uniform("uForce", "float", mForce ? 1 : 0);

		GL.draw(this.mesh);
	}


}

export default ViewColor;