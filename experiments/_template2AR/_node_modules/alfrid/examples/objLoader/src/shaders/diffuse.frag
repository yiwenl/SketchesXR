precision highp float;

varying vec3 vNormal;
#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)

#define light vec3(0.2, 1.0, 0.5)

void main(void) {
    float g = diffuse(vNormal, light, .5);
    gl_FragColor = vec4(vec3(g), 1.0);
}