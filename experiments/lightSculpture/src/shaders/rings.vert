// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec3 aData;
attribute vec3 aRandom;
attribute vec3 aPosOffset;
attribute vec2 aScale;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewport;
uniform vec3 uTranslate;

uniform vec3 uStart;
uniform vec3 uControl0;
uniform vec3 uControl1;
uniform vec3 uEnd;

uniform float uRadiusScale;
uniform float uPointScale;

varying vec3 vColor;

#pragma glslify: bezier    = require(./glsl-utils/bezier.glsl)
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: particleSize    = require(./glsl-utils/particleSize.glsl)

#define radius 0.0001

void main(void) {
    vec3 pos = aVertexPosition * 0.05;
    float r = 0.1 * aScale.x * uRadiusScale;

    vec3 posOffset = vec3(r, 0.0, 0.0);
    posOffset.xy = rotate(posOffset.xy, aData.x + aScale.y);

    vec3 posCurr = bezier(uStart, uControl0, uControl1, uEnd, aPosOffset.y);
    vec3 posNext = bezier(uStart, uControl0, uControl1, uEnd, aPosOffset.y + 0.5/20.0);
    vec3 dir = normalize(posNext - posCurr);
    vec3 zAxis = vec3(0.0, 0.0, 1.0);
    vec3 axis = cross(dir, zAxis);
    float theta = acos(dot(dir, zAxis));
    posOffset = rotate(posOffset, axis, theta);
    
    posOffset += posCurr;

    // posOffset.z = aPosOffset.x;

    pos += posOffset;

    pos += uTranslate;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    float s = mix(1.0, 3.0, aRandom.z) * uPointScale;
    gl_PointSize = particleSize(gl_Position, uProjectionMatrix, uViewport, radius) * s;

    vColor = vec3(0.5, .5, .48);
}