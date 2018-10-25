// ViewPixelated.js

import alfrid, { GL } from 'alfrid';
import fs from 'shaders/pixelated.frag';

class ViewPixelated extends alfrid.View {
	
	constructor() {
		super(alfrid.ShaderLibs.bigTriangleVert, fs);

		this.offset = 0.5;
		gui.add(this, 'offset', 0, 1);
	}


	_init() {
		this.mesh = alfrid.Geom.bigTriangle();
	}


	render(texture, textureNoise) {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		this.shader.uniform("textureNoise", "uniform1i", 1);
		textureNoise.bind(1);

		this.shader.uniform("uRatio", "float", GL.aspectRatio);

		this.shader.uniform("uOffset", "float", this.offset + 0.001);
		GL.draw(this.mesh);
	}


}

export default ViewPixelated;