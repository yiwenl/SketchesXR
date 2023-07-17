// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

void main(void) {
    vec3 color = texture2D(texture, vTextureCoord).rgb;
    float g = length(color);
    g = smoothstep(0.0, length(vec3(1.0)), g);
    gl_FragColor = vec4(vec3(g), 1.0);
}