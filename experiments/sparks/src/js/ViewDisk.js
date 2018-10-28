// ViewDisk.js

import alfrid, { GL } from 'alfrid';
import Config from './Config';
import vs from 'shaders/disk.vert';
import fs from 'shaders/disk.frag';

class ViewDisk extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		const s = Config.sphereSize * 2;
		this.mesh = alfrid.Geom.plane(s, s, 1);
	}


	render() {
		this.shader.bind();
		this.shader.uniform("uPosition", "vec3", [0, Config.initY, 0]);
		this.shader.uniform("uTime", "float", alfrid.Scheduler.deltaTime);
		GL.draw(this.mesh);
	}


}

export default ViewDisk;