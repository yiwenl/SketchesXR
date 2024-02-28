#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec2 aUV;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;

uniform vec3 uPoint0;
uniform vec3 uPoint1;
uniform vec3 uPoint2;
uniform vec3 uPoint3;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: bezier    = require(./glsl-utils/bezier.glsl)

void main(void) {
    vec3 data = texture(uDataMap, aUV).xyz;

    // float scale = mix(1.0, 3.0, aExtra.x);
    vec3 scale = mix(vec3(1.0), vec3(2.0), aExtra.zxy);

    vec3 pos = aVertexPosition * scale;
    vec3 posOffset = texture(uPosMap, aUV).xyz;
    vec3 posRnd = (aExtra - 0.5) * .2;
    float t = smoothstep(0.2, 0.0, data.x);
    posOffset = mix(posRnd, posOffset, t);
    // posOffset *= 

    vec3 posBezier = bezier(uPoint0, uPoint1, uPoint2, uPoint3, data.x);
    pos += posOffset + posBezier;

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;

    // float g = mix(0.5, 1.0, aExtra.y);
    vColor = texture(uColorMap, aUV).xyz;
    // vColor = vec3(g, g, g);
}