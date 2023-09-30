// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aPosOffset;
attribute vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uScale;
uniform float uMinScale;

varying vec2 vUV;
varying vec2 vUVOrg;
varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vColor;
varying vec3 vExtra;

#define PI 3.141592653
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: snoise    = require(./glsl-utils/snoise.glsl)

#define uRadius 0.5


vec3 getPos(float scale) {
    vec3 pos = aVertexPosition;
    pos.x *= aPosOffset.y;
    pos.z *= scale * aExtra.x;
    pos.z += aExtra.y;
    float r = uRadius * PI * 0.5;

    float d = pos.z;

    if(d < 0.0) {
        d = abs(d);
        if(d < r) {
            float t = abs(d)/r;
            t = min(t, 1.0);
            float a = PI * 0.5 * t;
            pos = vec3(pos.x, -uRadius, 0.0);
            pos.yz = rotate(pos.yz, a);
            pos.y += uRadius;
        } else {
            pos.z = -uRadius;
            pos.y = d - r + uRadius;
        }
    } 


    vec2 dir = normalize(aPosOffset.xz);
    float angle = atan(dir.x, dir.y);

    // vec3 posNoise = vec3(aPosOffset.x, pos.y, aPosOffset.z) * aExtra.y;
    // float n = snoise(posNoise);
    // pos.x += n * 0.02;

    pos.xz = rotate(pos.xz, -angle + PI);
    pos.xz += aPosOffset.xz;
    pos.y += aExtra.z * 0.01;
    
    return pos;
}

void main(void) {

    float scale = clamp(uScale * 2.0 - aExtra.z, 0.0, 1.0);
    scale = mix(uMinScale, 1.0, scale);

    vec3 pos = getPos(scale);
    vec3 posMin = getPos(uMinScale);

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    vec4 screenPos = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(posMin, 1.0);

    vTextureCoord = screenPos.xy/screenPos.w * .5 + .5;
    vUVOrg = gl_Position.xy/gl_Position.w * .5 + .5;
    vUV = aTextureCoord;
    vExtra = aExtra;
}