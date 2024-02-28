#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aData;

uniform vec2 uBound;
uniform sampler2D uColorMap;

out vec3 vPosition;
out vec3 vNormal;
out vec3 vData;
out vec3 vColor;

void main(void) {
    gl_Position = vec4(aTextureCoord, 0.0, 1.0);
    vPosition = aVertexPosition;
    vNormal = aNormal;
    vData = aData;

    vec2 uv = aVertexPosition.xz / uBound * 0.5 + 0.5;
    vColor = texture(uColorMap, uv).rgb;

    gl_PointSize = 1.0;
}