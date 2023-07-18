// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uMap;
uniform sampler2D uOutline;

void main(void) {
    vec4 color = texture2D(uMap, vTextureCoord);
    float outline = texture2D(uOutline, vTextureCoord).r;
    color = mix(color, vec4(0.0,0.0,0.0,1.0), outline);

    gl_FragColor = color;
}