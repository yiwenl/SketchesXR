#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec2 aUVOffset;
in vec3 aNormal;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;

uniform sampler2D uPosMap0;
uniform sampler2D uPosMap1;
uniform sampler2D uPosMap2;
uniform sampler2D uPosMap3;
uniform sampler2D uPosMap4;
uniform sampler2D uPosMap5;
uniform sampler2D uPosMap6;
uniform sampler2D uPosMap7;
uniform sampler2D uPosMap8;
uniform sampler2D uPosMap9;
uniform sampler2D uPosMap10;
uniform sampler2D uColorMap;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;
out vec4 vShadowCoord;
out float vSkip;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#define MAIN_AXIS vec3(0.0, 1.0, 0.0)

vec3 getPos(float i, vec2 uv) {
    if(i < 0.5) {
        return texture(uPosMap0, uv).xyz;
    } else if(i < 1.5) {
        return texture(uPosMap1, uv).xyz;
    } else if(i < 2.5) {
        return texture(uPosMap2, uv).xyz;
    } else if(i < 3.5) {
        return texture(uPosMap3, uv).xyz;
    } else if(i < 4.5) {
        return texture(uPosMap4, uv).xyz;
    } else if(i < 5.5) {
        return texture(uPosMap5, uv).xyz;
    } else if(i < 6.5) {
        return texture(uPosMap6, uv).xyz;
    } else if(i < 7.5) {
        return texture(uPosMap7, uv).xyz;
    } else if(i < 8.5) {
        return texture(uPosMap8, uv).xyz;
    } else if(i < 9.5) {
        return texture(uPosMap9, uv).xyz;
    } else {
        return texture(uPosMap10, uv).xyz;
    }
}

void main(void) {
    vec3 pos = vec3(aVertexPosition.x, 0.0, aVertexPosition.z);
    pos *= 0.02 * mix(0.5, 2.0, aExtra.x);

    vec3 curr = getPos(aVertexPosition.y, aUVOffset);
    vec3 next = getPos(aVertexPosition.y + 1.0, aUVOffset);

    vSkip = curr.y < next.y ? 0.0 : 1.0;


    vec3 dir = next - curr;
    if(length(dir) == 0.0) {
        dir = MAIN_AXIS;
    } else {
        dir = normalize(dir);   
    }

    vec3 axis = cross(MAIN_AXIS, dir);
    float angle = acos(dot(MAIN_AXIS, dir));
    pos = rotate(pos, axis, angle);
    vec3 N = rotate(aNormal, axis, angle);


    pos += curr;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    // varyings
    vTextureCoord = aTextureCoord;
    vNormal = N;
    vShadowCoord = uShadowMatrix * uModelMatrix * vec4(pos, 1.0);
    vColor = texture(uColorMap, aUVOffset).xyz;
}