#version 300 es

precision highp float;
in vec2 vTextureCoord;
uniform float uRatio;
uniform float uSeed;
uniform sampler2D uMap;
out vec4 oColor;

#pragma glslify: fbm    = require(./glsl-utils/fbm/3d.glsl)
#pragma glslify: snoise    = require(./glsl-utils/snoise.glsl)
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

#define LEVEL 5

float fbm3D(vec3 p) {
    float n = 0.0;
    for(int i = 0; i <LEVEL; i++ ) {
        float mul = pow(2.0, float(i));
        n += snoise(p * mul) / mul;
        p.xy = rotate(p.xy, 0.5);
    }

    return n;
}

void main(void) {
    vec2 uv = vTextureCoord - 0.5;
    uv.y /= uRatio;
    uv += 0.5;
    vec4 color = texture(uMap, uv);

    // noise
    float seed = fbm3D(vec3(uSeed, vTextureCoord) * 100.0);
    float noise = fbm(vec3(vTextureCoord, seed) * 50.0);
    color.rgb *= mix(0.5, 1.4, noise);

    float d = distance(vTextureCoord, vec2(.5));
    d = smoothstep(0.5, 0.4, d);
    color.rgb *= d;

    oColor = color;
}