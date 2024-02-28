#version 300 es

precision highp float;
in vec2 vTextureCoord;

uniform sampler2D uPosMap;
uniform sampler2D uVelMap;
uniform sampler2D uExtraMap;
uniform sampler2D uDataMap;
uniform sampler2D uColorMap;
uniform sampler2D uInkMap;
uniform sampler2D uHeightMap;
uniform float uBound;
uniform float uSeed;

layout (location = 0) out vec4 oFragColor0;
layout (location = 1) out vec4 oFragColor1;
layout (location = 2) out vec4 oFragColor2;
layout (location = 3) out vec4 oFragColor3;
layout (location = 4) out vec4 oFragColor4;

void main(void) {

    vec3 pos = texture(uPosMap, vTextureCoord).xyz;
    vec3 vel = texture(uVelMap, vTextureCoord).xyz;
    vec3 extra = texture(uExtraMap, vTextureCoord).xyz;
    vec3 data = texture(uDataMap, vTextureCoord).xyz;
    vec3 color = texture(uColorMap, vTextureCoord).xyz;


    vec2 uv = pos.xz / uBound * .5 + .5;
    uv.y = 1.0 - uv.y;
    float ink = texture(uInkMap, uv).x;

    if(ink < 0.2) { // need to reset
        uv = mod(extra.xy + uSeed * extra.zy, vec2(1.0));
        pos.xz = uv * uBound - uBound * .5;
    }
    color = 1.0 - texture(uInkMap, uv).xyz;
    float h = texture(uHeightMap, uv).x;
    pos.y = h;

    oFragColor0 = vec4(pos, 1.0);
    oFragColor1 = vec4(vel, 1.0);
    oFragColor2 = vec4(extra, 1.0);
    oFragColor3 = vec4(data, 1.0);
    oFragColor4 = vec4(color, 1.0);
}