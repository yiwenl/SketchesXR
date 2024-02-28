#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform sampler2D uPosOrgMap;
uniform float uTime;
uniform float uSeed;


uniform vec3 uTouchLeft;
uniform vec3 uTouchRight;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;
layout (location = 4) out vec4 oFragColor4;

#pragma glslify: curlNoise    = require(./glsl-utils/curlNoise.glsl)

void main(void) {
    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 posOrg = texture(uPosOrgMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;
    vec3 color = texture(uColorMap, vTextureCoord).xyz;

    float distToTouch = distance(pos, uTouchRight);

    float life = data.x;
    // float t = 1.0 + smoothstep(0.5, 1.0, distToTouch) * 2.0;
    // life -= mix(1.0, 2.0, extra.z) * 0.005 * t;
    life -= mix(1.0, 2.0, extra.z) * 0.005;

    float time = uSeed + uTime * 0.0001;
    vec3 acc = curlNoise(pos * 2.0 + time);
    acc.y = (acc.y + 1.0) * .5;

    
    vec3 dirToTouch = normalize(uTouchRight - pos);
    float f = smoothstep(1.0, 0.0, distToTouch);
    acc += dirToTouch * f * 4.0;

    float speed = mix(1.0, 3.0, extra.x);
    vel += acc * speed * 0.00002;

    pos += vel;
    vel *= .95;

    if(life <= 0.0) {
        life = distToTouch < 1.0 ? 1.0 : 0.0;
        pos = posOrg;
        vel = vec3(0.0);
    }

    data.x = life;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
    oFragColor4 = vec4(color, 1.0);
}