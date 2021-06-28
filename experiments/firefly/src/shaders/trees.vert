#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aPosOffset;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vPosition;

#define generalScale 0.41
#define PI 3.141592653

#pragma glslify: rotate = require(glsl-utils/rotate.glsl)

void main(void) {
    float scale = mix(0.8, 1.1, aExtra.x);
    vec3 pos = aVertexPosition * generalScale * scale;
    pos.y -= 0.1;

    float a = 0.1;
    float t = mix(-a, a, aExtra.y);
    pos.xy = rotate(pos.xy, t);
    pos.xz = rotate(pos.xz, PI * aExtra.z * 2.0);

    t = smoothstep(2.0 + aExtra.z * 0.5, 0.0, aVertexPosition.y);
    pos.xz *= 1.0 + t * mix(0.25, 0.5, aExtra.y);

    pos += aPosOffset;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    vPosition = wsPos.xyz / wsPos.w;

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;

    vec3 N = aNormal;
    N.xy = rotate(N.xy, t);
    N.xz = rotate(N.xz, PI * aExtra.z * 2.0);

    vNormal = N;
}