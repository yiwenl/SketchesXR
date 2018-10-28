// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform sampler2D textureMap;

void main(void) {
	vec2 uv = vTextureCoord;
    vec4 colorMap = texture2D(textureMap, vTextureCoord);
    vec2 offset = texture2D(textureMap, vTextureCoord).xy - 0.5;

    float t = smoothstep(0.2, 0.8, 1.0 - colorMap.b);

    uv += offset * colorMap.a * t * 0.2;
    gl_FragColor = texture2D(texture, uv);

    if(colorMap.a > 0.0) {
    	gl_FragColor.rgb *= mix(smoothstep(0.0, 0.75, colorMap.b), 1.0, .5);
    }


}