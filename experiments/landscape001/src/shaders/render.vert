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

out vec3 vColor;
out vec4 vShadowCoord;

const float radius = 0.015;
#pragma glslify: particleSize = require(glsl-utils/particleSize.glsl)
#pragma glslify: rotate = require(glsl-utils/rotate.glsl)


void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    // vColor = texture(uDataMap, aTextureCoord).xyz;
    vColor = vec3(1.0);
    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    vShadowCoord = uShadowMatrix * wsPos;

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;

    float scale = mix(1.0, 2.0, aVertexPosition.z);
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * scale;

}