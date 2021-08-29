#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;

uniform float uNum;
uniform float uCenter;
uniform float uTime;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

#pragma glslify: curlNoise          = require(glsl-utils/curlNoise.glsl)
#pragma glslify: safeNormalize      = require(./normalize.glsl)
#pragma glslify: map                = require(./map.glsl)

#define NUM uNum
#define senseRadius 1.0
#define PI 3.141529653

const float minThreshold = 0.2;
const float maxThreshold = 0.6;

void main(void) {
    vec3 center = vec3(0.0, uCenter, 0.0);

    vec3 pos = texture(uPosMap, vTextureCoord).rgb;
    vec3 vel = texture(uVelMap, vTextureCoord).rgb;
    vec3 extra = texture(uExtraMap, vTextureCoord).rgb;
    vec3 data = texture(uDataMap, vTextureCoord).rgb;

    vec2 uv;
    vec3 posParticle, velParticle, dataParticle, dir;
    float t, f, p, dist, delta;
    vec3 acc = vec3(0.0);

    for(float i=0.0; i<uNum; i++) {
        for(float j=0.0; j<uNum; j++) {
            uv = vec2(i/NUM, j/NUM);

            posParticle = texture(uPosMap, uv).xyz;
            velParticle = texture(uVelMap, uv).xyz;

            dist = distance(posParticle, pos);

            if(dist > 0.0 && dist < senseRadius) {
                p = dist/senseRadius;
                dir = normalize(pos - posParticle);

                if(p < minThreshold) {
                    delta = map(p, 0.0, minThreshold);
                    f = 1.0 / delta;
                    f = min(f, 5.0);
                    acc += dir * 0.5 * f * (1.0 + t);
                } else if( p > maxThreshold) {
                    delta = map(p, maxThreshold, 1.0);
                    delta = sin(delta * PI);
                    f = pow(delta, 1.5) * 0.02;
                    acc -= dir * 0.15 * f;
                }

                // alignment
                dir = (safeNormalize(vel) + safeNormalize(velParticle)) * 0.5;
                f = sin(p * PI);
                acc += dir * f * 0.01;
            }
        }
    }

    // noise
    vec3 noise = curlNoise(pos + uTime * 0.2);
    acc += noise * 0.1;

    // pull force
    float radius = 3.0;
    dist = distance(pos, center);
    dir = safeNormalize(center - pos);
    f = smoothstep(radius * 0.5, radius, dist);
    acc += dir * f * mix(0.5, 1.5, extra.y) * 1.0;

    float speedOffset = mix(0.95, 1.0, extra.x);
    vel += acc * 0.005 * speedOffset;

    pos += vel;
    vel *= 0.98;


    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
}