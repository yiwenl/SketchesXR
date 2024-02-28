#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform vec2 uViewport;

out vec3 vColor;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: particleSize    = require(./glsl-utils/particleSize.glsl)

#define radius 0.015

void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    // size
    float scale = mix(1.0, 3.0, aVertexPosition.x);
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * scale;

    // color
    vColor = vec3(1.0);
}