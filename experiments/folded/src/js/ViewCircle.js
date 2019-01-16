// ViewCircle.js


import alfrid, { GL } from 'alfrid';
import vs from 'shaders/circle.vert';
import fs from 'shaders/circle.frag';

class ViewCircle extends alfrid.View {
	
	constructor(mRadius, mSize, mZOffset=0) {
		super(vs, fs);

		this._radius = mRadius;
		this._size = mSize;
		this._zOffset = mZOffset;

		this._initMesh();
	}


	_initMesh() {

		const num = 12 * 4;
		const positions = [];
		const uvs = [];
		const indices = [];
		let count = 0;

		const getPos = (i, j, theta=0) => {
			let a = i/num * Math.PI * 2.0;
			let x = -this._size/2 + j*this._size;
			let v = vec3.fromValues(x, 0, -this._size/2);
			let m = mat4.create();
			mat4.rotateY(m, m, theta);
			vec3.transformMat4(v, v, m);

			let r = vec3.fromValues(this._radius, 0, this._zOffset);
			vec3.add(v, v, r);
			mat4.identity(m);
			mat4.rotateZ(m, m, a);
			vec3.transformMat4(v, v, m);

			return v;
		}

		for(let j=0; j<4; j++) {
			let theta = Math.PI/2 * j;
			for(let i=0; i<num; i++) {
				positions.push(getPos(i, 0, theta));
				positions.push(getPos((i+1), 0, theta));
				positions.push(getPos((i+1), 1, theta));
				positions.push(getPos(i, 1, theta));

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

		

		this.mesh = new alfrid.Mesh();
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);
	}


	render(mMatrixLocal, mMatrixProj, texture) {
		this.shader.bind();
		this.shader.uniform("uMatrixLocal", "mat4", mMatrixLocal);
		this.shader.uniform("uMatrixProject", "mat4", mMatrixProj);

		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		GL.draw(this.mesh);
	}


}

export default ViewCircle;