#version 300 es

precision highp float;
in vec2 vTextureCoord;
uniform sampler2D uLightMap;

out vec4 oColor;

#define DARK_BLUE vec3(16.0, 19.0, 46.0)/255.0 * 0.5
// #define YELLOW vec3(202.0, 187.0, 55.0)/255.0
#define YELLOW vec3(233.0, 218.0, 86.0)/255.0

void main(void) {
    vec2 uv = vTextureCoord;
    float a = texture(uLightMap, uv).r;
    oColor = vec4(YELLOW * 1.2, a * 0.25);
}