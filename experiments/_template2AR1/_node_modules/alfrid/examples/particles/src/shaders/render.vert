#version 300 es

precision highp float;
in vec3 aVertexPosition;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewport;
uniform sampler2D texturePos;

const float radius = 0.01;

void main(void) {
    vec3 pos = texture(texturePos, aVertexPosition.xy).xyz;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    float distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;
    gl_PointSize = distOffset;
}