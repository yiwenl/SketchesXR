#version 300 es

precision highp float;
in vec3 aVertexPosition;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform vec2 uViewport;
uniform float uParticleScale;
uniform float uLightMap;
uniform float uOffset;

out vec3 vColor;
out float vLight;

const float radius = 0.02;
#pragma glslify: particleSize = require(glsl-utils/particleSize.glsl)

#define PI 3.141592653

// #define YELLOW vec3(1.0)
// #define YELLOW vec3(202.0, 187.0, 55.0)/255.0
#define YELLOW vec3(233.0, 218.0, 86.0)/255.0

void main(void) {
    vec3 pos = texture(uPosMap, aVertexPosition.xy).xyz;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);


    vec3 data = texture(uDataMap, aVertexPosition.xy).rgb;
    // opening
    float t = clamp(uOffset * 2.0 - data.z, 0.0, 1.0);

    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * mix(1.0, 2.0, aVertexPosition.z) * uParticleScale * t;
    if(uLightMap > 0.5) {
        gl_PointSize = 40.0 * t;
    }

    float cycle = data.x;

    float g = abs(cycle - PI);
    g = smoothstep(0.7, 0.2, g);
    g = sin(g * PI * 0.5);

    if(uLightMap < 0.5) {
        g = mix(g, 1.0, .1);
    }

    float glow = mix(0.5, 1.5, data.y);
    g *= glow;

    vec3 color = texture(uColorMap, data.yz).rgb * 1.2;

    // vColor = vec3(g) * YELLOW * 1.2 * t;
    vColor = color * t * g;

    if(uLightMap > 0.5) {
        vColor = vec3(g * 0.015) * t;
    }
}