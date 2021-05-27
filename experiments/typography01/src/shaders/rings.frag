#version 300 es

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
in vec2 vTextureCoord;
in vec3 vOffset;
in vec3 vExtra;
in vec3 vColor;
in vec4 vShadowCoord;

uniform sampler2D textureTexts;
uniform sampler2D textureDepth;
uniform vec2 uRingSizeRange;
uniform float uTime;
uniform float uOffsetOpen;

out vec4 oColor;

float samplePCF3x3( vec4 sc )
{
    const int s = 2;
    float shadow = 0.0;
    float bias = 0.005;
    float threshold = sc.z - bias;

    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2(-s,-s) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2(-s, 0) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2(-s, s) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2( 0,-s) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2( 0, 0) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2( 0, s) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2( s,-s) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2( s, 0) ).r);
    shadow += step(threshold, textureProjOffset( textureDepth, sc, ivec2( s, s) ).r);
    return shadow/9.0;;
}

#pragma glslify: ease = require(glsl-easings/circular-in-out)

void main(void) {

    float g = 0.5;
    if(gl_FrontFacing) {
        g = 1.0;
    }

    float t = smoothstep(uRingSizeRange.x, uRingSizeRange.y, vOffset.x);
    float br = mix(0.5, 1.0, t);

    vec2 uv = vTextureCoord + vExtra.xy;
    uv.x -= uTime * vExtra.z;
    vec4 color = texture(textureTexts, uv);
    if(color.a < 0.01) {
        discard;
    }

    float offsetOpen = (1.0 - uOffsetOpen) * 1.1;

    t = smoothstep(offsetOpen - 0.1, offsetOpen, vExtra.z);
    t = ease(t);

    // vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
	// float s             = samplePCF3x3(shadowCoord);
    // s = mix(s, 1.0, .4);

    // oColor = vec4(vColor * vec3(g * br * s) * 1.5, 1.0);
    // oColor = vec4(vec3(g * br) * 1.5, 1.0);
    oColor = vec4(vec3(g * br) * 1.5, t);
}