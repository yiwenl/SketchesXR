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
uniform mat4 uFluidMatrix;
uniform mat4 uModelMatrix;


layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;

#pragma glslify: curlNoise = require(glsl-utils/curlNoise.glsl)

// vec2 getFluidUV(vec3 pos) {
//     float FLUID_MAP_SIZE = 0.25 * uSimScale;
//     vec2 uv = pos.xy;
//     return uv / FLUID_MAP_SIZE * .5 + .5;
// }


void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;

    vec4 posFluid = uFluidMatrix * vec4(pos, 1.0);
    vec2 uvFluid = posFluid.xy / posFluid.w * 0.4 + 0.5;
    // uvFluid.y -= 0.25;

    vec3 density = texture(uDensityMap, uvFluid).xyz;
    vec3 fluid = texture(uFluidMap, uvFluid).xyz / 256.0;

    vel += fluid * 0.00005;
    // pos += vel;

    vel *= 0.97;

    if(pos.y <= 0.0) {
        pos.y += 0.25;
        pos.xz = normalize(pos.xz) * mix(0.5, 1.0, extra.x) * 0.1;
    }


    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    // oFragColor3 = vec4(data, 1.0);
    // oFragColor3 = vec4(uvFluid, 0.0, 1.0);
    oFragColor3 = vec4(density, 1.0);
}