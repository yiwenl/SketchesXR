#version 300 es

precision highp float;
in vec2 vTextureCoord;
uniform sampler2D uTexBase;
uniform sampler2D uTexPrev;
uniform sampler2D uTexFlow;

out vec4 oColor;

void main(void) {

    vec3 base = texture(uTexBase, vTextureCoord).rgb;
    vec3 flow = texture(uTexFlow, vTextureCoord).rgb;
    vec2 uv = vTextureCoord - 0.5;
    uv = uv * 0.98 + 0.5;
    uv.xy += flow.xy * mix(flow.z, 1.0, .2) * 0.01;
    // uv.xy += flow.xy * mix(flow.z, 1.0, .5) * 0.01;

    vec3 color = texture(uTexPrev, uv).rgb;
    color += base * 0.5;
    color *= 0.94;

    oColor = vec4(color, 1.0);
}