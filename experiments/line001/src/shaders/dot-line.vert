// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec3 aOffset;
attribute vec4 aData;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform vec3 uPointA;
uniform vec3 uPointB;
uniform vec2 uViewport;

varying vec3 vColor;

#pragma glslify: particleSize    = require(./glsl-utils/particleSize.glsl)
#pragma glslify: rotate          = require(./glsl-utils/rotate.glsl)

#define PI 3.141592653
#define radius 0.001

void main(void) {
    float l = distance(uPointA, uPointB);
    vec3 pos = aOffset;
    pos += mix(uPointA, uPointB, aVertexPosition.x);


    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * aVertexPosition.y;

    float g = mix(0.5, 1.0, aData.w);
    vColor = vec3(g);

}