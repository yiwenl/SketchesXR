// ViewStars.js

import alfrid, { GL } from 'alfrid';
import vs from 'shaders/general.vert';
import fs from 'shaders/lines.frag';

class ViewStars extends alfrid.View {
	
	constructor(mRadius, mSides, mPosition=[0, 0, 0]) {
		super(vs, fs);

		this._radius = mRadius;
		this._sides = mSides;
		this._pos = mPosition;
		this.rotation = 0;
		this._initMesh();
	}


	_initMesh() {

		const points = [];

		let i=this._sides;
		while(i--) {
			let a = i/this._sides * Math.PI * 2.0;
			let x = Math.cos(a) * this._radius;
			let y = Math.sin(a) * this._radius;
			points.push([x, y, 0]);
		}

		const positions = [];
		const uvs = [];
		const indices = [];
		let count = 0;

		for(let i=0; i<this._sides; i++) {
			for(let j=0; j<this._sides; j++) {

				// if(Math.abs(i-j) > 1) {
				if(Math.abs(i-j) > 0) {
					positions.push(points[i]);
					positions.push(points[j]);

					uvs.push([0, 0]);
					uvs.push([0, 0]);

					indices.push(count);
					indices.push(count+1);

					count += 2;
				}

			}
		}

		this.mesh = new alfrid.Mesh(GL.LINES);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);
	}


	render(opacity) {
		this.shader.bind();
		this.shader.uniform("uPosition", "vec3", this._pos);
		this.shader.uniform("uRotation", "float", this.rotation);
		this.shader.uniform("uOpacity", "float", opacity);
		GL.draw(this.mesh);
	}


}

export default ViewStars;