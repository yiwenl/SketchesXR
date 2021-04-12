#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform vec2 uViewport;
uniform float uParticleScale;
uniform float uOffsetOpen;
uniform float uRingRadius;

out vec3 vColor;
out vec4 vShadowCoord;

const float radius = 0.0015;
#pragma glslify: particleSize = require(glsl-utils/particleSize.glsl)
#pragma glslify: rotate = require(glsl-utils/rotate.glsl)


void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    vec3 posOpening = normalize(pos) * uRingRadius * uOffsetOpen;
    pos = mix(posOpening, pos, uOffsetOpen);

    float life = texture(uDataMap, aTextureCoord).x;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    vShadowCoord = uShadowMatrix * wsPos;
    
    vColor = texture(uColorMap, aVertexPosition.yz).rgb;

    float scaleLife = smoothstep(0.0, 0.2, life);
    float scaleDiff = mix(1.0, 1.5, aVertexPosition.x);
    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * scaleLife * scaleDiff * uParticleScale;

}