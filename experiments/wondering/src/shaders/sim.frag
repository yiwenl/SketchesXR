#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform float uTime;
uniform float uCenterY;
uniform float uOffsetOpen;
uniform float uOffsetTouch;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

float NUM = 16.0;


float minThreshold = 0.15;
float maxThreshold = 0.6;

#define PI 3.141529653
#pragma glslify: curlNoise    = require(glsl-utils/curlNoise.glsl)

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float map(float value, float min1, float max1) {
  return map(value, min1, max1, 0.0, 1.0);
}

vec3 safeNormalize(vec3 v) {
    if(length(v) > 0.0) {
        return normalize(v);
    } else {
        return vec3(0.0);
    }
}

void main(void) {
    float t;
    vec3 center = vec3(0.0, uCenterY, 0.0);

    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;
    float life = data.y;

    life -= 0.0002 * mix(1.0, 2.0, data.z);
    if(life < 0.0) {
        life = 1.0;
    }



    vec2 uv;
    vec3 posParticle, velParticle, dataParticle, dir;
    float f, p, dist, delta;
    vec3 acc = vec3(0.0);

    float radiusScale = (1.0 + pow(data.z, 10.0)) * uOffsetTouch;

    float _senseRadius = mix(0.05, 0.08, extra.z) * radiusScale;
    

    for(float i=0.0; i<NUM; i++) {
        for(float j=0.0; j<NUM; j++) {
            uv = vec2(i/NUM, j/NUM);

            posParticle = texture(uPosMap, uv).xyz;
            velParticle = texture(uVelMap, uv).xyz;
            dataParticle = texture(uDataMap, uv).xyz;

            t = 1.0 - abs(dataParticle.y - 0.5) / 0.5;
            t = pow(t, 200.0);

            t *= pow(dataParticle.z, 10.0);
            float senseRadius = _senseRadius * (1.0 + t * 50.0);

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
    // vec3 noise = curlNoise(pos * 10.0 + uTime * 0.2);
    // acc += noise * 0.16;

    // pull force
    dist = distance(pos, center);
    dir = safeNormalize(center - pos);
    f = smoothstep(0.1, 0.0, dist);
    f = 1.0 / (f + 0.01) * 0.1;
    
    acc += dir * f * mix(0.05, 0.15, extra.y);

    float speedOffset = extra.x;
    vel += acc * 0.000015 * speedOffset * uOffsetOpen * uOffsetTouch;

    pos += vel;
    vel *= 0.97;

    float speed = length(vel);
    speed = map(speed, 0.0, 0.0008);

    data = vec3(speed, life, data.z);


    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
}