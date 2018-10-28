// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float uOpacity;

void main(void) {
    gl_FragColor = vec4(vec3(1.0), uOpacity);
}