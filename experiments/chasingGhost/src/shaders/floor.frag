// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;

void main(void) {
    float d = distance(vTextureCoord, vec2(0.5));
    d = smoothstep(0.35, 0.0, d);
    // gl_FragColor = vec4(vec3(d), 1.0);
    gl_FragColor = vec4(vec3(0.0), d * 0.7);
    // gl_FragColor = mix(vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), d);
}