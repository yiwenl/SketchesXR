#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uPosOrgMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uDensityMap;
uniform sampler2D uFluidMap;

uniform float uTime;
uniform float uFloor;
uniform float uOffsetOpen;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

#pragma glslify: curlNoise = require(glsl-utils/curlNoise.glsl)

#define FLUID_MAP_SIZE 0.25
vec2 getFluidUV(vec3 pos) {
    vec2 uv = pos.xy;
    return uv / FLUID_MAP_SIZE * .5 + .5;
}


void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;

    float offsetOpen = uOffsetOpen;

    float life = data.x;
    life -= mix(1.0, 2.0, data.y) * 0.005;

    vec3 acc = vec3(0.0);

    // noise
    float posOffset = mix(1.0, 2.0, extra.z) * 5.0;
    vec3 noise = curlNoise(pos * posOffset * vec3(1.0, 1.0, 4.0));
    acc += noise;
    acc += normalize(pos * vec3(1.0, 1.0, 0.0)) * 0.5;
    acc.y -= mix(1.95, 0.1, life) * offsetOpen;
    acc.z *= 0.5;


    float speedOffset = mix(1.0, 2.0, extra.x);

    vel += acc * speedOffset * 0.00002;
    pos += vel * offsetOpen;
    vel *= 0.98;


    vec2 uvFluid = getFluidUV(pos);
    float density = texture(uDensityMap, uvFluid).x; 
    density = mix(density, 1.0, .75);
    vec3 fluid = texture(uFluidMap, uvFluid).xyz;
    fluid /= 256.0;

    pos += fluid * 0.001 * offsetOpen;
    if(pos.y < uFloor) {
        pos.y = uFloor;
        vel.y = abs(vel.y);
        vel *= 0.5;
    }

    float minRadius = 0.03 * offsetOpen;
    if(length(pos.xy) < minRadius) {
        pos.xy = normalize(pos.xy) * minRadius;
        float speed = length(vel.xy);
        vel.xy = mix(normalize(vel.xy), normalize(pos.xy), .5) * speed;
    }


    if(life <= 0.0) {
        life = 1.0;
        pos = posOrg * offsetOpen;
        vel *= 0.0;
    }

    if(uOffsetOpen < 0.01) {
        pos = posOrg * offsetOpen;
    }

    data.x = life;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
}