// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewport;
uniform sampler2D texturePos;
uniform float uParticleSize;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vPosition;
varying float vLife;

const float radius = 0.03;

void main(void) {
	vPosition     = aVertexPosition;
	vec2 uv 	  = aTextureCoord;

	vec3 pos      = texture2D(texturePos, uv + vec2(0.0, 0.5)).xyz;
	vec3 life 	  = texture2D(texturePos, uv).xyz;
	vec3 extra 	  = texture2D(texturePos, uv + vec2(0.5, 0.0)).xyz;
	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
	vTextureCoord = aTextureCoord * 2.0;
	vNormal       = aNormal;

	float distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;
    gl_PointSize = distOffset * mix(1.0, extra.y, .7) * uParticleSize;

	vLife = life.x;
}