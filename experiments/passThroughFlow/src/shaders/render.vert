#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aPosOffset;
in vec2 aUV;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;

out vec4 vShadowCoord;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

#define AXIS_X vec3(1.0, 0.0, 0.0)

void main(void) {
    vec3 posOffset = texture(uPosMap, aUV).xyz;
    vec3 pos = aVertexPosition;
    pos *= aPosOffset.x;
    pos.yz *= aPosOffset.y;
    float life = texture(uDataMap, aUV).x;
    float scaleLife = smoothstep(0.0, 0.1, life);
    pos *= scaleLife;

    vec3 dir = normalize(texture(uVelMap, aUV).xyz);
    vec3 axis = cross(dir, AXIS_X);
    float angle = acos(dot(dir, AXIS_X));
    pos = rotate(pos, axis, angle);

    pos += posOffset;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;

    vColor = texture(uColorMap, aUV).xyz;
    vShadowCoord = uShadowMatrix * wsPos;
}