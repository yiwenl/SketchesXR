// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uTexPos;
uniform sampler2D uTexVel;
uniform sampler2D uTexPosOrg;
uniform vec3 uCenter;
uniform float uOffset;

void main(void) {
    vec3 pos = texture2D(uTexPos, vTextureCoord).xyz;
    vec3 vel = texture2D(uTexVel, vTextureCoord).xyz;
    vec3 posOrg = texture2D(uTexPosOrg, vTextureCoord).xyz;
    pos += vel;

    gl_FragColor = vec4(pos, 1.0);
}