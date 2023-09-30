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

out vec3 vColor;

const float radius = 0.001;
#pragma glslify: particleSize = require(./glsl-utils/particleSize.glsl)

#define PI 3.1415926535897932384626433832795

void main(void) {
    vec3 pos = texture(uPosMap, aTextureCoord).xyz;
    vec3 data = texture(uDataMap, aVertexPosition.xy).rgb;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * mix(1.0, 3.0, aVertexPosition.x);
    gl_PointSize = 10.0;

    float cycle = data.x;

    float g = abs(cycle - PI);
    g = smoothstep(0.7, 0.2, g);
    g = sin(g * PI * 0.5);
    g = mix(g, 1.0, .1);

    vColor = vec3(g);
}