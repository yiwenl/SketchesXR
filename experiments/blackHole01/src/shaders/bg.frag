#define LUT_FLIP_Y

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uMap;
uniform sampler2D uLookupMap;
uniform float uOffset;
uniform float uTime;
uniform float uRatio;
uniform vec2 uCenter;

#pragma glslify: lookup    = require(./glsl-utils/lookup.glsl)
#define PI 3.14159265359
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

void main(void) {
    vec4 color = texture2D(uMap, vTextureCoord);
    float t = mix(0.5, 1.0, uOffset);
    gl_FragColor = lookup(color, uLookupMap, t);
}