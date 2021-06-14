#version 300 es

precision highp float;

in vec3 vPos;
in vec3 vData;
in vec3 vExtra;

layout (location = 0) out vec4 oColor0;
layout (location = 1) out vec4 oColor1;
layout (location = 2) out vec4 oColor2;
layout (location = 3) out vec4 oColor3;
layout (location = 4) out vec4 oColor4;

void main(void) {
    oColor0 = vec4(vPos, 1.0);
    oColor1 = vec4(0.0, 0.0, 0.0, 1.0);
    oColor2 = vec4(vData, 1.0);
    oColor3 = vec4(vExtra, 1.0);
    oColor4 = vec4(0.0, 0.0, 0.0, 1.0);
}