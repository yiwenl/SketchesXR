#version 300 es

precision highp float;
in vec3 vPosition;
in vec3 vNormal;
in vec3 vData;
in vec3 vColor;

uniform vec2 uBound;
uniform sampler2D uMap;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;
layout (location = 4) out vec4 oFragColor4;

void main(void) {
    oFragColor0 = vec4(vPosition, 1.0);
    oFragColor1 = vec4(vec3(0.0), 1.0);
    oFragColor2 = vec4(vNormal, 1.0);
    oFragColor3 = vec4(vData, 1.0);

    // color map
    vec2 uv = vPosition.xz / uBound * .5 + .5;
    uv.y = 1.0 - uv.y;
    oFragColor4 = texture(uMap, uv);
}