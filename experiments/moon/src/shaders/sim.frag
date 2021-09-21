#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uPosOrgMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform sampler2D uMoonMap;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uTime;
uniform vec3 uCenter;
uniform float uRadius;


layout (location = 0) out vec4 oColor0;
layout (location = 1) out vec4 oColor1;
layout (location = 2) out vec4 oColor2;
layout (location = 3) out vec4 oColor3;
layout (location = 4) out vec4 oColor4;

#pragma glslify: snoise = require(glsl-utils/snoise.glsl)
#pragma glslify: curlNoise = require(glsl-utils/curlNoise.glsl)
#pragma glslify: rotate = require(glsl-utils/rotate.glsl)
#define PI 3.141592653

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;
    vec3 color = texture(uColorMap, vTextureCoord).xyz;

    // getting moon color
    vec4 posScreen = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vec2 uvScreen = posScreen.xy / posScreen.w * .5 + .5;
    vec3 colorMoon = texture(uMoonMap, uvScreen).xyz;

    float needUpdateColor = data.y;
    if(needUpdateColor > 0.5) {
        color = colorMoon;
        needUpdateColor = 0.0;
    }


    float life = data.x;
    life -= 0.002;


    vec3 acc = vec3(0.0);
    acc.y -= 1.0;

    // noise
    float posOffset = snoise(pos * 4.0 + uTime);
    posOffset = mix(2.0, 10.0, posOffset);
    vec3 noise = curlNoise(pos * posOffset + uTime);
    noise.y = noise.y * .5 + .5;
    acc += noise * 0.5;

    // rotate
    vec3 dir = normalize(vec3(pos.x, 0.0, pos.z));
    dir.xz = rotate(dir.xz, PI * 0.8);
    acc += dir * 0.8 * smoothstep(0.1, 0.3, pos.y);

    // pulling
    dir = normalize(uCenter - pos);
    acc += dir * 0.1;


    float speedOffset = mix(1.0, 2.0, extra.x);
    float initSpeed = smoothstep(1.0, 0.8, life);
    vel += acc * speedOffset * 0.00004 * initSpeed;


    pos += vel;

    if(pos.y < 0.0) {
        pos.y *= -0.9;
        vel.xz *= 1.5;
        vel.y = abs(vel.y);
    }


    vel *= 0.98;

    if(pos.y <= 0.001) {
        data.z += 1.0;
    } else {
        data.z = 0.0;
    }

    if(distance(pos, uCenter) < uRadius) {
        pos = normalize(pos - uCenter) * uRadius + uCenter;
    }

    if(life <= 0.0) {
        life = 1.0;
        pos = posOrg;
        needUpdateColor = 1.0;
        vel *= 0.0;
    }

    data.x = life;
    data.y = needUpdateColor;



    oColor0 = vec4(pos, 1.0);
    oColor1 = vec4(vel, 1.0);
    oColor2 = vec4(data, 1.0);
    oColor3 = vec4(extra, 1.0);
    oColor4 = vec4(color, 1.0);
}