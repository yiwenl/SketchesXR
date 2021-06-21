#version 300 es

precision highp float;
in vec3 vColor;
uniform float uLightMap;
out vec4 oColor;

void main(void) {
    float d = distance(gl_PointCoord, vec2(.5));
    float a = smoothstep(0.5, 0.0, d);
    if(a <= 0.00001) {
        discard;
    }

    float t = mix(1.0, 5.0, uLightMap);
    a = pow(a, t);
    
    oColor = vec4(vColor, a);
}