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
varying vec3 vExtra;
varying vec3 vNormal;
varying vec3 vPosition;
// varying vec3 vPos;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

void main(void) {
	vec3 position = aVertexPosition;
	position.xz   = rotate(position.xz, aExtra.x);
	
	vec2 sink     = vec2(0.1, 0.75);
	float r       = length(position.xz);
	float d       = smoothstep(sink.y, sink.x, r);
	
	position.y    -= d;
	
	
	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);
	vTextureCoord = aTextureCoord;
	vNormal       = aNormal;
	vExtra        = aExtra;
	vPosition     = position;

	// vPos = (uViewMatrix * uModelMatrix * vec4(position, 1.0)).xyz;
}