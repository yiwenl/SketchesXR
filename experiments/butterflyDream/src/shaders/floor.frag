#version 300 es

precision highp float;

in vec2 vTextureCoord;
in vec4 vShadowCoord;

uniform sampler2D uMap;
uniform sampler2D uDepthMap;
uniform float uIsPresenting;
uniform float uOpacity;

#define SHADOW_STRENGTH 0.8
#define PI 3.141592653

out vec4 oColor;

#pragma glslify: rotate          = require(glsl-utils/rotate.glsl)

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
    vec2 uv = vTextureCoord - 0.5;
    uv = rotate(uv, PI * 0.5);
    vec4 color = texture(uMap, uv + 0.5);

    float shadow = length(color.rgb);
    shadow = 1.0 - shadow;
    shadow *= SHADOW_STRENGTH;

    color.rgb = mix(color.rgb, vec3(1.0), .25);
    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
    float s             = samplePCF3x3(shadowCoord);

    if(uIsPresenting > 0.5) {
        oColor = vec4(0.0, 0.0, 0.0, shadow * uOpacity + (1.0 - s));
    } else {
        float d = distance(vTextureCoord, vec2(0.5));
        d = smoothstep(0.5, 0.3, d);
        color.a *= d;

        s = mix(s, 1.0, .75);
        color.rgb *= s;

        oColor = vec4(vec3(s), 1.0);
    }


}