precision highp float;

varying vec4 vColor;
varying vec3 vWsPosition;
varying vec4 vPosition;


float getDepth(float z, float n, float f) {
	return (2.0 * n) / (f + n - z*(f-n));
}

void main(void) {
	if(distance(gl_PointCoord, vec2(.5)) > .5) discard;

	// gl_FragColor = vec4(vWsPosition, 1.0);
	// gl_FragColor = vPosition;
	// gl_FragColor = vec4(vPosition.z, 0.0, 0.0, 1.0);
	// gl_FragColor = vec4(vPosition.z, 0.0, 0.0, 1.0);
	// gl_FragColor = vPosition;
	float z = vPosition.z/vPosition.w;
	z = z * .5 + .5;
	// z = getDepth(z, .75, 2.0);
	gl_FragColor = vec4(vec3(z), 1.0);
}