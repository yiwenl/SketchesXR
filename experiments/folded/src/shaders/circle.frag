// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec4 vCoord;
uniform sampler2D texture;

void main(void) {
	vec2 uv      = vCoord.xy / vCoord.w;
	gl_FragColor = texture2D(texture, uv);
	gl_FragColor = vec4(uv, 1.0, 1.0);
}