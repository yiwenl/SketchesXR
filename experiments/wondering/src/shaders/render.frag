// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec3 vNormal;
varying vec3 vColor;

#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 1.0, 1.0)

void main(void) {
    float g = diffuse(vNormal, LIGHT, .5) * 1.5;
    gl_FragColor = vec4(vColor * vec3(g), 1.0);
}