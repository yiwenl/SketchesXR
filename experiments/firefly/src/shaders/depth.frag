#version 300 es

precision highp float;
in vec4 vScreenPos;

out vec4 oColor;

void main(void) {
    float z = vScreenPos.z / vScreenPos.w;
    z = 1.0 - pow(z, 3.0);
    oColor = vec4(vec3(z), 1.0);
}