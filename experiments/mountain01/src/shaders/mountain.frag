// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec4 vScreenPos;

uniform sampler2D uInkMap;
uniform sampler2D uBaseMap;
uniform vec3 uBaseColor;
uniform vec3 uColorPeak;

void main(void) {
    vec3 color = texture2D(uInkMap, vTextureCoord).rgb;
    float a = texture2D(uBaseMap, vTextureCoord).r;
    if( a <= 0.1) {
        discard;
    }
    color = 1.0 - color;

    gl_FragColor = vec4(color, 1.0);
}