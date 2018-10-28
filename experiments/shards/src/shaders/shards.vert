// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uLocalMatrix;
uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uSize;

varying vec2 vTextureCoord;
varying vec2 vUV;
varying vec3 vNormal;

void main(void) {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * uLocalMatrix * vec4(aVertexPosition, 1.0);

    vec2 uv = aVertexPosition.xy / uSize * .5 + .5;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
    vUV = uv;
}