precision highp float;
varying vec2 vTextureCoord;
uniform float uOffset;

void main(void) {
    float d = distance(vTextureCoord, vec2(.5))/.5;
    
    float t = distance(d, uOffset * 0.9);
    t = smoothstep(0.06, 0.05, t);

    gl_FragColor = vec4(1.0, 1.0, 1.0, t);
}