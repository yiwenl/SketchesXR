// ViewCircle.js

import alfrid, { GL } from 'alfrid';
import vs from 'shaders/general.vert';
import fs from 'shaders/lines.frag';

class ViewCircle extends alfrid.View {
	
	constructor(mRadius, mPosition=[0, 0, 0], mNum = 24 * 4) {
		super(vs, fs);

		this._pos = mPosition;
		this._num = mNum;
		this._radius = mRadius;
		this.rotation = 0;
		this._initMesh();
	}


	_initMesh() {

		const positions = [];
		const uvs = [];
		const indices = [];
		let count = 0;


		const getPos = (i) => {
			let a = i/this._num * Math.PI * 2.0;
			let x = Math.cos(a) * this._radius;
			let y = Math.sin(a) * this._radius;
			return [x, y, 0];
		}

		for(let i=0; i<this._num; i++) {
			positions.push(getPos(i));
			positions.push(getPos(i+1));

			uvs.push([i/this._num, 0]);
			uvs.push([(i+1)/this._num, 0]);

			indices.push(count);
			indices.push(count+1);

			count += 2;
		}

		this.mesh = new alfrid.Mesh(GL.LINES);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);

		this.vertices = positions;
	}


	render(opacity) {
		this.shader.bind();
		this.shader.uniform("uPosition", "vec3", this._pos);
		this.shader.uniform("uRotation", "float", this.rotation);
		this.shader.uniform("uOpacity", "float", opacity);
		GL.draw(this.mesh);
	}

}

export default ViewCircle;