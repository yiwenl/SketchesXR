#version 300 es

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
in vec2 vTextureCoord;
uniform float uSeed;
uniform float uHeight;
uniform float uStiff;

#pragma glslify: snoise    = require(./glsl-utils/snoise.glsl)
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: fbm3D    = require(./glsl-utils/fbm/3d.glsl)

#define LEVEL 10

out vec4 oColor;

float fbm(vec3 p) {
    float n = 0.0;

    for(int i=0; i<LEVEL; i++) {
        float mul = pow(2.0, float(i));
        n += snoise(p * mul) / mul;
        p.xy = rotate(p.xy, 0.5);
    }

    return n;
}

void main(void) {
    vec2 uv = vTextureCoord;
    float d = distance(uv, vec2(.5));
    d = smoothstep(0.5, 0.0, d);

    float s = 4.0;
    float n = fbm3D(vec3(vTextureCoord, uSeed) * s);
    n *= d;
    d = pow(d, uStiff);
    // float n1 = fbm(vec3(vTextureCoord, uSeed) * s);
    // n = vTextureCoord.x < .5 ? n : n1;

    float h = d + n;


    oColor = vec4(vec3(h * uHeight), 1.0);
}