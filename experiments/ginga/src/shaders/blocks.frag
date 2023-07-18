// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vColor;
varying vec3 vNormal;
uniform float uXOR;

#pragma glslify: diffuse    = require(./glsl-utils/diffuse.glsl)
#define LIGHT vec3(0.2, 1.0, -0.2)

void main(void) {

    float d = diffuse(vNormal, LIGHT, .5);
    vec3 color = vColor;
    color.b = d;

    color = mix(color, vec3(1.0), uXOR);
    gl_FragColor = vec4(color, 1.0);
}