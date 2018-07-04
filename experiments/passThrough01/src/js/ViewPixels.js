import alfrid, { GL } from 'alfrid';
import Config from './Config';
import vs from 'shaders/pixel.vert';
import fs from 'shaders/pixel.frag';

class ViewPixels extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		const {numParticles} = Config;
		const positions = [];
		const indices = [];
		let count = 0;
		let ux, uy;

		for(let j = 0; j < numParticles; j++) {
			for(let i = 0; i < numParticles; i++) {
				ux = i / numParticles - 0.5 / numParticles;
				uy = j / numParticles - 0.5 / numParticles;
				positions.push([ux, uy, Math.random()]);
				indices.push(count);
				count ++;

			}
		}

		this.mesh = new alfrid.Mesh(GL.POINTS);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferIndex(indices);

	}


	render(texturePos, textureColor, mParticleScale, cameraPos) {
		this.shader.bind();

		this.shader.uniform("texturePos", "uniform1i", 0);
		texturePos.bind(0);

		this.shader.uniform("textureColor", "uniform1i", 1);
		textureColor.bind(1);

		this.shader.uniform("uViewport", "vec2", [GL.width, GL.height]);
		this.shader.uniform("uParticleScale", "float", mParticleScale);
		this.shader.uniform("uCameraPos", "vec3", cameraPos);

		GL.draw(this.mesh);
	}


}

export default ViewPixels;