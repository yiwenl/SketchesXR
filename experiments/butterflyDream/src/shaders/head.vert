#version 300 es

#define USE_TEX_LOD 1
#define USE_IBL 1
#define HAS_BASECOLORMAP 1
#define HAS_NORMALMAP 1
#define HAS_OCCLUSIONMAP 1

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vPosition;

void main(void) {
    vec4 wsPos = uModelMatrix * vec4(aVertexPosition, 1.0);
    vPosition = wsPos.xyz / wsPos.w;

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
}