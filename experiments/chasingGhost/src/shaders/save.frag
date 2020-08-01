// copy.frag

precision highp float;
varying vec3 vColor;
varying vec3 vNormal;

uniform float uState;

void main(void) {
    gl_FragColor = vec4(mix(vColor, vNormal, uState), 1.0);
}