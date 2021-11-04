// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vRandom;
uniform sampler2D uMap;
uniform sampler2D uColorMap;
uniform vec2 uUVScale;
uniform float uColorOffset;

void main(void) {
    float offset = clamp(-vRandom.y + uColorOffset * 2.0, 0.0, 1.0);

    vec4 color = texture2D(uMap, vTextureCoord);
    vec3 mapColor = texture2D(uColorMap, vRandom.xy).rgb;
    color.rgb *= mapColor;
    if(color.a <= 0.01) {
        discard;
    }
    if(!gl_FrontFacing) {
        color.rgb *= 0.5;
    }
    gl_FragColor = color;

}