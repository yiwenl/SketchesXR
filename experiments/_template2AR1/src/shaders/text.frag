// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float uCrop;

void main(void) {
    vec4 color = texture2D(texture, vTextureCoord);
    if(uCrop > 0.5 && color.a <= 0.001) {
        discard;
    }
    
    gl_FragColor = color;
}