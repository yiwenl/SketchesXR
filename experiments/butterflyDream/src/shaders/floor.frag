// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float uIsPresenting;
uniform float uOpacity;

#define SHADOW_STRENGTH 0.8

void main(void) {
    vec4 color = texture2D(texture, vTextureCoord);

    float shadow = length(color.rgb);
    shadow = 1.0 - shadow;
    shadow *= SHADOW_STRENGTH;

    color.rgb = mix(color.rgb, vec3(1.0), .25);

    if(uIsPresenting > 0.5) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, shadow * uOpacity);
    } else {
        float d = distance(vTextureCoord, vec2(0.5));
        d = smoothstep(0.5, 0.3, d);
        color.a *= d;
        gl_FragColor = color;
    }

}