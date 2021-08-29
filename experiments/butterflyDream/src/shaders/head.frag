#version 300 es

#define USE_TEX_LOD 1
#define USE_IBL 1
#define HAS_BASECOLORMAP 1
#define HAS_NORMALMAP 1
#define HAS_OCCLUSIONMAP 1

precision highp float;
in vec2 vTextureCoord;
in vec3 vNormal;
in vec3 vPosition;
uniform sampler2D uAoMap;
uniform sampler2D uColorMap;
uniform sampler2D uNormalMap;
uniform sampler2D uCombinedMap;
uniform float uUVScale;
uniform float uNormalScale;

out vec4 oColor;

vec3 getNormal() {
	vec2 uv = vTextureCoord;
	uv.y = 1.0 - uv.y;
	vec3 pos_dx = dFdx(vPosition);
	vec3 pos_dy = dFdy(vPosition);
	vec3 tex_dx = dFdx(vec3(uv, 0.0));
	vec3 tex_dy = dFdy(vec3(uv, 0.0));
	vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

	vec3 ng = normalize(vNormal);

	t = normalize(t - ng * dot(ng, t));
	vec3 b = normalize(cross(ng, t));
	mat3 tbn = mat3(t, b, ng);

	vec3 n = texture(uNormalMap, uv * uUVScale).rgb;
	n = normalize(tbn * ((2.0 * n - 1.0) * vec3(uNormalScale, uNormalScale, 1.0)));
	return n;
}


#pragma glslify: diffuse    = require(glsl-utils/diffuse.glsl)
#define LIGHT vec3(0.1, 1.0, 0.5)

void main(void) {
    vec4 color = texture(uColorMap, vTextureCoord * uUVScale);
    float ao = texture(uAoMap, vTextureCoord).r;
    color.rgb *= ao;


    vec3 normal = getNormal();
    float d = diffuse(normal, LIGHT, 0.35) * 1.5;
    color.rgb *= d;
		
		vec4 colorCombined = texture(uCombinedMap, vTextureCoord);
		color = mix(color, colorCombined, .5);

    oColor = color;
}