precision highp float;
varying vec2 vTextureCoord;
uniform float uGlow;

void main(void) {
    float d = distance(vTextureCoord, vec2(.5));
    d = smoothstep(0.5, 0.0, d);
    d = pow(d, 2.0) * uGlow * 0.7;

    gl_FragColor = vec4(vec3(1.0, .97, .92) * d, 1.0);
}