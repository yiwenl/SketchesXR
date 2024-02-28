#version 300 es

precision highp float;
in vec2 vTextureCoord;
in vec3 vColor;
uniform sampler2D uMap;

out vec4 oColor;

void main(void) {
    oColor = vec4(vColor, 1.0);
}