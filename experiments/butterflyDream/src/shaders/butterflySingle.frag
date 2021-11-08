// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform sampler2D uColorMap;
uniform vec3 uRandom;

#define COLOR vec3(107.0, 1.0, 11.0)/255.0

void main(void) {
    vec4 oColor = texture2D(texture, vTextureCoord);

    if(oColor.a < 0.5) {
        discard;
    }

    if(!gl_FrontFacing) {
        oColor.rgb *= 0.85;
    }

    // vec3 mapColor = texture2D(uColorMap, uRandom.xy).rgb;
    oColor.rgb *= COLOR * 1.5;

    gl_FragColor = oColor;

}