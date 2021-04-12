#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform mat3 uNormalMatrix;
uniform mat3 uModelViewMatrixInverse;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vPosition;

#define SCALE 80.0

void main(void) {
	vec3 pos = aVertexPosition * SCALE;

	vec4 position = uModelMatrix * vec4(pos, 1.0);
	vPosition     = position.xyz / position.w;
	
	vNormal       = normalize(vec3(uModelMatrix * vec4(aNormal, 0.0)));
	vTextureCoord = aTextureCoord;
	
	gl_Position   = uProjectionMatrix * uViewMatrix * position;
}
