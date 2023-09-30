// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uRadius;

varying vec2 vTextureCoord;
varying vec3 vNormal;

void main(void) {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition*uRadius, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
}