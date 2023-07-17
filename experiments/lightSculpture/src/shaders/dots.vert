// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec3 aData;
attribute vec3 aRandom;

// instancing
attribute vec3 aPointA;
attribute vec3 aPointB;
attribute vec3 aColor;
attribute vec3 aLineData;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewport;

uniform float uSpread;
uniform float uTotal;

varying vec3 vColor;
varying float vSkip;

#pragma glslify: particleSize    = require(./glsl-utils/particleSize.glsl)

#define radius 0.0001

void main(void) {
    vec3 pos = aVertexPosition * uSpread;
    vec3 posOffset = mix(aPointA, aPointB, aData.x);

    pos += posOffset;
    
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);


    float s = mix(1.0, 3.0, aRandom.z);
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * s;

    vColor = aColor * mix(0.25, 0.75, aRandom.y);

    // index
    vSkip = mod(aData.z + aLineData.z, uTotal) > aLineData.x ? 1.0 : 0.0;
}