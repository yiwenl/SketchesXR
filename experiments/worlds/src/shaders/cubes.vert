// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;
attribute vec3 aPosOffset;
attribute vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec4 vScreenPos;
varying vec3 vCenter;

void main(void) {
	vec3 position  = aPosOffset + aVertexPosition * mix(aExtra.x, 1.0, .75);
	vec4 screenPos = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);
	gl_Position    = screenPos;
	vScreenPos     = screenPos / screenPos.w;
	vTextureCoord  = aTextureCoord;
	vNormal        = aNormal;
	vCenter 	   = aPosOffset;
}