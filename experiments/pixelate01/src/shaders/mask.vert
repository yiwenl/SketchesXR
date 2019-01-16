// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uModelViewMatrixInverse;
uniform vec3 uPosition;
uniform float uScale;

varying vec2 vTextureCoord;
varying vec3 vNormal;

void main(void) {
	vec3 position = uModelViewMatrixInverse * aVertexPosition;
	position *= uScale;
	position += uPosition;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
}