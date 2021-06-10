#version 300 es

precision highp float;
in vec3 vPosition;
in vec3 vExtra;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;

void main(void) {
    oFragColor0 = vec4(vPosition, 1.0);
    oFragColor1 = vec4(vExtra, 1.0);
}