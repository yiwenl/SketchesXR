// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uPatternMap0;
uniform sampler2D uPatternMap1;
uniform sampler2D uPatternMap2;
uniform sampler2D uPatternMap3;
uniform sampler2D uPatternMap4;
uniform sampler2D uPatternMap5;
uniform sampler2D uPatternMap6;
uniform sampler2D uPatternMap7;
uniform sampler2D uPatternMap8;
uniform sampler2D uPatternMap9;
uniform sampler2D uMap;
uniform sampler2D uOutlineMap;

void main(void) {
    vec4 map = texture2D(uMap, vTextureCoord);
    float value = fract((map.r + map.g + map.b) * 0.1);
    float outline = texture2D(uOutlineMap, vTextureCoord).r;

    vec3 color;
    if(value < 0.1) {
        color = texture2D(uPatternMap0, vTextureCoord).rgb;
    } else if(value < 0.2) {
        color = texture2D(uPatternMap1, vTextureCoord).rgb;
    } else if(value < 0.3) {
        color = texture2D(uPatternMap2, vTextureCoord).rgb;
    } else if(value < 0.4) {
        color = texture2D(uPatternMap3, vTextureCoord).rgb;
    } else if(value < 0.5) {
        color = texture2D(uPatternMap4, vTextureCoord).rgb;
    } else if(value < 0.6) {
        color = texture2D(uPatternMap5, vTextureCoord).rgb;
    } else if(value < 0.7) {
        color = texture2D(uPatternMap6, vTextureCoord).rgb;
    } else if(value < 0.8) {
        color = texture2D(uPatternMap7, vTextureCoord).rgb;
    } else if(value < 0.9) {
        color = texture2D(uPatternMap8, vTextureCoord).rgb;
    } else  {
        color = texture2D(uPatternMap9, vTextureCoord).rgb;
    }

    // gl_FragColor = map;
    float g = 0.1;
    color = mix(color, vec3(g, g, g * 0.92), outline);
    gl_FragColor = vec4(color, map.a);
}