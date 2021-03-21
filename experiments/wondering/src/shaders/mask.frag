// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec3 vNormal;
varying vec3 vPosition;
#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 1.0, 1.0)

void main(void) {
    float g = diffuse(vNormal, LIGHT, .5);

    float a = smoothstep(0.0, 0.05, vPosition.y);
    gl_FragColor = vec4(vec3(g), 1.0) * a;
}