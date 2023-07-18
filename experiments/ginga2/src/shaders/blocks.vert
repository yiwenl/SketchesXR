// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

attribute vec3 aPosOffset;
attribute vec3 aExtra;
attribute vec3 aColor;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uTime;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vNormalOrg;
varying vec3 vColor;
varying vec2 vScale;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

void main(void) {
    vec3 pos = aVertexPosition;

    float scale = aExtra.x;
    float scaleZ = aPosOffset.z;
    pos *= scale;
    pos.z *= scaleZ;

    float r = mix(1.5, 3.0, aPosOffset.x);
    pos.x += r;


    pos.yz += (aExtra.yz - 0.5);
    float theta = uTime * mix(0.5, 4.0, aColor.y) * 0.05 + aColor.z;
    pos.xz = rotate(pos.xz, aPosOffset.y + theta);



    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;

    // normal
    vNormalOrg = aNormal;
    
    vec3 N = aNormal;
    N.xz = rotate(N.xz, aPosOffset.y + theta);

    vNormal = N;


    vColor = aColor;
    vScale = vec2(scale, scaleZ);
}