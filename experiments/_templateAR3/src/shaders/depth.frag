#version 300 es

precision highp float;
in vec2 vTextureCoord;
uniform sampler2D uMap;

out vec4 oColor;

void main(void) {
    float d = texture(uMap, vTextureCoord).r;
    d = smoothstep(0.0, 0.1, d);
    oColor = vec4(vec3(d), 1.0);
    oColor = vec4(vTextureCoord, 0.0 , 1.0);
}