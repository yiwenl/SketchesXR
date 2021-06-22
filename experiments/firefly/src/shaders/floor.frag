// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uLightMap;

#define DARK_BLUE vec3(16.0, 19.0, 46.0)/255.0 * 0.5
// #define YELLOW vec3(202.0, 187.0, 55.0)/255.0
#define YELLOW vec3(233.0, 218.0, 86.0)/255.0

void main(void) {
    vec2 uv = vTextureCoord;
    float a = texture2D(uLightMap, uv).r;
    // gl_FragColor.rgb *= 0.25;
    gl_FragColor = vec4(YELLOW * 1.2, a * 0.25);
}