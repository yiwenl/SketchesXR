// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vNormalOrg;
varying vec2 vScale;

uniform sampler2D uPatternMap;
uniform float uUseNormal;

#define AxisZ vec3(0.0, 0.0, 1.0)
#define AxisY vec3(0.0, 1.0, 0.0)

#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

#pragma glslify: diffuse    = require(./glsl-utils/diffuse.glsl)
#define LIGHT vec3(0.2, 1.0, -.2)

void main(void) {

    float t = abs(dot(vNormalOrg, AxisZ));
    bool isFront = t > 0.0;

    t = abs(dot(vNormalOrg, AxisY));
    bool isTop = t > 0.0;

    vec2 uv = vTextureCoord * vScale.x * 0.2;
    if(!isFront) {
        if(isTop) {
            uv.y *= vScale.y;
        } else {
            uv.x *= vScale.y;
        }
    }
    vec4 color = texture2D(uPatternMap, uv);

    float d = diffuse(LIGHT, vNormal, .5);

    color.rgb *= d;

    gl_FragColor = color;
    if(uUseNormal > 0.5 ) {
        gl_FragColor = vec4(vNormal * .5 + .5, 1.0);
    }
}