// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uMap;
uniform vec2 uResolution;
uniform vec2 uDirection;

#pragma glslify: blur9    = require(./glsl-utils/blur9.glsl)

void main(void) {
    gl_FragColor = blur9(uMap, vTextureCoord, uResolution, uDirection);
}