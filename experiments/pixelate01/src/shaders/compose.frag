// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform sampler2D textureMask;

void main(void) {
	vec4 mask = texture2D(textureMask, vTextureCoord);
	vec2 uv = vTextureCoord + mask.xy * 0.5;
	vec4 color = texture2D(texture, vTextureCoord);
	vec4 colorSwirl = texture2D(texture, uv);

	float offset = smoothstep(.8, 1.0, mask.z);
	gl_FragColor = mix(colorSwirl, color, offset);

	gl_FragColor.rgb -= (1.0 - mask.z) * .5 * mask.a;
}