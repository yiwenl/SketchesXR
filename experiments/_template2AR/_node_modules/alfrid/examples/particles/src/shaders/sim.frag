#version 300 es

precision highp float;

in vec2 vTextureCoord;

uniform sampler2D texturePos;
uniform sampler2D textureVel;
uniform sampler2D textureExtra;
uniform sampler2D textureLife;

uniform float uTime;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

#pragma glslify: snoise    = require(glsl-utils/snoise.glsl)
#pragma glslify: curlNoise    = require(glsl-utils/curlNoise.glsl)

#define MAX_RADIUS 2.0

void main(void) {
    vec3 pos = texture(texturePos, vTextureCoord).xyz;
    vec3 vel = texture(textureVel, vTextureCoord).xyz;
    vec3 extra = texture(textureExtra, vTextureCoord).xyz;
    float life = texture(textureLife, vTextureCoord).x;


    vec3 acc = vec3(0.0);
    float _seed = snoise(pos * mix(0.25, 0.5, extra.z) - uTime * 0.01) * .5 + .5;
    float posOffset = mix(0.05, 0.2, _seed);
    vec3 noise = curlNoise(pos * posOffset + uTime * 0.1);

    acc += noise;

    float d = length(pos);
    vec3 dir = normalize(pos);
    if(d > MAX_RADIUS) {
        float f = d - MAX_RADIUS;
        acc -= dir * f * 0.4;
    }

    float speed = mix(1.0, 2.0, extra.y);
    vel += acc * 0.002 * speed;

    pos += vel;
    vel *= 0.96;


    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(life, 0.0, 0.0, 1.0);
}