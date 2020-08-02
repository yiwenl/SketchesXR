// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

varying vec3 vColor;
varying vec3 vNormal;

#pragma glslify: rotate    = require(glsl-utils/rotate.glsl)

void main(void) {
    gl_Position = vec4(aTextureCoord, 0.0, 1.0);
    vec3 pos = (aVertexPosition - vec3(0.0, 5.0, 0.0)) * 0.4;
    pos.xz = rotate(pos.xz, 3.141592653);
    
    vColor = pos * 0.3;
    vNormal = aNormal;

    gl_PointSize = 1.0;
}