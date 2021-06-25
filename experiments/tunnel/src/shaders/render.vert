#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
// in vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform vec2 uViewport;
uniform vec3 uPosition;

uniform sampler2D uPosMap;
uniform sampler2D uDataMap;

out vec4 vShadowCoord;

const float radius = 0.0015;
#pragma glslify: particleSize = require(glsl-utils/particleSize.glsl)

void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz + uPosition;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    vShadowCoord = uShadowMatrix * wsPos;

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;

    float scaleDiff = mix(1.0, 1.5, aVertexPosition.x);
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * scaleDiff;
}