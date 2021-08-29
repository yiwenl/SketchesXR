// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 vTextureCoord;
varying vec3 vNormal;

#pragma glslify: rotate    = require(glsl-utils/rotate.glsl)
#define PI 3.141592653

void main(void) {
    vec3 pos = aVertexPosition * 0.2;
    float a = PI * 1.25 - 0.45;
    pos.xz = rotate(pos.xz, a);
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
    vec3 N = aNormal;
    N.xz = rotate(N.xz, a);
    vNormal = N;
}