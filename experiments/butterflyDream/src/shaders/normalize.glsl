vec3 safeNormalize(vec3 v) {
    if(length(v) > 0.0) {
        return normalize(v);
    } else {
        return vec3(0.0);
    }
}

#pragma glslify: export(safeNormalize)