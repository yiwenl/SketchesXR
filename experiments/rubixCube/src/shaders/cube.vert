// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uLocalMatrix;
uniform mat3 uNormalMatrix;
uniform vec3 uPos;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vNormalOrg;
varying vec3 vPosOrg;
varying vec2 vUVScreen;

void main(void) {
	vec3 pos      = uPos + aVertexPosition;
	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * uLocalMatrix * vec4(pos, 1.0);
	// gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
	vTextureCoord = aTextureCoord;
	vNormal       = uNormalMatrix * aNormal;
	vNormalOrg    = aNormal;
	vPosOrg 	  = uPos;

    vec4 screenPos = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vUVScreen = screenPos.xy / screenPos.w * .5 + .5;
}