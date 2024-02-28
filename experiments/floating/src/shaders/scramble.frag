#version 300 es

precision highp float;
in vec2 vTextureCoord;


uniform sampler2D uPosMap;
uniform float uTime;


out vec4 oColor;
#pragma glslify: rotate = require(./glsl-utils/rotate.glsl)
#pragma glslify: snoise = require(./glsl-utils/snoise.glsl)
#pragma glslify: curlNoise = require(./glsl-utils/curlNoise.glsl)

#define PI 3.1415926535897932384626433832795

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 noise = curlNoise(pos * 0.5 + uTime * 0.15);
    pos += noise * 0.2;

    oColor = vec4(pos, 1.0);
}