// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vColor;
varying vec3 vExtra;
varying float vOpacity;

uniform sampler2D texture;
uniform sampler2D uNoiseMap;
uniform float uTime;
uniform float uOpacity;

#pragma glslify: snoise    = require(glsl-utils/snoise.glsl)

void main(void) {
    vec2 uv = vTextureCoord;
    float time = uTime * 2.0;

    float s = mix(2.0, 5.0, vExtra.y);
    float u = snoise(vec3(vTextureCoord * s, time));
    float v = snoise(vec3(time, vTextureCoord.yx * s));
    uv += vec2(u, v) * 0.05;

    float alpha = 1.0 - texture2D(texture, uv).r;
    if(alpha < 0.05) {
        discard;
    }

    uv = vTextureCoord * .5 + vExtra.xy * 0.2;

    float noise = texture2D(uNoiseMap, uv).r;
    gl_FragColor = vec4(vColor * noise, alpha * vOpacity * uOpacity);
}