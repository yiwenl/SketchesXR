// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uTexPos;
uniform sampler2D uTexVel;
uniform sampler2D uTexExtra;
uniform sampler2D uTexPosOrg;
uniform float uTime;

void main(void) {
    vec3 pos = texture2D(uTexPos, vTextureCoord).xyz;
    vec3 vel = texture2D(uTexVel, vTextureCoord).xyz;
    vel.y += 0.01;
    gl_FragColor = vec4(vel, 1.0);
}