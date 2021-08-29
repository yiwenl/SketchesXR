// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec2 aUVOffset;
attribute vec2 aScale;
attribute vec3 aPosOffset;
attribute vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uTime;
uniform float uTextScale;
uniform float uMaxHeight;
uniform float uBrightness;

uniform sampler2D uColorMap;

varying vec2 vTextureCoord;
varying vec3 vColor;
varying vec3 vExtra;
varying float vOpacity;

#pragma glslify: rotate    = require(glsl-utils/rotate.glsl)
#define PI 3.141592653


vec3 align(vec3 pos, vec3 dir) {
    vec3 initDir = vec3(0.0, 0.0, -1.0);
    vec3 axis = cross(dir, initDir);
    float angle = acos(dot(dir, initDir));
    return rotate(pos, axis, angle);
}

void main(void) {
    float scale = mix(1.0, 5.0, pow(aExtra.z, 3.0)) * uTextScale;
    vec3 pos = aVertexPosition * scale;
    pos.xy *= aScale;

    vec3 posOffset = aPosOffset;
    float maxHeight = mix(1.0, 2.0, aExtra.y) * uMaxHeight;
    float speed = mix(1.0, 2.0, aExtra.x) * 0.85;
    float y = mod(speed * uTime, maxHeight);
    posOffset.y += y;
    posOffset.y = mod(posOffset.y, maxHeight);

    float a = sin(speed * uTime * mix(5.0, 10.0, aExtra.y) + aExtra.z * PI * 2.0) * 0.5;
    pos.xy = rotate(pos.xy, a);

    vec2 dir = normalize(posOffset.xz);
    a = atan(dir.x, dir.y);
    pos.xz = rotate(pos.xz, -a + PI);


    float t = abs(posOffset.y - maxHeight * 0.5) / (maxHeight * 0.5); // 0 ~ 1
    vOpacity = smoothstep(1.0, 0.0, t);

    pos += posOffset;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord / 5.0 + aUVOffset;

    vec3 color = texture2D(uColorMap, aExtra.yz).rgb;
    color = pow(color * 1.5, vec3(1.2));
    vColor = color * uBrightness;
    vExtra = aExtra;
}