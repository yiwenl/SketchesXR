#version 300 es

precision highp float;
in vec3 vNormal;
in vec3 vColor;

out vec4 oColor;

#pragma glslify: diffuse    = require(./glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 0.8, 0.6)

void main(void) {
    float g = diffuse(vNormal, LIGHT, .5);
    oColor = vec4(vColor * g, 1.0);
}