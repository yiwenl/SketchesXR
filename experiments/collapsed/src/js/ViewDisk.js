// ViewDisk.js

import alfrid, { GL } from 'alfrid';
import vs from 'shaders/disk.vert';
import fs from 'shaders/disk.frag';

class ViewDisk extends alfrid.View {
	
	constructor() {
		super(vs, fs);

		this.offset = 0.1;

		setTimeout(()=> {
			gui.add(this, 'offset', 0.0, 0.5);
		}, 500);
	}


	_init() {

		const positions = [];
		const normals = [];
		const uvs = [];
		const indices = [];
		let count = 0;

		const num = 24 * 4;
		const numCircles = 5;
		const startingRadius = .5;
		const circleSize = .5;
		this.totalSize = startingRadius + circleSize * numCircles;
		this.circleSize = circleSize;


		const getPos = (i, j, z) => {
			let r = startingRadius + j * circleSize;
			let a = -i / num * Math.PI * 2.0;
			return [
				Math.cos(a) * r,
				Math.sin(a) * r,
				z * circleSize
			]
		}


		for(let i=0; i<num; i++) {
			for(let j=0; j<numCircles; j++) {

				//	flat
				positions.push(getPos(i, j, j));
				positions.push(getPos(i+1, j, j));
				positions.push(getPos(i+1, j+1, j));
				positions.push(getPos(i, j+1, j));

				uvs.push([numCircles - j - 1, 0]);
				uvs.push([numCircles - j - 1, 0]);
				uvs.push([numCircles - j - 1, 0]);
				uvs.push([numCircles - j - 1, 0]);

				if(j === numCircles-1) {
					normals.push([j * circleSize, circleSize, 0]);
					normals.push([j * circleSize, circleSize, 0]);
					normals.push([j * circleSize, circleSize, 0]);
					normals.push([j * circleSize, circleSize, 0]);	
				} else {
					normals.push([j * circleSize, circleSize, 0]);
					normals.push([j * circleSize, circleSize, 0]);
					normals.push([j * circleSize, circleSize, 1]);
					normals.push([j * circleSize, circleSize, 1]);
				}

				

				indices.push(count * 4 + 0);
				indices.push(count * 4 + 1);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 0);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 3);

				count ++;


				//	wall
				positions.push(getPos(i, j, j-1));
				positions.push(getPos(i+1, j, j-1));
				positions.push(getPos(i+1, j, j));
				positions.push(getPos(i, j, j));

				uvs.push([numCircles - j, 1]);
				uvs.push([numCircles - j, 1]);
				uvs.push([numCircles - j-1, 1]);
				uvs.push([numCircles - j-1, 1]);

				normals.push([j * circleSize, circleSize, 0]);
				normals.push([j * circleSize, circleSize, 0]);
				normals.push([j * circleSize, circleSize, 0]);
				normals.push([j * circleSize, circleSize, 0]);	

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
		this.mesh.bufferNormal(normals);
	}


	render(texture, mOrient, mProj, mOffset) {
		// console.log('mOffset', mOffset);
		this.shader.bind();
		this.shader.uniform("uOrientMatrix", "mat4", mOrient);
		this.shader.uniform("uShadowMatrix", "mat4", mProj);
		this.shader.uniform("uOffset", "float", mOffset);
		this.shader.uniform("uTotalSize", "float", this.totalSize);
		this.shader.uniform("uCircleSize", "float", this.circleSize);
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		GL.draw(this.mesh);
	}


}

export default ViewDisk;