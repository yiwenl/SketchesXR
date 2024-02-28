// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uColorMap;
uniform sampler2D uDepthMap;

void main(void) {
    vec3 color = texture2D(uColorMap, vTextureCoord).rgb;
    vec3 depth = texture2D(uDepthMap, vTextureCoord).rgb;
    color = mix(depth, color, step(0.5, vTextureCoord.x));
    gl_FragColor = vec4(color, 1.0);
}