#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewport;

uniform sampler2D uPosMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;

out vec2 vTextureCoord;
out vec3 vColor;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: particleSize    = require(./glsl-utils/particleSize.glsl)

#define radius 0.002

void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    float life = texture(uDataMap, aTextureCoord).x;
    float scaleLife = abs(life - 0.5);
    scaleLife = smoothstep(0.5, 0.4, scaleLife);
    float scale = aVertexPosition.x * scaleLife;
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * scale;

    // float g = mix(0.85, 1.0, aVertexPosition.y);
    vColor = texture(uColorMap, aTextureCoord).xyz;
}