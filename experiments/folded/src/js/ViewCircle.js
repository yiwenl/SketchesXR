// ViewCircle.js


import alfrid, { GL } from 'alfrid';

class ViewCircle extends alfrid.View {
	
	constructor(mRadius, mSize) {
		super();

		this._radius = mRadius;
		this._size = mSize;

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

			let r = vec3.fromValues(this._radius, 0, 0);
			vec3.add(v, v, r);
			mat4.identity(m);
			mat4.rotateZ(m, m, a);
			vec3.transformMat4(v, v, m);

			console.log(v, r);

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


	render() {
		this.shader.bind();
		GL.draw(this.mesh);
	}


}

export default ViewCircle;