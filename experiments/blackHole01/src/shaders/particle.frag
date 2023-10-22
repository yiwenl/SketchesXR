#version 300 es

precision highp float;
in vec3 vColor;
in vec3 vRandom;
in vec4 vShadowCoord;
in float vSkip;
in float vLife;

uniform sampler2D uDepthMap;

out vec4 oColor;

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#define PI 3.141592653


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

void main(void) {
    if(vSkip > .5) discard;
    if(distance(gl_PointCoord, vec2(.5)) > .5) discard;


    vec2 uv = gl_PointCoord;
    uv.x *= 0.25;
    uv.x += floor(vRandom.z * 4.0) * 0.25;

    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);
    s = mix(s, 1.0, mix(0.25, 1.0, vLife));
    
    vec3 color = vColor * s;

    oColor = vec4(color, 1.0);
}