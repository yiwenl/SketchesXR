vec3 safeNormalize(vec3 v) {
    if(length(v) > 0.0) {
        return normalize(v);
    } else {
        return vec3(0.0);
    }
}

vec2 safeNormalize(vec2 v) {
    if(length(v) > 0.0) {
        return normalize(v);
    } else {
        return vec2(0.0);
    }
}

#pragma glslify: export(safeNormalize)