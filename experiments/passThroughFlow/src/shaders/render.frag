#version 300 es
precision highp float;
in vec2 vTextureCoord;
in vec3 vColor;
in vec3 vNormal;
in vec4 vShadowCoord;

uniform vec3 uLight;
uniform sampler2D uDepthMap;

#pragma glslify: diffuse    = require(./glsl-utils/diffuse.glsl)
#define LIGHT vec3(1.0, 0.8, 0.6)


float samplePCF3x3( vec4 sc )
{
    const int s = 2;
    float shadow = 0.0;
    float bias = 0.005;
    float threshold = sc.z - bias;

    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2(-s,-s) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2(-s, 0) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2(-s, s) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2( 0,-s) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2( 0, 0) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2( 0, s) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2( s,-s) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2( s, 0) ).r);
    shadow += step(threshold, textureProjOffset( uDepthMap, sc, ivec2( s, s) ).r);
    return shadow/9.0;
}

out vec4 oColor;

void main(void) {
    float g = diffuse(vNormal, uLight, .25);

    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);
    s = mix(s, 1.0, .5);

    vec3 color = vColor * g * s;

    vec3 colorAdjusted = smoothstep(vec3(0.0), vec3(1.0), color);
    color = mix(color, colorAdjusted, .5);

    oColor = vec4(color, 1.0);
}