// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;
attribute vec3 aExtra;
attribute vec2 aUV;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorCurrMap;
uniform sampler2D uColorPrevMap;
uniform float uOffsetColor;
uniform float uOffsetOpen;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vColor;

#pragma glslify: align    = require(glsl-utils/align.glsl)

void main(void) {
    vec3 pos = aVertexPosition;
    // pos.yz *= 0.5;
    vec3 posOffset = texture2D(uPosMap, aUV).xyz;
    vec3 vel = texture2D(uVelMap, aUV).xyz;
    vec3 dir = vec3(1.0, 0.0, 0.0);
    if(length(vel) > 0.0) {
        dir = normalize(vel);
    }
    vec3 data = texture2D(uDataMap, aUV).xyz;

    pos *= mix(1.0, 1.5, data.r) * aExtra.x;

    // opening scale
    pos *= uOffsetOpen;

    float speed = clamp(data.r, 0.0, 3.0);
    pos.x *= (1.0 + speed * 2.0);

    // align with moving direction
    pos = align(pos, dir);

    pos += posOffset;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = align(aNormal, dir);

    vec3 colorPrev = texture2D(uColorPrevMap, aExtra.yz).rgb;
    vec3 colorCurr = texture2D(uColorCurrMap, aExtra.yz).rgb;
    vColor = mix(colorPrev, colorCurr, uOffsetColor);
}