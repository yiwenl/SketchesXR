#version 300 es

precision highp float;
in vec2 vTextureCoord;
out vec4 oColor;

void main(void) {
    if (distance(gl_PointCoord, vec2(.5)) > .5) {
        discard;
    }
    oColor = vec4(1.0);
}