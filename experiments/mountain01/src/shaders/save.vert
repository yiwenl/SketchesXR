#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aData;

uniform float uBound;

out vec3 vPosition;
out vec3 vNormal;
out vec3 vData;
out vec3 vColor;

void main(void) {
    gl_Position = vec4(aTextureCoord, 0.0, 1.0);
    vPosition = aVertexPosition;
    vNormal = aNormal;
    vData = aData;

    vec2 uv = aVertexPosition.xy / uBound * 0.5 + 0.5;
    vColor = vec3(uv, 0.0);

    gl_PointSize = 1.0;
}