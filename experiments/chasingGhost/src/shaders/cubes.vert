// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;
attribute vec3 aPosOffset;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uRange;
uniform float uDataHeight;
uniform float uCubeSize;
uniform float uColumnLength;

uniform float uTime;
uniform float uBlockWidth;
uniform float uDirection;
uniform float uClipPlane;
uniform float uLevel;
uniform float uWaveNoise;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vDebug;
varying float vHeight;
varying float vDiscard;


#pragma glslify: snoise = require(glsl-utils/snoise.glsl)

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}


void main(void) {
    vec3 pos = aVertexPosition;
    pos.y += uCubeSize * 0.5;
    float t = pos.y / uCubeSize;
    float height = map(aPosOffset.y, uRange.x, uRange.y, 0.0, 1.0);

    vec3 wsPos = aPosOffset * vec3(1.0, 0.0, 1.0);
    wsPos = (uModelMatrix * vec4(wsPos, 1.0)).xyz;
    wsPos *= vec3(2., 0.0, 0.5);

    float noise = snoise(wsPos + vec3(uTime * 2.0 * uDirection, 0.0, 0.0));
    noise *= uWaveNoise;

    pos.y = pos.y * height * uDataHeight * uLevel;
    vHeight = pos.y / uDataHeight /uCubeSize;
    pos.y *= 1.0 + noise * 0.01;

    pos.xz += aPosOffset.xz;
    pos.x = pos.x / uColumnLength * uBlockWidth;

    vec4 _wsPos = uModelMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * _wsPos; 
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;

    vDebug = vec3(noise * .5 + .5, height * mix(uLevel, 1.0, .5), t);

    // vDiscard = step(0.0, _wsPos.z);
    vDiscard = step(uClipPlane, wsPos.z);
}