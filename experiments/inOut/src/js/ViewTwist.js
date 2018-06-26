// ViewTwist.js

import alfrid, { GL } from 'alfrid';
import vs from 'shaders/twist.vert';
import fs from 'shaders/twist.frag';
import Assets from './Assets';
import ARUtils from './ARUtils';

class ViewTwist extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		this.mesh = new alfrid.Mesh();

		const positions = [];
		const uvs = [];
		const indices = []
		let count = 0;
		const num = 100;

		const thickness = 1;
		const radius = 2;
		const Z_AXIS = vec3.fromValues(0, 0, 1);
		let m = mat4.create();
		let mCircle = mat4.create();

		this.thickness = 1;
		this.radius = 2;
		this.num = num;
		this.scale = new alfrid.TweenNumber(0, 'expInOut');
		// this.scale = ARUtils.hasARDisplay ? .05 : 1;
		if(!ARUtils.hasARDisplay) {
			this.scale.value = 1;
		}
		
		for(let j=0; j<4; j++) {
			for(let i=0; i<num; i++) {
				let theta = j * Math.PI / 2;

				positions.push([i, 0, j]);
				positions.push([i+1, 0, j]);
				positions.push([i+1, 1, j]);
				positions.push([i, 1, j]);

				uvs.push([i/num, 0]);
				uvs.push([(i+1)/num, 0]);
				uvs.push([(i+1)/num, 1]);
				uvs.push([i/num, 1]);

				indices.push(count * 4 + 0);
				indices.push(count * 4 + 1);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 0);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 3);

				count ++;
			}
		}
		

		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);

		this.texture = Assets.get('text');
		this.texture.magFilter = GL.LINEAR;
		this.texture.minFilter = GL.LINEAR;
	}

	open() {
		this.scale.value = 0.04;
	}


	render() {
		this.shader.bind();

		this.shader.uniform("uThickness", "float", this.thickness);
		this.shader.uniform("uRadius", "float", this.radius);
		this.shader.uniform("uNum", "float", this.num);
		this.shader.uniform("uTime", "float", alfrid.Scheduler.deltaTime * 0.5);
		this.shader.uniform("uScale", "float", this.scale.value);

		this.shader.uniform("texture", "uniform1i", 0);
		this.texture.bind(0);

		GL.draw(this.mesh);
	}


}

export default ViewTwist;