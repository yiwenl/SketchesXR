// ViewTest.js

import alfrid, { GL } from 'alfrid';

class ViewTest extends alfrid.View {
	
	constructor() {
		super(null, alfrid.ShaderLibs.simpleColorFrag);
	}


	_init() {

		const positions = [];
		const uvs = [];
		const indices = [];
		let count = 0;
		const num = 24 * 2;
		const r = 1;

		const getPos = (i) => {
			let a = i/num * Math.PI * 2.0;
			let x = Math.cos(a) * r;
			let y = Math.sin(a) * r;

			return [x, y, 0];
		}

		for(let i=0; i<num; i++) {
			positions.push(getPos(i));
			positions.push(getPos(i+1));

			uvs.push([i/num, 0]);
			uvs.push([(i+1)/num, 0]);

			indices.push(count);
			indices.push(count+1);

			count += 2;
		}

		this.mesh = new alfrid.Mesh(GL.LINES);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);
	}


	render() {
		GL.gl.lineWidth(10);
		this.shader.bind();
		this.shader.uniform("color", "vec3", [1, 1, 1]);
		this.shader.uniform("opacity", "float", 1);
		GL.draw(this.mesh);
	}


}

export default ViewTest;