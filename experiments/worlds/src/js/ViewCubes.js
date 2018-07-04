// ViewCubes.js

import alfrid, { GL } from 'alfrid';
import vs from 'shaders/cubes.vert';
import fs from 'shaders/cubes.frag';

class ViewCubes extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		const s = 0.5;
		let numCubes = 2000;
		this.mesh = alfrid.Geom.cube(s, s, s);
		const positions = [];
		const extra = [];
		const radius = 2;
		const r = 0.25;

		const m = mat4.create();
		const q = quat.create();

		const getPos = () => {
			let axis = vec3.fromValues(random(-1, 1), random(-1, 1), random(-1, 1));
			vec3.normalize(axis, axis);
			let angle = Math.random() * Math.PI * 2.0;
			quat.setAxisAngle(q, axis, angle);

			let rr = radius + random(-r, r);
			let v = vec3.fromValues(rr, 0, 0);
			vec3.transformQuat(v, v, q);

			return v;
		}

		while(numCubes--) {
			positions.push(getPos());
			extra.push([Math.random(), Math.random(), Math.random()]);
		}

		this.mesh.bufferInstance(positions, 'aPosOffset');
		this.mesh.bufferInstance(extra, 'aExtra');
	}


	render(textureBg, textureWorld, mPosSideCamera, mCameraPos) {
		this.shader.bind();
		this.shader.uniform("textureBg", "uniform1i", 0);
		textureBg.bind(0);
		this.shader.uniform("textureWorld", "uniform1i", 1);
		textureWorld.bind(1);
		this.shader.uniform("uSideCameraPos", "vec3", mPosSideCamera);
		this.shader.uniform("uCameraPos", "vec3", mCameraPos);
		GL.draw(this.mesh);
	}


}

export default ViewCubes;