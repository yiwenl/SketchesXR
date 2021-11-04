#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uPosOrgMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
// uniform sampler2D uDensityMap;
uniform sampler2D uFluidMap;

uniform float uTime;
uniform float uSpeed;

uniform mat4 uFluidMatrix;
uniform mat3 uModelViewMatrixInverse;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

#pragma glslify: snoise = require(glsl-utils/snoise.glsl)
#pragma glslify: curlNoise = require(glsl-utils/curlNoise.glsl)

#define MAX_RADIUS 2.0

vec3 _normalize(vec3 p) {
    if(length(p) <= 0.0) {
        return vec3(0.0);
    }

    return normalize(p);
}

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;

    vec4 posFluid = uFluidMatrix * vec4(pos, 1.0);
    vec2 uvFluid = posFluid.xy / posFluid.w * .5 + .5;

    vec3 acc = vec3(0.0);

    // noise
    float posOffset = snoise(pos + uTime * 0.1);
    posOffset = mix(1.0, 1.2, posOffset) * 0.25;
    vec3 noise = curlNoise(pos * posOffset + uTime * 0.1);
    acc += noise * 0.5;


    // pull force
    float dist = length(pos);
    float f = smoothstep(MAX_RADIUS * 0.5, MAX_RADIUS, dist);
    vec3 dir = -_normalize(pos);
    acc += dir * f * 2.0;

    vel += acc * 0.001;

    // fluid
    vec3 fluid = uModelViewMatrixInverse * _normalize(texture(uFluidMap, uvFluid).xyz);
    fluid /= 256.0;
    vel += fluid * 0.2;
    
    float speedOffset = mix(1.0, 1.5, extra.r) * 0.5 * uSpeed;
    pos += vel * speedOffset;

    vel *= 0.995;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
    // oFragColor3 = vec4(uvFluid, 0.0, 1.0);
    oFragColor3 = vec4(fluid, 1.0);
}