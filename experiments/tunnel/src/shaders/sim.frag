#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uPosOrgMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uFluidMap;
uniform sampler2D uDensityMap;

uniform float uTime;
uniform float uPulse;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

vec2 getFluidUV(vec3 pos) {
    float r = 0.55;
    return pos.xy / r * 0.5 + 0.5;
}

#pragma glslify: curlNoise = require(glsl-utils/curlNoise.glsl)

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;

    // fluid
    vec2 uvFluid = getFluidUV(pos);
    float densityFluid = texture(uDensityMap, uvFluid).r;
    vec3 velFluid = texture(uFluidMap, uvFluid).xyz * densityFluid / 128.0;

    float speedOffset = mix(1.2, 1.5, extra.y);
    pos += velFluid * speedOffset * 0.002;

    // noise 
    vec3 acc = vec3(0.0);
    vec3 noise = curlNoise(pos * 3.0 + uTime);
    noise.xy *= 0.05;
    acc += noise * 0.5;

    // pulling
    vec3 dir = normalize(pos) * vec3(1.0, 1.0, 0.0);
    float d = length(pos.xy);
    float f = smoothstep(0.0, 0.3, uPulse);
    f = pow(f, 2.0);
    acc += dir * 6.0 * f;

    vel += acc * 0.0001 * speedOffset;
    pos += vel;
    vel *= 0.995;

    float life = data.x;
    life -= mix(1.85, 2.0, data.y) * 0.01;
    if(life < 0.0) {
        life = 1.0;
        pos = posOrg;
        vel *= 0.0;
    }

    data.x = life;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
}