#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform mat3 uNormalMatrix;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vNormalOrg;
out vec3 vPosition;
out vec4 vShadowCoord;

void main(void) {
    vec4 vWsPos = uModelMatrix * vec4(aVertexPosition, 1.0);
    vPosition = vWsPos.xyz / vWsPos.w;
    gl_Position = uProjectionMatrix * uViewMatrix * vWsPos;

    vTextureCoord = aTextureCoord;
    vNormal = normalize(uNormalMatrix * aNormal);
    vNormalOrg = normalize(aNormal);
    vShadowCoord = uShadowMatrix * vWsPos;
}