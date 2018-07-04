// ViewSave.js

import alfrid, { GL } from 'alfrid';
import vs from 'shaders/save.vert';
import fs from 'shaders/save.frag';
import Config from './Config';
const random = function (min, max) { return min + Math.random() * (max - min);	};

class ViewSave extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		let positions = [];
		let extras = [];
		let color = [];

		let coords = [];
		let indices = []; 
		
		let count = 0;

		let numParticles = Config.numParticles;
		let totalParticles = numParticles * numParticles;
		console.debug('Total Particles : ', totalParticles);
		let ux, uy;
		let r = Config.range;

		let m = mat4.create();
		const getPos = () => {
			
			return [random(-r, r), random(-r, r), random(-r, r)];
		}

		//	position
		//	color
		//	extra (scale, needUpdate)


		for(let j = 0; j < numParticles; j++) {
			for(let i = 0; i < numParticles; i++) {
				positions.push(getPos());

				let r = Math.random();
				color.push([r, r, r]);

				ux = i / numParticles * 2.0 - 1.0 + .5 / numParticles;
				uy = j / numParticles * 2.0 - 1.0 + .5 / numParticles;

				extras.push([0, 1, Math.random()]);
				coords.push([ux, uy]);
				indices.push(count);
				count ++;

			}
		}


		this.mesh = new alfrid.Mesh(GL.POINTS);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(coords);
		this.mesh.bufferIndex(indices);

		this.meshColor = new alfrid.Mesh(GL.POINTS);
		this.meshColor.bufferVertex(color);
		this.meshColor.bufferTexCoord(coords);
		this.meshColor.bufferIndex(indices);

		this.meshExtra = new alfrid.Mesh(GL.POINTS);
		this.meshExtra.bufferVertex(extras);
		this.meshExtra.bufferTexCoord(coords);
		this.meshExtra.bufferIndex(indices);
	}

	reset() {
		let positions = [];
		let extras = [];
		let color = [];

		let coords = [];
		let indices = []; 
		
		let count = 0;

		let numParticles = Config.numParticles;
		let totalParticles = numParticles * numParticles;
		console.debug('Total Particles : ', totalParticles);
		let ux, uy;
		let r = Config.range;

		let m = mat4.create();
		const getPos = () => {
			return [random(-r, r), random(-r, r), random(-r, r)];
		}

		//	position
		//	color
		//	extra (scale, needUpdate, random)


		for(let j = 0; j < numParticles; j++) {
			for(let i = 0; i < numParticles; i++) {
				positions.push(getPos());

				let r = Math.random();
				color.push([r, r, r]);

				ux = i / numParticles * 2.0 - 1.0 + .5 / numParticles;
				uy = j / numParticles * 2.0 - 1.0 + .5 / numParticles;

				extras.push([0, 1, Math.random()]);
				coords.push([ux, uy]);
				indices.push(count);
				count ++;

			}
		}

		this.mesh.bufferVertex(positions);
		this.meshExtra.bufferVertex(extras);
	}


	render(state = 0) {
		this.shader.bind();
		if(state === 0) {
			GL.draw(this.mesh);	
		} else if(state === 1) {
			GL.draw(this.meshColor);	
		} else if(state === 2) {
			GL.draw(this.meshExtra);	
		}
		
	}

}

export default ViewSave;