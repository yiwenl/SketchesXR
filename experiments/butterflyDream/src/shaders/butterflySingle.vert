// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uOffset;
uniform float uTime;
uniform vec2 uUVScale;
uniform vec2 uUVOffset;

varying vec2 vTextureCoord;
varying vec3 vNormal;

#pragma glslify: rotate             = require(glsl-utils/rotate.glsl)
#pragma glslify: ease               = require(glsl-easings/circular-in-out)
#pragma glslify: easeOut            = require(glsl-easings/circular-out)
#pragma glslify: safeNormalize      = require(./normalize.glsl)

void main(void) {
    float t = abs(aTextureCoord.x - 0.5);
    vec3 pos = aVertexPosition * uOffset;

    float speed = 6.0;
    float a = sin(uTime * speed + aTextureCoord.y * 2.5);
    if(a > 0.0) {
        a = easeOut(a) * 1.25;
    }
    a *= mix(0.5, 1.0, aTextureCoord.y);
    if(aVertexPosition.x < 0.0) a *= -1.0;
    pos.xy = rotate(pos.xy, a);

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord * uUVScale + uUVOffset;
    vNormal = aNormal;
}