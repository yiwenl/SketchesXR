// copy.frag
precision highp float;

varying vec3 vNormal;
uniform vec3 uLightPos;

#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)

void main(void) {
    float g = diffuse(vNormal, uLightPos, .5);

    gl_FragColor = vec4(vec3(g), 1.0);
}