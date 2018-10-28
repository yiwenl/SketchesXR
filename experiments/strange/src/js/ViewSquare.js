// ViewSquare.js

import alfrid, { GL } from 'alfrid';

import vs from 'shaders/general.vert';
import fs from 'shaders/lines.frag';

class ViewSquare extends alfrid.View {
	
	constructor(mSize, mPosition=[0, 0, 0], mNum = 20) {
		super(vs, fs);

		this._size = mSize;
		this._pos = mPosition;
		this._num = mNum;
		this.rotation = 0;

		this._initMesh();
	}


	_initMesh() {

		const positions = [];
		const uvs = [];
		const indices = [];
		const s = this._size/2;
		let count = 0;

		const getPos = (i, startingPos, dir) => {
			let p = i/this._num;
			let v = vec3.clone(dir);
			vec3.scale(v, v, p * s * 2);
			vec3.add(v, v, startingPos);

			return v;
		}


		for(let i=0; i<this._num; i++) {
			positions.push(getPos(i, [-s, s, 0], [1, 0, 0]));
			positions.push(getPos(i+1, [-s, s, 0], [1, 0, 0]));

			uvs.push([i/this._num, 0]);
			uvs.push([(i+1)/this._num, 0]);

			indices.push(count);
			indices.push(count+1);

			count += 2;

			positions.push(getPos(i, [-s, -s, 0], [1, 0, 0]));
			positions.push(getPos(i+1, [-s, -s, 0], [1, 0, 0]));

			uvs.push([i/this._num, 0]);
			uvs.push([(i+1)/this._num, 0]);

			indices.push(count);
			indices.push(count+1);

			count += 2;

			positions.push(getPos(i, [-s, s, 0], [0, -1, 0]));
			positions.push(getPos(i+1, [-s, s, 0], [0, -1, 0]));

			uvs.push([i/this._num, 0]);
			uvs.push([(i+1)/this._num, 0]);

			indices.push(count);
			indices.push(count+1);

			count += 2;

			positions.push(getPos(i, [s, s, 0], [0, -1, 0]));
			positions.push(getPos(i+1, [s, s, 0], [0, -1, 0]));

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

export default ViewSquare;