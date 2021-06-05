#version 300 es
precision highp float;

#define texture2D texture

in vec2 vTextureCoord;
in vec3 vNormal;
in vec3 vNormalOrg;
in vec3 vPosition;
uniform sampler2D uNormalMap;
uniform float uNormalScale;
uniform vec3 uLightPos;

out vec4 oColor;

#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)

void main(void) {

    vec3 colorNormal = texture(uNormalMap, vTextureCoord).rgb - 0.5;
    vec3 n = normalize(vNormalOrg + colorNormal * uNormalScale);

    float g = diffuse(n, uLightPos, .5);
    oColor = vec4(vec3(g), 1.0);
}