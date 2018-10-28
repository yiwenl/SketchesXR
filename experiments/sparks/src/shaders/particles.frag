// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying float vLife;
uniform sampler2D textureParticle;
uniform sampler2D textureMap;

void main(void) {
	vec3 colorMap = texture2D(textureMap, vTextureCoord).xyz;
	vec4 color = texture2D(textureParticle, gl_PointCoord);
	color.rgb *= colorMap * 1.0;

	float a1 = smoothstep(0.0, 0.1, vLife);
	float a2 = smoothstep(1.0, 0.9, vLife);

    gl_FragColor = color * a1 * a2;
}