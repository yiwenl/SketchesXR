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
    float d = diffuse(N, LIGHT);

    vec2 uvShift = (N.rg) * normal.a * 0.2;
    vec2 uv = vTextureCoord + uvShift;

    vec2 offset = vec2(d, 0.0) * 0.02;

    float red = texture2D(uEnvMap, uv - offset).r; 
    float green = texture2D(uEnvMap, uv).g;
    float blue = texture2D(uEnvMap, uv + offset).b;

    vec3 color = vec3(red, green, blue);

    gl_FragColor = vec4(color, 1.0);
    gl_FragColor.rgb += pow(d, 3.0) * .5;
}