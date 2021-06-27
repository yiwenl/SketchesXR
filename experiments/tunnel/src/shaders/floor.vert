#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform float uScale;

out vec2 vTextureCoord;
out vec4 vShadowCoord;

void main(void) {
    vec4 wsPos = uModelMatrix * vec4(aVertexPosition * uScale, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;
    vShadowCoord = uShadowMatrix * wsPos;
}