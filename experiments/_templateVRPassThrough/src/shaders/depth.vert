#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uModelViewMatrixInverse;

out vec2 vTextureCoord;
out vec3 vNormal;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

void main(void) {
    vec3 pos = aVertexPosition;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    // gl_Position = vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
}