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
uniform float uShadow;
uniform float uLevel;

varying vec2 vTextureCoord;
varying vec2 vUV;
varying vec3 vNormal;

void main(void) {
    vec3 pos = aVertexPosition * uSize * mix(1.0, 1.05, uShadow);

    vec4 screenPos = uCameraMatrix * uModelInitMatrix * vec4(pos, 1.0);
    vUV = screenPos.xy / screenPos.w * .5 + .5;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);
    if(uShadow > .5) {
        wsPos.y *= 0.0;
        wsPos.y += uLevel;
    }

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;

    vTextureCoord = aTextureCoord;
    vNormal = normalize(uNormalMatrix * aNormal);
}