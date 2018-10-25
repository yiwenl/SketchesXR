// ViewText.js

import alfrid, { GL } from 'alfrid';
import Assets from './Assets';
import Config from './Config';
import vs from 'shaders/text.vert';
import fs from 'shaders/text.frag';

class ViewText extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		this.texture = Assets.get('text');
		this.texture.wrapS = GL.REPEAT;
		this.texture.minFilter = this.texture.magFilter = GL.NEAREST;
		window.GL = GL;

		const { numSeg:num, ringRadius:radius, uvScale, ringWidth} = Config;
		let width = radius * 2 * Math.PI * 0.25 / uvScale * ringWidth;
		const positions = [];
		const uvs = [];
		const index = [];
		let count = 0;

		const getPos = (i, j) => {
			let y = -width/2 + j * width;
			let angle = i/num * Math.PI * 2;
			let x = Math.cos(angle) * radius + radius * 1.5;
			let z = Math.sin(angle) * radius;

			return [x, y, z];
		}

		for(let i=0; i<num; i++) {
			positions.push(getPos(i, 0));
			positions.push(getPos(i+1, 0));
			positions.push(getPos(i+1, 1));
			positions.push(getPos(i, 1));

			uvs.push([i/num, 0]);
			uvs.push([(i+1)/num, 0]);
			uvs.push([(i+1)/num, 1]);
			uvs.push([i/num, 1]);

			index.push(count * 4 + 0);
			index.push(count * 4 + 1);
			index.push(count * 4 + 2);
			index.push(count * 4 + 0);
			index.push(count * 4 + 2);
			index.push(count * 4 + 3);

			count ++;
		}

		let i = Config.numRings;
		const extra = [];

		while(i--) {
			let a = i/Config.numRings * Math.PI * 2;
			extra.push([a, Math.random(), Math.random()])
		}

		this.mesh = new alfrid.Mesh();
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(index);
		this.mesh.bufferInstance(extra, 'aExtra');
	}


	render() {
		if(!this.mesh) {
			return;
		}

		GL.disable(GL.CULL_FACE);
		GL.enableAdditiveBlending();
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		this.texture.bind(0);
		this.shader.uniform("uTime", "float", alfrid.Scheduler.deltaTime * 0.1);
		this.shader.uniform("uUVScale", "float", Config.uvScale);
		GL.draw(this.mesh);
		GL.enableAlphaBlending();
		GL.disable(GL.CULL_FACE);
	}


}

export default ViewText;