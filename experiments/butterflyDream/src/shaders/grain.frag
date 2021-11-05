// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform float uRatio;
uniform float uRandom;
uniform float uStrength;
uniform sampler2D texture;

void main(void) {
    vec2 uv = vTextureCoord;
    uv.y /= uRatio;
    float noise = texture2D(texture, uv * 5.0 + uRandom).r;

    // gl_FragColor = vec4(vec3(noise), 1.0);
    gl_FragColor = vec4(vec3(1.0), noise * uStrength);
}