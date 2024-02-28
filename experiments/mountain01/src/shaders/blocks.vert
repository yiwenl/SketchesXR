#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;

// instance
in vec2 aUV;
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

#define AXIS_X vec3(1.0, 0.0, 0.0)

void main(void) {
    vec3 pos = aVertexPosition * aExtra.x;
    vec3 posOffset = texture(uPosMap, aUV).xyz;
    vec3 dir = normalize(texture(uVelMap, aUV).xyz);

    float life = texture(uDataMap, aUV).x;
    float scaleLife = abs(life - 0.5);
    scaleLife = smoothstep(0.5, 0.4, scaleLife);

    pos *= scaleLife;

    vec3 axis =cross(dir, AXIS_X);
    float angle = acos(dot(dir, AXIS_X));
    pos = rotate(pos, axis, angle);

    pos += posOffset;

    vec3 N = aNormal;
    vNormal = rotate(N, axis, angle);


    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
    vColor = texture(uColorMap, aUV).xyz;
}