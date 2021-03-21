// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uOffset;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vPosition;

#pragma glslify: rotate    = require(glsl-utils/rotate.glsl)

void main(void) {
    vec3 pos = aVertexPosition;
    pos.yz = rotate(pos.yz, 0.4);
    float offset = (1.0 - uOffset) * 0.1;
    pos.y += 0.02;
    pos.y -= offset;

    vec4 wsPos = uModelMatrix * vec4(aVertexPosition, 1.0);
    vPosition = pos;

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
}