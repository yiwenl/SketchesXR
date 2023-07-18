// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uEnvMap;
uniform sampler2D uNormalMap;

#pragma glslify: diffuse    = require(./glsl-utils/diffuse.glsl)
#define LIGHT vec3(0.0, 1.0, -1.0)

void main(void) {
    vec4 normal = texture2D(uNormalMap, vTextureCoord);
    vec3 N = normalize(normal.rgb * 2.0 - 1.0);

    vec2 uvShift = (N.rg) * normal.a * 0.2;
    vec2 uv = vTextureCoord + uvShift;

    float d = diffuse(N, LIGHT);
    d = pow(d, 3.0);

    gl_FragColor = texture2D(uEnvMap, uv);
    gl_FragColor.rgb += d * .5;
}