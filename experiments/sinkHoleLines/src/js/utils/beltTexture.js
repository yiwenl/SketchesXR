// beltTexture.js

import alfrid, { GL } from 'alfrid';

const getBeltTexture = () => {
	const canvas = document.createElement("canvas");
	canvas.width = 512;
	canvas.height = 256;
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = 'rgba(0, 0, 0, 1)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	const marginX = 10.0;
	const marginY = 80.0;

	ctx.fillStyle = 'rgba(255, 255, 255, 1)';
	ctx.fillRect(marginX, marginY, canvas.width - marginX * 2, canvas.height - marginY * 2);

	// document.body.appendChild(canvas);

	const texture = new alfrid.GLTexture(canvas); 
	texture.wrapS = GL.REPEAT;
	texture.minFilter = texture.magFilter = GL.NEAREST;

	return texture;

}


export { getBeltTexture };