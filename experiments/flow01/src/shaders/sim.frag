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
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

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
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;
    vec3 color = texture(uColorMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    float life = data.x;

    life -= mix(1.0, 4.0, data.y) * 0.005;

    vec3 acc = vec3(0.0);

    vec3 noise = curlNoise(pos * 0.5 + (extra - 0.5) * 0.1 + uTime * 0.5);
    acc += noise;

    float speed = mix(1.0, 3.0, extra.x);
    vel += acc * speed * 0.001;

    pos += vel;
    vel *= 0.92;


    if(life < 0.0) {
        pos = posOrg;
        vel = vec3(0.0);
        life = 1.0;

        // repick color
        vec4 screenPos = uProjectionMatrix * uViewMatrix * vec4(pos, 1.0);
        vec2 uv = screenPos.xy / screenPos.w * .5 + .5;
        color = texture(uCameraMap, uv).xyz;
    }

    data.x = life;

    

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
    oFragColor4 = vec4(color, 1.0);
    // oFragColor4 = vec4(uv, 0.0, 1.0);
}