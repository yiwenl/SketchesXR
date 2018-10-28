// ViewRender.js

import alfrid, { GL } from 'alfrid';
import Config from './Config';
import Assets from './Assets';
import vs from 'shaders/particles.vert';
import fs from 'shaders/particles.frag';

class ViewRender extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		const { numParticles:num } = Config;

		const positions = [];
		const uvs = [];
		const indices = [];
		let count = 0;

		for(let i=0; i<num; i++) {
			for(let j=0; j<num; j++) {
				positions.push([Math.random(), Math.random(), Math.random()]);

				let x = i/num * 0.5;
				let y = j/num * 0.5;
				uvs.push([x, y]);
				indices.push(count);
				count ++;
			}
		}

		this.mesh = new alfrid.Mesh(GL.POINTS);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);

		this.texture = Assets.get('dot');
		this.textureMap = Assets.get('colormap');

	}


	render(texturePos) {
		GL.enableAdditiveBlending();
		GL.disable(GL.DEPTH_TEST);
		this.shader.bind();
		this.shader.uniform("texturePos", "uniform1i", 0);
		texturePos.bind(0);
		this.shader.uniform("textureParticle", "uniform1i", 1);
		this.texture.bind(1);
		this.shader.uniform("textureMap", "uniform1i", 2);
		this.textureMap.bind(2);
		this.shader.uniform('uViewport', 'vec2', [GL.width, GL.height]);
		this.shader.uniform("uParticleSize", "float", GL.isMobile ? 0.05 : 1);
		GL.draw(this.mesh);
		GL.enable(GL.DEPTH_TEST);
		GL.enableAlphaBlending();
	}


}

export default ViewRender;