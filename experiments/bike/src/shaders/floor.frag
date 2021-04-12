#version 300 es

precision highp float;
in vec2 vTextureCoord;
in vec4 vShadowCoord;
out vec4 oColor;
uniform sampler2D uDepthMap;
uniform float uIsPresenting;

#define uMapSize vec2(2048.0)

float samplePCF3x3( vec4 sc )
{
    const int s = 2;
    float shadow = 0.0;
    float bias = 0.005;
    float threshold = sc.z - bias;

    if(sc.x < 0.0 || sc.x > 1.0 || sc.y < 0.0 || sc.y > 1.0) {
        return 1.0;
    }

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


void main(void) {

    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);
    s = mix(1.0, s, 0.5);

    if(uIsPresenting > 0.5) {
        oColor = vec4(vec3(0.0), 1.0-s);
    } else {
        float d = distance(vTextureCoord, vec2(.5));
        d = smoothstep(0.4, 0.1, d) * 0.8;
        d *= s;

        oColor = vec4(vec3(d), 1.0);
    }
}