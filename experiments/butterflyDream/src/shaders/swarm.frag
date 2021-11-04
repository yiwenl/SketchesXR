#version 300 es

precision highp float;
in vec2 vTextureCoord;
in vec3 vRandom;
in vec3 vPosition;
in vec4 vShadowCoord;

uniform sampler2D uColor0Map;
uniform sampler2D uColor1Map;
uniform sampler2D uDepthMap;
uniform sampler2D uColorMap;
uniform sampler2D uMap;
uniform float uColorOffset;

out vec4 oColor;

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
    float offset = clamp(-vRandom.y + uColorOffset * 2.0, 0.0, 1.0);

    vec4 color = texture(uMap, vTextureCoord);
    if(color.a <= 0.5) {
        discard;
    }

    vec3 mapColor = texture(uColorMap, vRandom.xy).rgb;
    color.rgb *= mapColor;

    if(!gl_FrontFacing) {
        color.rgb *= 0.5;
    }

    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);
    s = mix(s, 1.0, .75);
    color.rgb *= s;

    color.rgb = pow(color.rgb + 0.1, vec3(1.2));

    oColor = color;
}