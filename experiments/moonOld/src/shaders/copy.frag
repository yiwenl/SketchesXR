#version 300 es

precision highp float;
in vec2 vTextureCoord;
uniform sampler2D uColorMap;

out vec4 oColor;

void main(void) {
    oColor = texture(uColorMap, vTextureCoord);
}