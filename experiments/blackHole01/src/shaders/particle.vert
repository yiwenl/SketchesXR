#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;

uniform vec2 uViewport;
uniform float uOffset;

out vec3 vColor;
out vec3 vRandom;
out vec4 vShadowCoord;
out float vSkip;
out float vLife;

#pragma glslify: particleSize    = require(./glsl-utils/particleSize.glsl)
#define radius 0.015

void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    vec3 vel = texture(uVelMap, aTextureCoord).xyz;

    vec4 vWsPosition = uModelMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * vWsPosition;


    float life = texture(uDataMap , aTextureCoord).x;
    vLife = life;
    float lifeScale = smoothstep(0.5, 0.4, abs(life - 0.5));

    float offset = clamp(uOffset * 2.0 - fract(aVertexPosition.x + aVertexPosition.y), 0.0, 1.0);
    vSkip = offset <= 0.01 ? 1.0 : 0.0;
    float scale = aVertexPosition.z * lifeScale * offset;
    if(fract(aVertexPosition.x + aVertexPosition.z) < 0.01) {
        // scale *= 5.0;
    }
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * scale;

    vec3 color = texture(uColorMap, aTextureCoord).xyz;
    vColor = color;

    vShadowCoord = uShadowMatrix * vWsPosition;
    vRandom = aVertexPosition;
}