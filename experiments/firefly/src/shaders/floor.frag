// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uLightMap;

#define DARK_BLUE vec3(16.0, 19.0, 46.0)/255.0 * 0.5

void main(void) {
    vec2 uv = vTextureCoord;
    float a = texture2D(uLightMap, uv).r;
    // gl_FragColor.rgb *= 0.25;
    gl_FragColor = vec4(vec3(1.0), a * 0.25);
}