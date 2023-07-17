// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec3 vColor;
varying float vSkip;

void main(void) {
    // if(vSkip > 0.5) { discard;  }
    if(distance(gl_PointCoord, vec2(0.5)) > .5) {
        discard;
    }
    gl_FragColor = vec4(vColor, 1.0);
}