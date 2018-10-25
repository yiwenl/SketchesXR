// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;
attribute vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vExtra;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

void main(void) {
	vec3 position = aVertexPosition;
	position.xy   = rotate(position.xy, aExtra.x);
	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);
	vTextureCoord = aTextureCoord;
	vNormal       = aNormal;
	vExtra        = aExtra;
}