// ViewBelt.js

import alfrid, { GL } from 'alfrid';
import Assets from './Assets';
import Config from './Config';
import { getBeltTexture } from './utils';
import vs from 'shaders/sink.vert';
import fs from 'shaders/sink.frag';

class ViewBelt extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		const {numBelt, num, innerRadius, outerRadius} = Config;
		const positions = [];
		const uvs = [];
		const indices = [];
		let count = 0;
		const angle = Math.PI * 2.0 / numBelt;

		const getPos = (i, j) => {
			let x=0, y=0, z=0;

			let r = i/num * ( outerRadius - innerRadius) + innerRadius;
			let a = angle * j/num;
			x = Math.sin(a) * r;
			z = Math.cos(a) * r;

			return [x, y, z];
		}

		for(let i=0; i<num; i++) {
			for(let j=0; j<num; j++) {
				positions.push(getPos(i, j));
				positions.push(getPos(i+1, j));
				positions.push(getPos(i+1, j+1));
				positions.push(getPos(i, j+1));

				uvs.push([i/num, j/num]);
				uvs.push([(i+1)/num, j/num]);
				uvs.push([(i+1)/num, (j+1)/num]);
				uvs.push([i/num, (j+1)/num]);

				indices.push(count * 4 + 0);
				indices.push(count * 4 + 1);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 0);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 3);

				count ++;
			}
		}

		let i = numBelt;

		const extras = [];
		while(i--) {
			extras.push([i/numBelt * Math.PI * 2, Math.random(), Math.random()]);
		}


		this.mesh = new alfrid.Mesh();
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);
		this.mesh.bufferInstance(extras, 'aExtra');


		//	debug

		this.meshLine = new alfrid.Mesh(GL.LINES);
		this.meshLine.bufferVertex(positions);
		this.meshLine.bufferTexCoord(uvs);
		this.meshLine.bufferIndex(indices);		

		this.shaderDebug = new alfrid.GLShader(null, alfrid.ShaderLibs.simpleColorFrag);
		this.shaderDebug.bind();
		this.shaderDebug.uniform("color", "vec3", [1, 1, 1]);
		this.shaderDebug.uniform("opacity", "float", 1);

		this.texture = getBeltTexture();
	}


	render() {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		this.texture.bind(0);
		this.shader.uniform("uTime", "float", alfrid.Scheduler.deltaTime);
		GL.draw(this.mesh);
	}


}

export default ViewBelt;