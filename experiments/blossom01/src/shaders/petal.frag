#version 300 es

precision highp float;
in vec3 vColor;
in vec3 vPosition;
in vec4 vShadowCoord;
uniform sampler2D uDepthMap;
uniform float uOffset;

out vec4 oColor;


float samplePCF3x3( vec4 sc )
{
    const int s = 2;
    float shadow = 0.0;
    float bias = 0.005;
    // float bias = 0.115;
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
    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);
    s = mix(0.5, 1.0, s);

    float t = smoothstep(0.1, 1.0, vPosition.y);
    // s = mix(1.0, s, t);

    vec3 color = vColor * s;

    oColor = vec4(color, 1.0);
    // oColor = texture(uDepthMap, shadowCoord.xy);
    // oColor = vec4(vec3(t), 1.0);
    // oColor = vec4(shadowCoord.xy, 0.0, 1.0);
}