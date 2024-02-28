#version 300 es

precision highp float;
in vec2 vTextureCoord;
uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;

uniform float uTime;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: snoise    = require(./glsl-utils/snoise.glsl)
#pragma glslify: curlNoise    = require(./glsl-utils/curlNoise.glsl)

#define maxRadius 4.0

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec4 extra = texture(uExtraMap, vTextureCoord);


    float time = uTime * 0.01;

    float posOffset = snoise(pos + time) * .5 + .5;
    posOffset = mix(1.0, 4.0, posOffset) * 0.1;

    vec3 noise = curlNoise(pos * posOffset - time * 0.02);
    float speed = mix(1.0, 2.0, extra.x);

    vec3 uCenter = vec3(0.0, 0.0, 0.0);
    float distToCenter = length(pos);
    vec3 dir = -normalize(pos);
    float f = smoothstep(maxRadius * 0.5, maxRadius, distToCenter);
    noise += dir * f * 0.8;

    vel += noise * speed * 0.0005;
    pos += vel;

    vel *= .95;

    if(distToCenter > maxRadius) {
        // pos = normalize(pos) * maxRadius;
        // vel *= -1.0;
    }

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = extra;
}