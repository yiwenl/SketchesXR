// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec4 vCoord;
uniform sampler2D texture;
uniform float uOffset;


float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}


#define LIGHT vec3(.5, .5, 1.0)

void main(void) {
	vec2 uv          = vCoord.xy / vCoord.w;
	
	float d          = diffuse(vNormal, LIGHT);
	d                = mix(d, 1.0, .75);
	d                = mix(1.0, d, uOffset);
	
	gl_FragColor     = texture2D(texture, uv);
	gl_FragColor.rgb *= d;
	// gl_FragColor = vec4(vNormal, 1.0);
}