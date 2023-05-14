precision highp float;
varying vec2 vTextureCoord;
varying vec3 vColor;

void main(void) {
    gl_FragColor = vec4(vTextureCoord, 0.0, 1.0);
    gl_FragColor = vec4(vColor, 1.0);
}