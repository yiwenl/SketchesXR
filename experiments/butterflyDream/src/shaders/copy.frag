// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float uOpacity;

void main(void) {
    vec4 color = texture2D(texture, vTextureCoord);
    color.rgb = mix(color.rgb, vec3(1.0), .25);
    color.a *= uOpacity;    
    gl_FragColor = color;
}