// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

void main(void) {
    if(distance(gl_PointCoord, vec2(.5)) > 0.5) {
        discard;
    }
    gl_FragColor = vec4(1.0);
}