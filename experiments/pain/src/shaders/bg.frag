precision highp float;
varying vec3 vPosition;
uniform float uTime;
uniform float uOpacity;
uniform float uMaxHeight;
uniform vec3 uColor0;
uniform vec3 uColor1;

#pragma glslify: snoise    = require(glsl-utils/snoise.glsl)

void main(void) {
    vec3 pos = vPosition;
    pos.xz *= 2.0;
    pos.y -= uTime * 1.328497;
    pos -= uTime;
    float noise = snoise(pos) * .5 + .5;
    float noise2 = snoise(vPosition * 1.5 - uTime) * .5 + .5;

    float mixOffset = vPosition.y/uMaxHeight - 0.2;
    noise = clamp(noise + mixOffset, 0.0, 1.0);

    float h2 = uMaxHeight/2.0;
    float t = abs(vPosition.y - h2);
    t /= h2;
    t = smoothstep(0.95, 0.6, t);
    t -= noise2 * 0.15;
    t = clamp(t, 0.0, 1.0) * uOpacity;

    gl_FragColor = vec4(mix(uColor0, uColor1, noise), t);
}