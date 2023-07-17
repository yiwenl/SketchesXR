#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform sampler2D uPosOrgMap;
uniform sampler2D uCameraMap;
uniform sampler2D uFluidMap;
uniform sampler2D uDensityMap;

uniform mat3 uModelViewMatrixInverse;
uniform mat4 uFluidMatrix;
uniform mat4 uModelMatrix;

uniform float uTime;
uniform float uStarted;

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
    vec3 color = texture(uColorMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;


    vec4 fluidPos = uFluidMatrix * vec4(pos, 1.0);
    vec2 uvFluid = fluidPos.xy / fluidPos.w * 0.25;
    uvFluid.x += 0.5;

    // vec3 acc = normalize(texture(uFluidMap, uvFluid).xyz);
    vec3 acc = texture(uFluidMap, uvFluid).xyz / 1024. / 4.0;
    acc = uModelViewMatrixInverse * acc;
    float density = texture(uDensityMap, uvFluid).x;
    density = smoothstep(0.0, 1.0, density);


    float speed = mix(1.0, 3.0, extra.x);
    vel += acc * speed * 0.001;

    pos += vel;
    pos.y = max(pos.y, 0.0);

    vec3 sphereCenter = vec3(0.0, 0.5, 0.0);

    if(distance(pos, sphereCenter) > 1.0) {
        pos = normalize(pos - sphereCenter) + sphereCenter;
    }
    vel *= 0.96;


    float life = data.x;
    life -= mix(1.0, 3.0, data.y) * 0.01;

    // pos.y += mix(1.0, 4.0, extra.x) * 0.01;
    // float r = 1.0;
    // if(pos.y > r) {
    //     pos.y = 0.0;
    // }



    if(life <= 0.0) {
        pos = posOrg;
        vel *= 0.0;
        life = 1.0;
    }

    data.x = life;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
    oFragColor4 = vec4(color, 1.0);
}