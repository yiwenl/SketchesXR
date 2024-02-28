#version 300 es

precision highp float;
in vec3 vColor;
in vec3 vNormal;

#pragma glslify: diffuse    = require(./glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 0.8, 0.6)

out vec4 oColor;

void main(void) {
    float g = diffuse(vNormal, LIGHT, .25);
    oColor = vec4(vColor * g * 1.1, 1.0);
}