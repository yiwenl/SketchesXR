// basic.vert

precision highp float;
attribute vec3 aVertexPosition;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uSize;
uniform float uScale;

varying vec2 vTextureCoord;
varying float vOffset;

void main(void) {
    // float scale = pow(uScale, 1.5);
    vec3 pos = aVertexPosition * uScale;
    pos.z *= 0.1;

    float t = length(pos.xy) / uSize;
    vOffset = smoothstep(1.0, 0.8, t);

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = gl_Position.xy / gl_Position.w * .5 + .5;
}