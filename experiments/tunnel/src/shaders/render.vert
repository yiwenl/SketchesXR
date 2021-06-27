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
uniform sampler2D uColorMap;
uniform float uParticleScale;
uniform float uOffsetOpen;

out vec4 vShadowCoord;
out vec3 vColor;

const float radius = 0.002;
#pragma glslify: particleSize = require(glsl-utils/particleSize.glsl)

void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz + uPosition;
    vec3 data = texture(uDataMap, aTextureCoord).xyz;
    float life = data.x;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    vShadowCoord = uShadowMatrix * wsPos;

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;

    float t = clamp(uOffsetOpen * 2.0 - aVertexPosition.z, 0.0, 1.0);
    float scaleDiff = mix(1.0, 1.5, aVertexPosition.x);
    float scaleLife = smoothstep(0.0, 0.2, life);
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * scaleDiff * scaleLife * uParticleScale * t;


    vColor = texture(uColorMap, aVertexPosition.yz).rgb * 1.2;
}