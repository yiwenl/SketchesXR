#version 300 es

precision highp float;

in vec3 vColor;
in vec4 vShadowCoord;
out vec4 oColor;

uniform sampler2D uDepthMap;
uniform sampler2D uParticleMap;
uniform float uShadowStrength;

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

void main(void) {
    if(distance(gl_PointCoord, vec2(.5)) > .5) discard;

    vec2 uv = gl_PointCoord;
    uv.y = 1.0 - uv.y;
    vec4 colorParticle = texture(uParticleMap, uv);
    

    // shadow
    vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	float s             = samplePCF3x3(shadowCoord);
    s = mix(s, 1.0, uShadowStrength);

    vec3 color = colorParticle.rgb * vColor * s;
    

    oColor = vec4(color, 1.0);
}