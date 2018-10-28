// createParticles.js

import alfrid, { GL } from 'alfrid';
import Config from '../Config';


var random = function(min, max) { return min + Math.random() * (max - min);	}

const createParticles = () => {
	const {numParticles:num} = Config;
	const data = [];

	let m = mat4.create();
	let a = .3;

	const getPos = () => {
		let t = 0.1;
		let r = Config.sphereSize + random(-t, t);

		let v = vec3.fromValues(r, 0, 0);
		mat4.identity(m);

		let angle = random(-a, a);
		mat4.rotateZ(m, m, Math.random() * Math.PI * 2.0);
		mat4.rotateY(m, m, angle);
		
		
		
		vec3.transformMat4(v, v, m);
		v[1] += Config.initY;

		return v;
	}

	for(let j=0; j<num; j++) {

		//	position
		for(let i=0; i<num; i++) {
			let pos = getPos();

			data.push(pos[0]);
			data.push(pos[1]);
			data.push(pos[2]);
			data.push(1);
		}

		//	velocity
		for(let i=0; i<num; i++) {
			data.push(0);
			data.push(0);
			data.push(0);
			data.push(1);
		}
	}


	for(let j=0; j<num; j++) {

		//	life
		for(let i=0; i<num; i++) {
			let pos = getPos();

			data.push(Math.random() * 2.0);
			data.push(Math.random());
			data.push(Math.random());
			data.push(1);
		}

		//	randoms
		for(let i=0; i<num; i++) {
			data.push(Math.random());
			data.push(Math.random());
			data.push(Math.random());
			data.push(1);
		}
	}

	const texture = new alfrid.GLTexture(data, {
		minFilter:GL.NEAREST,
		magFilter:GL.NEAREST,
		type:GL.FLOAT
	}, num * 2, num * 2);

	return texture;
}


export { createParticles };