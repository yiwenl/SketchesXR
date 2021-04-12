#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform float uRatio;
uniform float uOpacity;

out vec4 oColor;

void main(void) {
    vec2 diff = vTextureCoord - 0.5;
    diff.y /= uRatio;
    float d = length(diff);
    d = smoothstep(0.0, 0.3, d);
    oColor = vec4(0.0, 0.0, 0.0, d * uOpacity);
}