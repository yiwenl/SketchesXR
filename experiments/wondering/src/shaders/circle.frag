// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform float uOffset;

void main(void) {
    float d = distance(vTextureCoord, vec2(.5));

    float w = 0.15;
    float s = 0.5 - w;
    float a = smoothstep(s, s + 0.01, d);
    a *= smoothstep(0.5, 0.49, d);
    // gl_FragColor = vec4(vec3(1.0), a * 0.5 * uOffset);
    gl_FragColor = vec4(a * 0.5 * uOffset);
}