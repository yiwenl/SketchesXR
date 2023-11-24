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

uniform float uTime;
uniform float uStarted;

uniform mat4 uModelMatrix;
uniform mat4 uCameraMatrix;

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
    float life = data.x;

    float distToCenter = length(posOrg.xz);
    float speedEdge = smoothstep(2.0, 0.5, distToCenter);;
    speedEdge = pow(speedEdge, 3.0);
    speedEdge = mix(1.0, speedEdge, 0.9);

    life -= mix(1.0, 3.0, data.y) * 0.004;

    vec3 noise = curlNoise(pos * 0.6 + uTime * 0.4);
    vec3 acc = vec3(0.0, 1.0, 0.0);
    acc += noise;
    // rotation force
    vec3 dir = normalize(pos * vec3(1.0, 0.0, 1.0));
    dir.xz = rotate(dir.xz, PI * 0.6);
    float f = length(pos.xz);
    f = smoothstep(0.1, 0.5, f);
    acc += dir * 0.75 * f;

    vel += acc * 0.0015;


    float speed = mix(1.0, 2.0, extra.x);
    float initSpeed = smoothstep(0.8, 0.5, life);
    pos += vel * speed * initSpeed * speedEdge;
    vel *= 0.95;

    if(uStarted < 1.0) {
        life = 0.0;
    } 

    if(life <= 0.0) {
        pos = posOrg;
        vel *= 0.0;
        life = 1.0;
        needUpdate = true;
    }

    if(needUpdate) {
        vec4 screenPos = uCameraMatrix * uModelMatrix * vec4(posOrg, 1.0);
        vec2 uv = screenPos.xy / screenPos.w * .5 + .5;
        color = texture(uCameraMap, uv).rgb;
    }


    data.x = life;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
    oFragColor4 = vec4(color, 1.0);
}