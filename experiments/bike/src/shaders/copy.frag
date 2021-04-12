#version 300 es

precision highp float;
in vec2 vTextureCoord;
out vec4 oColor;

uniform sampler2D uMap;

void main(void) {
    oColor = texture(uMap, vTextureCoord);
}