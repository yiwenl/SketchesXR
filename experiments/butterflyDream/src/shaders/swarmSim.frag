#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;

uniform float uMaxHeight;
uniform float uTime;
uniform float uSpeed;
uniform float uOffsetCircle;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

#pragma glslify: snoise             = require(glsl-utils/snoise.glsl)
#pragma glslify: curlNoise          = require(glsl-utils/curlNoise.glsl)
#pragma glslify: safeNormalize      = require(./normalize.glsl)
#pragma glslify: rotate             = require(glsl-utils/rotate.glsl)

#define PI 3.141529653

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).rgb;
    vec3 vel = texture(uVelMap, vTextureCoord).rgb;
    vec3 extra = texture(uExtraMap, vTextureCoord).rgb;
    vec3 data = texture(uDataMap, vTextureCoord).rgb;

    vec3 acc = vec3(0.0, 0.1, 0.0);

    float posOffset = snoise(pos + uTime);
    posOffset = mix(1.0, 2.0, posOffset) * 0.1;
    vec3 noise = curlNoise(pos * posOffset);
    // noise = clamp(noise, vec3(-1.0), vec3(1.0));
    noise.y = (noise.y + 1.0) * 0.5;

    acc += noise;

    // rotation force
    vec3 dir = safeNormalize(pos * vec3(1.0, 0.0, 1.0));
    vec3 dirPull = -dir;
    dir.xz = rotate(dir.xz, PI * 0.5);
    acc += dir * 0.5;

    // pull back to center
    float dist = length(pos.xz);
    float f = smoothstep(5.0, 8.0, dist);
    acc += dirPull * f;

    float offsetCircle = step(0.01, uOffsetCircle);

    float speed = mix(1.0, 2.0, extra.y) * 0.0005 * (1.0 - offsetCircle);
    vel += acc * speed * uSpeed;
    pos += vel;
    vel *= 0.96;

    if(pos.y > uMaxHeight && offsetCircle <= 0.01) {
        pos.y -= uMaxHeight;
        pos.xz = safeNormalize(pos.xz) * mix(5.0, 10.0, extra.z);
        pos.xz = rotate(pos.xz, extra.y * PI);
        vel *= 0.1;
    }

    data.xy = rotate(data.xy, mix(1.0, 20.0, extra.z) * 0.001);
    vec3 target = data + vec3(0.0, 1.5, 0.4);
    pos += (target - pos) * uOffsetCircle * 0.15;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
}