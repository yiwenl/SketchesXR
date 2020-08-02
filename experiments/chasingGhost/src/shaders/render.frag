// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
varying vec3 vDebug;
varying vec3 vNormal;

void main(void) {
    if(distance(gl_PointCoord, vec2(.5)) > 0.5) {
        discard;
    }

    float g = mix(0.7, 1.0, vNormal.z);
    gl_FragColor = vec4(vec3(g), 1.0);
}