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
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform vec2 uViewport;
uniform float uPointScale;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;
out vec4 vShadowCoord;

const float radius = 0.001;
#pragma glslify: particleSize = require(./glsl-utils/particleSize.glsl)


void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    float life = texture(uDataMap, aTextureCoord).x;
    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;

    float lifeScale = smoothstep(0.0, 0.1, life);
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * mix(1.0, 3.0, aVertexPosition.x) * uPointScale * lifeScale;

    // color
    float g = mix(0.8, 1.0, aVertexPosition.y);
    vec3 color = texture(uColorMap, aTextureCoord).xyz;
    vColor = color;

    vShadowCoord = uShadowMatrix * wsPos;
}