// copy.frag
precision highp float;
varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vDebug;
varying float vHeight;
varying float vDiscard;

uniform vec3 uColors[5];
uniform sampler2D texture;
uniform float uShading;

#define LIGHT vec3(0.0, 1.0, 0.8)
#pragma glslify: diffuse = require(glsl-utils/diffuse.glsl)

float map(float value, float min1, float max1, float min2, float max2) {
    float p = min2 + (value - min1) * (max2 - min2) / (max1 - min1);

    p = clamp(p, min2, max2);
    return p;
}

vec4 getColor(float value) {
    float t;
    vec3 color = vec3(0.0);

    if(value < 0.2) {
        t = map(value, 0.0, 0.2, 0.0, 1.0);
        color = mix(uColors[0], uColors[1], t);
    } else if(value < 0.35) {
        t = map(value, 0.2, 0.35, 0.0, 1.0);
        color = mix(uColors[1], uColors[2], t);
    } else if(value < 0.5) {
        t = map(value, 0.35, 0.5, 0.0, 1.0);
        color = mix(uColors[2], uColors[3], t);
    } else {
        t = map(value, 0.5, 1.0, 0.0, 1.0);
        color = mix(uColors[3], uColors[4], t);
    }

    return vec4(color/255.0, 1.0);
}

void main(void) {
    if(vDiscard > 0.5) {
        discard;
    }
    float d = diffuse(vNormal, LIGHT, uShading);


    vec4 color = getColor(vDebug.g * vDebug.b);
    float noise = mix(vDebug.r, 1.0, .8);
    color.rgb *= noise * d;
    gl_FragColor = color;
}