// copy.frag

precision highp float;
varying vec4 vColor;

void main(void) {
    gl_FragColor = vColor;
    // gl_FragColor.rgb += 0.2;
    // gl_FragColor = vec4(1.0);
}