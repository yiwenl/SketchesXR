// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec2 aUVOffset;
attribute vec2 aUVOffset2;
attribute vec3 aNormal;
attribute vec3 aRandom;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uTime;
uniform float uScale;
uniform float uOffset;
uniform vec2 uUVScale;
uniform sampler2D uPosMap;
uniform sampler2D uVelMap;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vRandom;

#pragma glslify: align          = require(glsl-utils/align.glsl)
#pragma glslify: rotate         = require(glsl-utils/rotate.glsl)
#pragma glslify: safeNormalize  = require(./normalize.glsl)
#pragma glslify: map            = require(./map.glsl)
#pragma glslify: ease           = require(glsl-easings/circular-in-out)
#pragma glslify: easeOut           = require(glsl-easings/circular-out)

#define PI 3.141592657

void main(void) {
    float scaleOpen = ease(clamp(uOffset * 2.0 - aRandom.x, 0.0, 1.0));

    float t = abs(aTextureCoord.x - 0.5);
    float scale = mix(0.5, 1.0, aRandom.x) * 0.75 * scaleOpen;
    vec3 pos = aVertexPosition * scale * uScale;


    float speed = mix(5.0, 7.0, aRandom.y);
    float a = sin(uTime * speed + aTextureCoord.y * 2.5 + aRandom.z);
    if(a > 0.0) {
        a = easeOut(a) * 1.25;
    }
    a *= mix(0.5, 1.0, aTextureCoord.y);
    if(aVertexPosition.x < 0.0) a *= -1.0;
    pos.xy = rotate(pos.xy, a);

    vec3 dir = texture2D(uVelMap, aUVOffset).xyz;
    a = dir.y * 5.0;
    pos.xy = rotate(pos.xy, a);    
    dir *= vec3(1.0, 0.0, 1.0);
    dir = safeNormalize(dir);
    if(length(dir) < 0.0) {
        dir = vec3(1.0, 0.0, 0.0);
    }


    pos = align(pos, dir);
    pos.xz = rotate(pos.xz, PI * 0.5);

    vec3 posOffset = texture2D(uPosMap, aUVOffset).xyz;
    pos += posOffset;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);


    vec2 uv = aTextureCoord * uUVScale + aUVOffset2;

    vTextureCoord = uv;
    vNormal = aNormal;
    vRandom = aRandom;
}