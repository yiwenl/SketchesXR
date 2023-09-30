// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uNormalMatrix;

uniform mat4 uCameraMatrix;
uniform mat4 uModelInitMatrix;

uniform float uSize;

varying vec2 vTextureCoord;
varying vec2 vUV;
varying vec3 vNormal;

void main(void) {
    vec3 pos = aVertexPosition * uSize;

    vec4 screenPos = uCameraMatrix * uModelInitMatrix * vec4(pos, 1.0);
    vUV = screenPos.xy / screenPos.w * .5 + .5;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    vTextureCoord = aTextureCoord;
    vNormal = normalize(uNormalMatrix * aNormal);
}