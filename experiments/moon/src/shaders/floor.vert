// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uRadius;
uniform float uLevel;

varying vec2 vTextureCoord;
varying vec3 vNormal;

void main(void) {
    vec3 pos = aVertexPosition;
    pos.xz *= mix(1.0, uRadius, .5) * 2.0;
    // pos.y = uLevel;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
}