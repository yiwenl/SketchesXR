// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec3 aNormal;
attribute vec2 aUVOffset;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;

varying vec3 vNormal;

const float radius = 0.0015;

#pragma glslify: particleSize = require(glsl-utils/particleSize.glsl)
#pragma glslify: align    = require(glsl-utils/align.glsl)

void main(void) {
    vec3 posOffset = texture2D(uPosMap, aUVOffset.xy).xyz;
    vec3 pos = aVertexPosition;

    vec3 vel = texture2D(uVelMap, aUVOffset).xyz;
    vec3 dir = vec3(1.0, 0.0, 0.0);
    if(length(vel) > 0.0) {
        dir = normalize(vel);
    }

    // align with moving direction
    pos = align(pos, dir);

    pos += posOffset;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    vNormal = align(aNormal, dir);
}