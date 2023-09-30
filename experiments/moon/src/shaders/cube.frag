#define LUT_FLIP_Y

precision highp float;
varying vec2 vTextureCoord;
varying vec2 vUV;
varying vec3 vNormal;

uniform sampler2D uMap;
uniform sampler2D uLookupMap;
uniform float uBackSide;

#pragma glslify: lookup    = require(./glsl-utils/lookup.glsl)

void main(void) {
    vec3 color = texture2D(uMap, vUV).rgb * (1.0 - uBackSide);
    gl_FragColor = lookup(vec4(color, 1.0), uLookupMap);
}