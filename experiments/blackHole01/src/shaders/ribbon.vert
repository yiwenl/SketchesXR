#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec2 aUVOffset;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform float uOffset;

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
uniform sampler2D uPosMap11;
uniform sampler2D uPosMap12;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform sampler2D uMap;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;
out vec4 vShadowCoord;
out float vSkip;
out float vLife;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#define PI 3.141592653

vec3 _normalize(vec3 v) {
  if(length(v) <= 0.0) {
    return vec3(0.0);
  } else {
    return normalize(v);
  }
}

vec2 _normalize(vec2 v) {
  if(length(v) <= 0.0) {
    return vec2(0.0);
  } else {
    return normalize(v);
  }
}

vec3 getPos(float index, vec2 uv) {
    vec3 pos;
    if(index < 0.5) {
        pos = texture(uPosMap0, uv).xyz;
    } else if(index < 1.5) {
        pos = texture(uPosMap1, uv).xyz;
    } else if(index < 2.5) {
        pos = texture(uPosMap2, uv).xyz;
    } else if(index < 3.5) {
        pos = texture(uPosMap3, uv).xyz;
    } else if(index < 4.5) {
        pos = texture(uPosMap4, uv).xyz;
    } else if(index < 5.5) {
        pos = texture(uPosMap5, uv).xyz;
    } else if(index < 6.5) {
        pos = texture(uPosMap6, uv).xyz;
    } else if(index < 7.5) {
        pos = texture(uPosMap7, uv).xyz;
    } else if(index < 8.5) {
        pos = texture(uPosMap8, uv).xyz;
    } else if(index < 9.5) {
        pos = texture(uPosMap9, uv).xyz;
    } else if(index < 10.5) {
        pos = texture(uPosMap10, uv).xyz;
    } else if(index < 11.5) {
        pos = texture(uPosMap11, uv).xyz;
    } else {
        pos = texture(uPosMap12, uv).xyz;
    }


    return pos;
}

#define xAxis vec3(1.0, 0.0, 0.0)

void main(void) {
    float skip = 0.0;
    float life = texture(uDataMap, aUVOffset).x;
    vLife = life;
    float t = abs(life - 0.5);
    if(t > 0.4) {
        skip = 1.0;
    }
    float offset = clamp(uOffset * 2.0 - aExtra.y, 0.0, 1.0);
    if(offset <= 0.01) {
        skip = 1.0;
    }

    vSkip = skip;

    float r = sin(aTextureCoord.x * PI);
    r = mix(r, 1.0, .75); 
    r *= mix(1.0, 2.0, aExtra.x) * 0.01 * offset;
    vec3 pos = vec3(0.0, r, 0.0);
    vec3 N = vec3(0.0, 1.0, 0.0);
    pos.yz = rotate(pos.yz, aTextureCoord.y * PI * 2.0);
    N.yz = rotate(N.yz, aTextureCoord.y * PI * 2.0);



    float iCurr = aVertexPosition.x;
    float iNext = aVertexPosition.x + 1.0;
    vec3 curr = getPos(iCurr, aUVOffset);
    vec3 next = getPos(iNext, aUVOffset);

    vec3 dir = _normalize(next - curr);
    vec3 axis = cross(dir, xAxis);
    float theta = acos(dot(dir, xAxis));
    pos = rotate(pos, axis, theta);
    N = rotate(N, axis, theta);
    pos += curr;


    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;
    vNormal = N;
    vShadowCoord = uShadowMatrix * wsPos;
    vec3 color = texture(uColorMap, aUVOffset).xyz;
    vec3 colorMap = texture(uMap, aUVOffset).xyz * 1.2;
    t = smoothstep(0.9, .6, life);

    vColor = mix(color, colorMap, t);
}