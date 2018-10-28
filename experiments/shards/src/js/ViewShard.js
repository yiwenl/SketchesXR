// ViewShard.js

import alfrid, { GL } from 'alfrid';
import Assets from './Assets';
import Config from './Config';

import vs from 'shaders/shards.vert';
import fs from 'shaders/shards.frag';

var random = function(min, max) { return min + Math.random() * (max - min);	}

class ViewShard extends alfrid.View {
	
	constructor(mId) {
		super(vs, fs);

		this._id = mId;
		this._initMesh();

		this.angle = Math.random() * 0xFF;
		this.speed = random(-1, 1) * 0.01;
		this.radius = random(0.05, 0.1) * 0.5;

		this.mtx = mat4.create();
	}


	_initMesh() {
		this.mesh = Assets.get(`shards${this._id}`);
		this.texture = Assets.get('diffuse');
	}


	render() {
		this.angle += this.speed * Config.speed;
		mat4.identity(this.mtx, this.mtx);

		let x = Math.sin(this.angle) * this.radius * Config.movingRange;
		let y = Math.cos(this.angle) * this.radius * Config.movingRange + 7;
		let z = Math.sin(Math.cos(this.angle)) * this.radius * Config.movingRange;
		mat4.translate(this.mtx, this.mtx, vec3.fromValues(x, y, z));

		// GL.rotate(this.mtx);
		this.shader.bind();
		this.shader.uniform("uLocalMatrix", "mat4", this.mtx);
		this.shader.uniform("texture", "uniform1i", 0);
		this.texture.bind(0);
		this.shader.uniform("uSize", "float", Config.mappingSize);
		GL.draw(this.mesh);
	}


}

export default ViewShard;