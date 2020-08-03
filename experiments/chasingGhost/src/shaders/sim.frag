// copy.frag

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uTexPos;
uniform sampler2D uTexVel;
uniform sampler2D uTexExtra;
uniform sampler2D uTexPosOrg;
uniform float uTime;
uniform vec3 uCenter;
uniform float uFoceNoise;
uniform float uFoceFollow;

#pragma glslify: curlNoise    = require(glsl-utils/curlNoise.glsl)

vec3 safeNormalize(vec3 v) {
    if(length(v) <= 0.0) {
        return vec3(0.0);
    } else {
        return normalize(v);
    }
}

void main(void) {
    vec3 pos = texture2D(uTexPos, vTextureCoord).xyz;
    vec3 vel = texture2D(uTexVel, vTextureCoord).xyz;
    vec3 extra = texture2D(uTexExtra, vTextureCoord).xyz;
    vec3 posOrg = texture2D(uTexPosOrg, vTextureCoord).xyz;

    vec3 acc = vec3(0.0);
    vec3 noise = curlNoise(pos + vec3(0.0, uTime, 0.0));

    float distToCenter = distance(pos, uCenter + posOrg);
    vec3 dirToCenter = safeNormalize(uCenter + posOrg - pos);
    float f = smoothstep(0.0, 1.0, distToCenter);
    acc += dirToCenter * f * uFoceFollow * mix(1.0, 2.0, noise.z * 0.5 + 0.5);

    acc += noise * uFoceNoise;

    vel += acc * mix(1.0, 2.0, extra.y) * 0.0015;
    vel *= 0.95;
    
    gl_FragColor = vec4(vel, 1.0);
}