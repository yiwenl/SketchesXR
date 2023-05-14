// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uColorMap;
uniform sampler2D uDepthMap;

varying vec2 vTextureCoord;
varying vec3 vColor;

uniform vec2 uViewport;

#pragma glslify: particleSize    = require(./glsl-utils/particleSize.glsl)

#define radius 0.005

void main(void) {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius);

    vec2 uv = gl_Position.xy / gl_Position.w * .5 + .5;
    // vColor = vec3(uv, 0.0);
    vColor = texture2D(uColorMap, uv).rgb;
}