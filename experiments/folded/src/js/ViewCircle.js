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

		console.log('this._zOffset', this._zOffset);

		this._initMesh();
	}


	_initMesh() {

		const num = 12 * 4;
		const positions = [];
		const normals = [];
		const uvs = [];
		const indices = [];
		let count = 0;

		const getPos = (i, j, theta=0) => {
			let a = i/num * Math.PI * 2.0;
			let x = -this._size/2 + j*this._size;
			let v = vec3.fromValues(x, 0, -this._size/2);
			let m = mat4.create();
			let n = vec3.fromValues(0, 0, -1);
			mat4.rotateY(m, m, theta);
			vec3.transformMat4(v, v, m);
			vec3.transformMat4(n, n, m);

			let r = vec3.fromValues(this._radius, 0, 0);
			vec3.add(v, v, r);
			mat4.identity(m);
			mat4.rotateZ(m, m, a);
			vec3.transformMat4(v, v, m);
			vec3.transformMat4(n, n, m);

			return {v, n};
		}


		const getNormal = (a, b, c) => {
			const ba = vec3.create();
			const ca = vec3.create();
			const n = vec3.create();
			vec3.sub(ba, b, a);
			vec3.sub(ca, c, a);
			vec3.cross(n, ba, ca);
			vec3.normalize(n, n);

			return n;
		}

		for(let j=0; j<4; j++) {
			let theta = Math.PI/2 * j;
			for(let i=0; i<num; i++) {
				const p0 = getPos(i, 0, theta);
				const p1 = getPos(i+1, 0, theta);
				const p2 = getPos(i+1, 1, theta);
				const p3 = getPos(i, 1, theta);

				// const n = getNormal(p0, p1, p3);
				positions.push(p0.v);
				positions.push(p1.v);
				positions.push(p2.v);
				positions.push(p3.v);

				normals.push(p0.n);
				normals.push(p1.n);
				normals.push(p2.n);
				normals.push(p3.n);

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
		this.mesh.bufferNormal(normals);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);
	}


	render(mMatrixLocal, mMatrixProj, texture, mOffset, mMatrixLocalSave) {
		this.shader.bind();
		this.shader.uniform("uMatrixLocal", "mat4", mMatrixLocal);
		this.shader.uniform("uMatrixLocalSave", "mat4", mMatrixLocalSave);
		this.shader.uniform("uMatrixProject", "mat4", mMatrixProj);
		this.shader.uniform("uOffset", "float", mOffset);
		this.shader.uniform("uZOffset", "float", this._zOffset);

		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		GL.draw(this.mesh);
	}


}

export default ViewCircle;