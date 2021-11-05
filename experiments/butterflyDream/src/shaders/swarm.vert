#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aRandom;
in vec2 aPosOffset;
in vec2 aUV;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;

uniform vec2 uUVScale;
uniform float uOffset;
uniform float uTime;
uniform float uOffsetCircle;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vRandom;
out vec3 vPosition;
out vec4 vShadowCoord;

#pragma glslify: align              = require(glsl-utils/align.glsl)
#pragma glslify: snoise             = require(glsl-utils/snoise.glsl)
#pragma glslify: rotate             = require(glsl-utils/rotate.glsl)
#pragma glslify: ease               = require(glsl-easings/circular-in-out)
#pragma glslify: easeOut            = require(glsl-easings/circular-out)
#pragma glslify: safeNormalize      = require(./normalize.glsl)

#define PI 3.141592653
#define CENTER vec3(0.0, 1.5, 0.4)

void main(void) {
    float scaleOpen = ease(clamp(uOffset * 2.0 - aRandom.z, 0.0, 1.0));

    float t = abs(aTextureCoord.x - 0.5);
    float scale = mix(0.25, 1.0, aRandom.x);
    vec3 pos = aVertexPosition * scale * uOffset;

    float speed = mix(5.0, 7.0, aRandom.y);
    float a = sin(uTime * speed + aTextureCoord.y * 2.5 + aRandom.z);
    if(a > 0.0) {
        a = easeOut(a) * 1.25;
    }
    a *= mix(0.5, 1.0, aTextureCoord.y);
    if(aVertexPosition.x < 0.0) a *= -1.0;
    pos.xy = rotate(pos.xy, a);


    vec3 posOffset = texture(uPosMap, aPosOffset).xyz;
    vec3 extra = texture(uExtraMap, aPosOffset).xyz;

    float offsetCircle = step(0.01, uOffsetCircle);
    float yzMultiplier = 1.0;

    if(offsetCircle < 0.5) {
        vec3 dir = normalize(texture(uVelMap, aPosOffset).xyz);
        a = atan(dir.z, dir.x) + PI * 0.5;
        pos.xz = rotate(pos.xz, a);
    } else {
        vec3 dir = safeNormalize(posOffset - CENTER);
        a = 0.0;
        if(length(dir) > 0.0) {
            a = atan(dir.y, dir.x) + PI * 0.5;
        }
        pos.xz = rotate(pos.xz, PI * 0.5);
        pos.yz = rotate(pos.yz, PI * 0.5);
        pos.xy = rotate(pos.xy, a);

        float t = snoise(posOffset * mix(0.1, 0.4, extra.x) + uTime * 0.05 + aRandom.y);
        yzMultiplier = 1.0 + t * mix(0.2, 0.1, extra.z); 
    }

    posOffset.yz *= yzMultiplier;
    vPosition = posOffset;
    pos += posOffset;

    
    vec4 wsPosition = uModelMatrix * vec4(pos, 1.0);
    
    gl_Position = uProjectionMatrix * uViewMatrix * wsPosition;
    vShadowCoord = uShadowMatrix * wsPosition;
    vTextureCoord = aTextureCoord * uUVScale + aUV;

    vNormal = aNormal;
    vRandom = aRandom;
}