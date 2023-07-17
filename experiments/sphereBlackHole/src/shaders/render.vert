#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform vec2 uViewport;

uniform sampler2D uPosMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;

uniform float uParticleScale;
out vec4 vShadowCoord;
out vec3 vColor;

const float radius = 0.001;
#pragma glslify: particleSize = require(./glsl-utils/particleSize.glsl)

void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    float life = texture(uDataMap, aTextureCoord).x;
    vec3 color = texture(uColorMap, aTextureCoord).xyz;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    float pointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * mix(1.0, 3.0, aVertexPosition.x);
    pointSize *= uParticleScale;
    gl_PointSize = pointSize;

    vShadowCoord = uShadowMatrix * wsPos;
    vColor = color;
}