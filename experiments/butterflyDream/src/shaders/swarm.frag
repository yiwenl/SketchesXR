// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vRandom;
varying vec3 vPosition;

uniform sampler2D uColor0Map;
uniform sampler2D uColor1Map;
uniform float uColorOffset;
uniform float uMaxHeight;

void main(void) {
    float offset = clamp(-vRandom.y + uColorOffset * 2.0, 0.0, 1.0);

    vec4 color0 = texture2D(uColor0Map, vTextureCoord);
    vec4 color1 = texture2D(uColor1Map, vTextureCoord);
    vec4 color = mix(color0, color1, offset);
    if(color.a <= 0.01) {
        discard;
    }
    if(!gl_FrontFacing) {
        color.rgb *= 0.5;
    }


    float h = uMaxHeight * 0.5;
    float a = abs(vPosition.y - h)/h;
    a = smoothstep(0.9, 0.7, a);

    color.a *= a;

    gl_FragColor = color;

}