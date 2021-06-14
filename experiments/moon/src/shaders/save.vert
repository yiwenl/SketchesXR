#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aExtra;
in vec3 aData;

out vec3 vPos;
out vec3 vData;
out vec3 vExtra;

void main(void) {
    gl_Position = vec4(aTextureCoord, 0.0, 1.0);
    vPos = aVertexPosition;
    vData = aData;
    vExtra = aExtra;
}