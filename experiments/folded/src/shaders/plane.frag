// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vColor;

uniform sampler2D uEnvMap;

void main(void) {
    gl_FragColor = texture2D(uEnvMap, vTextureCoord);
}