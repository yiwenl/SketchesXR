#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aPosOffset;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

void main(void) {
    float scale = mix(1.0, 4.0, aExtra.x) * 0.01;
    vec3 pos = aVertexPosition * scale + aPosOffset;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
    float g = mix(.5, 1.0, aExtra.y);
    vColor = vec3(g, g, g);
}