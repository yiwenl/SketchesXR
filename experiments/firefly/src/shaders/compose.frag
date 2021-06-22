#version 300 es

precision highp float;
in vec2 vTextureCoord;
uniform sampler2D uMap;
uniform sampler2D uBlurMap;

out vec4 oColor;


void main(void) {
    vec4 color = texture(uMap, vTextureCoord);
    vec4 colorBlur = texture(uBlurMap, vTextureCoord);
    oColor = color + colorBlur;
    // oColor = colorBlur;
}