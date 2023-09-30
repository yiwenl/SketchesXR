#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aPosOffset;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

vec3 _normalize(vec3 v) {
    if(length(v) == 0.0) {
        return vec3(.0);
    } else {
        return normalize(v);
    }
}

#define axisX vec3(1.0, 0.0, 0.0)

void main(void) {
    vec3 pos = aVertexPosition;
    float scale = mix(0.5, 2.0, aExtra.x);
    pos *= scale;

    vec3 dir = _normalize(texture(uVelMap, aPosOffset.xy).xyz);
    float life = texture(uDataMap, aPosOffset.xy).x;
    float lifeScale = abs(life - 0.5);
    lifeScale = smoothstep(0.5, 0.4, lifeScale);
    pos *= lifeScale;

    vec3 axis = cross(dir, axisX);
    float theta = acos(dot(dir, axisX));
    pos = rotate(pos, axis, theta);

    vec3 posOffset = texture(uPosMap, aPosOffset.xy).xyz;

    pos += posOffset;


    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;

    vec3 N = rotate(aNormal, axis, theta);
    vNormal = N;


    vec3 color = texture(uColorMap, aPosOffset.xy).xyz;
    float g = mix(0.7, 1.0, aExtra.z);
    vColor = color;
}