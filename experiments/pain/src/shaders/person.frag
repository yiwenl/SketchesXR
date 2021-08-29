// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec3 vNormal;
#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 1.0, 1.0)
#define COLOR vec3(47.0, 0.0, 10.0) / 255.0

void main(void) {
    float g = diffuse(vNormal, LIGHT, .5);
    gl_FragColor = vec4(COLOR * g, 1.0);
}