#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;

uniform float uTime;

#pragma glslify: snoise    = require(./glsl-utils/snoise.glsl)
#pragma glslify: curlNoise    = require(./glsl-utils/curlNoise.glsl)


layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;
layout (location = 4) out vec4 oFragColor4;

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec4 extra = texture(uExtraMap, vTextureCoord);
    vec4 data = texture(uDataMap, vTextureCoord);

    float posOffset = snoise(pos * 0.1) * .5 + .5;
    posOffset = mix(1.0, 2.0, posOffset);

    vec3 noise = curlNoise(pos * 1.1 * posOffset + uTime * 0.1);
    noise.y = noise.y * .4 + .6;
    noise.y *= 2.0;


    vec3 dir = normalize(pos * vec3(1.0, 0.0, 1.0));
    float f = length(pos.xz);
    f = smoothstep(1.5, 1.0, f);
    vec3 acc = noise - dir * f * 0.4;

    float s = 0.2;
    float nx = snoise(pos.yxz * s - uTime * 0.1);
    float nz = snoise(pos.zyx * s - uTime * 0.1);
    acc += vec3(nx, 0.0, nz) * 1.5;


    float speed = mix(1.0, 3.0, extra.x);
    vel += acc * 0.0001 * speed;

    pos += vel;
    vel *= 0.95;
    // pos.y += 0.01;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = extra;
    oFragColor3 = data;
    oFragColor4 = texture(uColorMap, vTextureCoord);
}