// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec3 aPosOffset;
attribute vec2 aTextureCoord;
attribute vec2 aUVOffset;
attribute vec3 aNormal;
attribute vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uTime;
uniform float uOffset;

varying vec2 vTextureCoord;
varying vec3 vNormal;


#pragma glslify: rotate    = require(glsl-utils/rotate.glsl)

#define radius 0.2
#define PI 3.141592653
#define NUM 32.0

void main(void) {
    float size = 0.05 * uOffset;

    float theta = -aTextureCoord.x * PI * 2.0;
    vec3 pos = vec3(0.0, aVertexPosition.y * size, size);
    pos.yz = rotate(pos.yz, aVertexPosition.z * PI * 2.0 + aTextureCoord.x * PI * 3.0 - uTime);
    pos.y += radius;
    pos.xy = rotate(pos.xy, theta);


    // instancing
    // float scale = mix(0.5, 1.5, aExtra.x);
    pos *= aExtra.x;
    pos.yz = rotate(pos.yz, aExtra.z * PI * 2.0);
    pos.xz = rotate(pos.xz, aExtra.y * PI * 2.0);
    pos += aPosOffset;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    float u = aTextureCoord.x;
    float v = aTextureCoord.y / NUM - 0.0015;

    vTextureCoord = vec2(u, v) + aUVOffset;
    vNormal = aNormal;
}