// ViewFloor.js


import alfrid, { GL } from 'alfrid';

class ViewFloor extends alfrid.View {
	
	constructor() {
		super();
	}


	_init() {

		const s = 10;
		this.mesh = alfrid.Geom.plane(s, s, 1, 'xz');
	}


	render() {
		this.shader.bind();
		GL.draw(this.mesh);
	}


}

export default ViewFloor;