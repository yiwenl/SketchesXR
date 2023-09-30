#define LUT_FLIP_Y

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uMap;
uniform sampler2D uLookupMap;

#pragma glslify: lookup    = require(./glsl-utils/lookup.glsl)

void main(void) {
    vec4 color = texture2D(uMap, vTextureCoord);
    vec2 uv = vTextureCoord;
    uv.y = 1.0 - uv.y;

    gl_FragColor = lookup(color, uLookupMap);
}