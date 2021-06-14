#version 300 es

precision highp float;
in vec3 aVertexPosition;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uColorMap;
uniform vec2 uViewport;

out vec3 vColor;


const float radius = 0.001;
#pragma glslify: particleSize = require(glsl-utils/particleSize.glsl)

void main(void) {
    vec3 pos = texture(uPosMap, aVertexPosition.xy).xyz;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    
    vColor = texture(uColorMap, aVertexPosition.xy).xyz;

    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * mix(1.0, 2.0, aVertexPosition.z);
}