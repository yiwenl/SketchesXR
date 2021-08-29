#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform vec3 uColor;
uniform float uOpacity;

out vec4 oColor;

void main(void) {

    float d = distance(vTextureCoord, vec2(0.5));
    d = smoothstep(0.4, 0.1, d);

    oColor = vec4(uColor, d * uOpacity);
}