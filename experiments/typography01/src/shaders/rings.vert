#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
// in vec2 aUVOffset;
in vec3 aPosOffset;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform mat4 uLocalMatrix;
uniform float uNumSeg;
uniform float uTime;
// uniform sampler2D textureColor;

out vec3 vOffset;
out vec2 vTextureCoord;
out vec3 vExtra;
out vec3 vColor;
out vec4 vShadowCoord;

#pragma glslify: rotate    = require(glsl-utils/rotate.glsl)

#define PI 3.141592653
#define RING_WIDTH 0.5
#define RIGHT_X_OFFSET 4.0

vec3 getPos(vec3 v, vec3 b) {
    float a = -v.x / uNumSeg * PI * 2.0;
    float r = b.x;
    float y = v.y * b.y;
    vec3 pos = vec3(r, y, 0.0);
    pos.xz = rotate(pos.xz, a);

    return pos;
}


void main(void) {
    vec3 pos = getPos(aVertexPosition, aPosOffset);

    pos.x += RIGHT_X_OFFSET;
    pos.xy = rotate(pos.xy, aPosOffset.z + aExtra.z * uTime * 2.0);

    vec4 wsPos = uModelMatrix * uLocalMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;

    vOffset = aPosOffset;
    vTextureCoord = aTextureCoord;
    vExtra = aExtra;

    vShadowCoord = uShadowMatrix * wsPos;

    // vColor = texture(textureColor, aUVOffset).rgb;
    vColor = vec3(1.0);
}