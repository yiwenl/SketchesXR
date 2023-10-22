#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform mat4 uLocalMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uPosOrgMap;
uniform sampler2D uColorMap;
uniform sampler2D uFluidMap;
uniform sampler2D uDensityMap;
uniform sampler2D uEnvMap;

uniform float uBound;
uniform float uTime;
uniform float uForce;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;
layout (location = 4) out vec4 oFragColor4;

#pragma glslify: rotate = require(./glsl-utils/rotate.glsl)
#pragma glslify: snoise = require(./glsl-utils/snoise.glsl)
#pragma glslify: curlNoise = require(./glsl-utils/curlNoise.glsl)

#define PI 3.1415926535897932384626433832795

void main(void) {
    bool needUpdate = false;

    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    vec3 color = texture(uColorMap, vTextureCoord).xyz;
    float life = data.x;
    life -= mix(1.0, 3.0, data.y) * 0.002;

    float pullForce = length(pos);
    pullForce = smoothstep(0.0, uBound * 0.5, pullForce);
    pullForce = mix(0.5, 2.0, pullForce);

    vec3 acc = vec3(0.0);
    vec3 dir = normalize(pos);
    dir.z *= 0.01;
    dir.xy = rotate(dir.xy, -PI * 0.7);
    acc += dir * 5.0;

    dir = -normalize(pos);
    acc += dir * mix(1.0, 4.0, extra.z);

    vec2 uvFluid = pos.xy / uBound * .5 + .5;
    vec3 fluid = texture(uFluidMap, uvFluid).rgb;
    float density = texture(uDensityMap, uvFluid).x;
    density = mix(0.5, 1.0, density);
    acc += fluid * 0.01 * density;

    // depth noise
    float noise = snoise(vec3(pos * 0.75 + uTime * 0.5));
    acc.z += noise * 12.5 * density;

    
    float speedLife = smoothstep(.9, .7, life);

    float speed = mix(1.0, 2.0, extra.x);
    vel += acc * speed * speedLife * 0.0002 * uForce;
    vel *= 0.92;

    pos += vel;

    if(life < 0.0) {
        life = 1.0;
        pos = posOrg;

        // re-sample color
        vec4 screenPos = uProjectionMatrix * uViewMatrix * uLocalMatrix * vec4(posOrg, 1.0);
        vec2 uv = screenPos.xy/screenPos.w * .5 + .5;
        color = texture(uEnvMap, uv).rgb;
    }


    // re-sample color
    // vec4 screenPos = uProjectionMatrix * uViewMatrix * uLocalMatrix * vec4(pos, 1.0);
    // vec2 uv = screenPos.xy/screenPos.w * .5 + .5;
    // color = texture(uEnvMap, uv).rgb;

    data.x = life;

    

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
    oFragColor4 = vec4(color, 1.0);
}