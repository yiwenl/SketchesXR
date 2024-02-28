precision highp float;
varying vec2 vTextureCoord;
varying vec3 vColor;
varying vec3 vNormal;

#pragma glslify: diffuse    = require(./glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 0.8, 0.6)

void main(void) {
    float g = diffuse(vNormal, LIGHT, .25);
    gl_FragColor = vec4(vColor * g * 1.1, 1.0);
}