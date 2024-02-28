#version 300 es

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
in vec2 vTextureCoord;
uniform float uSeed;

out vec4 oColor;

#pragma glslify: curlNoise    = require(./glsl-utils/curlNoise.glsl)
#pragma glslify: fbm          = require(./glsl-utils/fbm/3d.glsl)

void main(void) {
    float s = 3.0;
    float n = fbm(vec3(vTextureCoord, uSeed) * s * 10.0) - 0.5;
    float n1 = fbm(vec3(vTextureCoord, uSeed) * s * 40.0) - 0.5;
    n += n1 * 0.5;
    n = clamp(n, -1.0, 1.0);
    vec3 noise = curlNoise(vec3(vTextureCoord, uSeed) * s);
    noise.z = n * 20.0;
    oColor = vec4(noise, 1.0);
}