// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform vec2 uResolution;
uniform vec2 uDirection;

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
	vec4 color = vec4(0.0);
	vec2 off1 = vec2(1.3846153846) * direction;
	vec2 off2 = vec2(3.2307692308) * direction;
	color += texture2D(image, uv) * 0.2270270270;
	color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
	color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
	color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
	color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
	return color;
}


void main(void) {
	float expand = 0.01;
	vec2 uv = vTextureCoord - 0.5;
	uv = uv * (1.0 - expand) + 0.5;
	vec4 color0 = blur9(texture, uv, uResolution, uDirection);

	uv = vTextureCoord - 0.5;
	uv = uv * (1.0 + expand) + 0.5;
	vec4 color1 = blur9(texture, uv, uResolution, uDirection);
	gl_FragColor = color0 + color1;

	if(gl_FragColor.a > 0.0) {
			gl_FragColor.rgb /= gl_FragColor.a;
	}
}