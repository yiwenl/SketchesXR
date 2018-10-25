// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vExtra;
uniform sampler2D texture;
uniform float uTime;
uniform float uUVScale;

void main(void) {

	vec2 uv = vTextureCoord;
	uv.x = 1.0 - uv.x;
	uv.x += vExtra.y;
	uv.x += uTime ;
	uv.x = mod(uv.x, 1.0);
	uv.x *= uUVScale;
    vec4 color = texture2D(texture, uv);
    if(color.a <= 0.01) {
		discard;
	} 
    gl_FragColor = color;
}