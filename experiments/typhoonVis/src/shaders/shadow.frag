// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float uOffset;

void main(void) {
	float d = distance(vTextureCoord, vec2(.5));
	d = smoothstep(0.5, 0.0, d) * uOffset * 0.5;

    gl_FragColor = vec4(vec3(0.0), d);
    // gl_FragColor = vec4(1.0)
}