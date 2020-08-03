// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform sampler2D textureDepth;
uniform float uRenderDepth;

varying vec4 vShadowCoord;
varying vec3 vDebug;
varying vec3 vNormal;
varying float vDepth;


#define uMapSize vec2(1024.0)
#define FOG_DENSITY 0.2
#define LIGHT_POS vec3(0.0, 10.0, 0.0)


float rand(vec4 seed4) {
	float dot_product = dot(seed4, vec4(12.9898,78.233,45.164,94.673));
	return fract(sin(dot_product) * 43758.5453);
}


float PCFShadow(sampler2D depths, vec2 size, vec4 shadowCoord) {
	float result = 0.0;
	float bias = 0.005;
	vec2 uv = shadowCoord.xy;

	for(int x=-1; x<=1; x++){
		for(int y=-1; y<=1; y++){
			vec2 off = vec2(x,y) + rand(vec4(gl_FragCoord.xy, float(x), float(y)));
			off /= size;

			float d = texture2D(depths, uv + off).r;
			if(d < shadowCoord.z - bias) {
				result += 1.0;
			}

		}
	}
	return 1.0 -result/9.0;

}


void main(void) {
    if(distance(gl_PointCoord, vec2(.5)) > 0.5) {
        discard;
    }

    float g = mix(0.95, 0.75, vNormal.z);

		vec4 shadowCoord    = vShadowCoord / vShadowCoord.w;
		float s             = PCFShadow(textureDepth, uMapSize, shadowCoord);
		s                   = mix(s, 1.0, .4);

    gl_FragColor = vec4(vec3(g * s), 1.0);

    if(uRenderDepth > 0.5) {
        gl_FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
    }
}