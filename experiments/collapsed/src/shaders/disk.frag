// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
uniform sampler2D texture;
uniform float uOffset;


float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}

#define LIGHT vec3(0.0, 0.0, 1.0)

void main(void) {

	vec3 normalFront = vec3(0.0, 0.0, 1.0);
	vec3 normal = mix(normalFront, -normalize(vPosition), vTextureCoord.y);

	float d = diffuse(normal, LIGHT);
	d = mix(d, 1.0, .75);
	d = mix(1.0, d, uOffset);


	float g1 = vNormal.z;
	float g2 = (vNormal.x - vPosition.z)/vNormal.y;

	float g = g1 + g2;
	g = pow(g, 3.0);
	g = 1.0 - g;
	g = smoothstep(.1, 1.0, g);
	
	g = mix(g, 1.0, .5);
	g = mix(1.0, g, uOffset);
	// g = pow(g, 2.0);

    gl_FragColor = texture2D(texture, vUV);
    gl_FragColor.rgb *= d * g;

    // float g = vPosition.z - vNormal.x;
    
    

}