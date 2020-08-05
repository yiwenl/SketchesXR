// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec4 vShadowCoord;
uniform sampler2D texture;

void main(void) {
    float d = distance(vTextureCoord, vec2(0.5));
    d = smoothstep(0.5, 0.20, d);

    vec2 uv = vShadowCoord.xy / vShadowCoord.w;
    float t = texture2D(texture, uv).r;
    t = step(0.01, t);

    gl_FragColor = vec4(vec3(0.0), d * 0.7 * t);
    // gl_FragColor = vec4(vec3(t), d * 0.7);
}