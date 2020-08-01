// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

varying vec3 vColor;
varying vec3 vNormal;

void main(void) {
    gl_Position = vec4(aTextureCoord, 0.0, 1.0);
    vec3 pos = (aVertexPosition - vec3(0.0, 5.0, 0.0)) * 0.4;
    
    vColor = pos;
    vNormal = aNormal;

    gl_PointSize = 1.0;
}