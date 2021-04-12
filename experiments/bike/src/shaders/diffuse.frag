#version 300 es

precision highp float;

in vec3 vNormal;

out vec4 oColor;

#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 1.0, 1.0)

void main(void) {
    float g = diffuse(vNormal, LIGHT, .5);
    oColor = vec4(vec3(g), 1.0);
}