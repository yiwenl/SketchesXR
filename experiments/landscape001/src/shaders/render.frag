#version 300 es
precision highp float;

in vec3 vColor;
in vec4 vShadowCoord;

uniform sampler2D uDepthMap;
uniform sampler2D uParticleMap;
uniform float uShadowStrength;

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
    return shadow/9.0;;
}

float fogFactorExp2(const float dist, const float density) {
	const float LOG2 = -1.442695;
	float d = density * dist;
	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);
}

#define FOG_DENSITY 0.2

void main(void) {
    if(distance(gl_PointCoord, vec2(.5)) > .5) discard;

    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);
    s = mix(s, 1.0, uShadowStrength);

    vec2 uv = gl_PointCoord.xy;
    uv.y = 1.0 - uv.y;

    vec3 color = texture(uParticleMap, uv).rgb * s;

    float fogDistance   = gl_FragCoord.z / gl_FragCoord.w;
	float fogAmount     = fogFactorExp2(fogDistance - 8.0, FOG_DENSITY);

    oColor = vec4(color, 1.0);
}