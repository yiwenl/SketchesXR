// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

void main(void) {
    gl_FragColor = vec4(vTextureCoord, 0.0, 1.0);
    gl_FragColor = vec4(vec3(0.1), 1.0);
}