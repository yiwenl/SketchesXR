// NoiseTexture.js

import alfrid, { GL } from 'alfrid';

import fs from 'shaders/noise.frag';
const size = 512;

class NoiseTexture extends alfrid.FrameBuffer { 
	constructor() {
		super(512, 512);

		this._initNoise();
	}


	_initNoise() {
		const shader = new alfrid.GLShader(alfrid.ShaderLibs.bigTriangleVert, fs);
		const mesh = alfrid.Geom.bigTriangle();

		this.bind();
		GL.clear(1, 0, 0, 1);
		shader.bind();
		shader.uniform("uSeed", "float", Math.random() * 0xFFFF);
		GL.draw(mesh);
		this.unbind();
	}

	get texture() {
		return this.getTexture();
	}
}


export default NoiseTexture;