#extension GL_EXT_draw_buffers : require 
precision highp float;
varying vec3 vPosition;
varying vec3 vExtra;

void main(void) {
    gl_FragData[0] = vec4(vPosition, 1.0);
    gl_FragData[1] = vec4(vExtra, 1.0);
}