// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;
attribute vec3 aRandom;
attribute vec3 aPosOffset;
attribute vec2 aUV;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uTime;
uniform float uMaxHeight;

uniform vec2 uUVScale;
uniform float uOffset;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vRandom;
varying vec3 vPosition;

#pragma glslify: align              = require(glsl-utils/align.glsl)
#pragma glslify: rotate             = require(glsl-utils/rotate.glsl)
#pragma glslify: curlNoise          = require(glsl-utils/curlNoise.glsl)
#pragma glslify: ease               = require(glsl-easings/circular-in-out)
#pragma glslify: easeOut            = require(glsl-easings/circular-out)


void main(void) {
    float scaleOpen = ease(clamp(uOffset * 2.0 - aRandom.z, 0.0, 1.0));

    float t = abs(aTextureCoord.x - 0.5);
    float scale = mix(0.25, 1.0, aRandom.x);
    vec3 pos = aVertexPosition * scale * scaleOpen;

    float speed = mix(5.0, 7.0, aRandom.y);
    float a = sin(uTime * speed + aTextureCoord.y * 2.5 + aRandom.z);
    if(a > 0.0) {
        a = easeOut(a) * 1.25;
    }
    a *= mix(0.5, 1.0, aTextureCoord.y);
    if(aVertexPosition.x < 0.0) a *= -1.0;
    pos.xy = rotate(pos.xy, a);

    pos.xy = rotate(pos.xy, 0.85);

    vec3 posOffset = aPosOffset;
    speed = mix(1.0, 2.0, aRandom.z) * uTime;
    a = speed * 0.2 + aRandom.y;
    posOffset.xz = rotate(posOffset.xz, -a);
    posOffset.y = mod(posOffset.y + speed * 0.2, uMaxHeight);

    vec3 noise = curlNoise(posOffset * 0.1 + aRandom * 0.1 + vec3(uTime * 0.1));

    vec3 dir = normalize(posOffset * vec3(1.0, 0.0, 1.0));
    pos = align(pos, dir);

    vPosition = posOffset;
    pos += posOffset + noise * 0.25;
    
    
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord * uUVScale + aUV;
    vNormal = aNormal;
    vRandom = aRandom;

    gl_PointSize = 2.0;
}