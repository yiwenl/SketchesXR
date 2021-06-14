// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vUV;
uniform sampler2D texture;

void main(void) {
    vec2 uv = vUV;
    vec4 color = texture2D(texture, uv);
    // color = mix(color, vec4(1.0, 1.0, 0.0, 1.0), 0.5);
    // color.rgb /= color.a;
    gl_FragColor = color;
    // gl_FragColor = vec4(1.0);
}