#version 300 es

precision highp float;
in vec3 vPosition;
in vec3 vNormal;
in vec3 vColor;
in vec4 vShadowCoord;

uniform sampler2D uDepthMap;

out vec4 oColor;
#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)
#define LIGHT vec3(0.0, 1.0, 0.2)

float samplePCF3x3( vec4 sc )
{
    const int s = 2;
    float shadow = 0.0;
    float bias = 0.01;
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


void main(void) {
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);

    if(shadowCoord.x > 1.0 || shadowCoord.x < 0.0) { 
        s = 1.0;
    }
    if(shadowCoord.y > 1.0 || shadowCoord.y < 0.0) { 
        s = 1.0;
    }

    s = mix(s, 1.0, .5);

    float d = diffuse(vNormal, LIGHT, .5);
    oColor = vec4(vColor * vec3(d * s), 1.0);
}