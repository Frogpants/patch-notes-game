#version 100

precision mediump float;

varying vec2 v_texcoord;
uniform sampler2D u_texture;

float px = 150.0;

// Existing snap function for your pixel grid
float snap(float val, float s) {
    return floor(val * s) / s;
}

// Existing snapColor function (keep as-is)
vec3 snapColor(vec3 val, float s) {
    //float r = floor(val.x * s - 0.1) / (s * 1.5) + 0.1;
    //float g = floor(val.y * s - 0.1) / (s * 1.5) + 0.17;
    //float b = floor(val.z * s - 0.1) / (s * 1.5) + 0.2;
    
    vec3 col = floor(val * s) / s;
    
    return col;
}

// Simple posterize function to reduce the number of distinct colors
vec3 posterize(vec3 color, int levels) {
    return floor(color * float(levels)) / float(levels);
}

void main()
{
    // Normalized pixel coordinates (0..1)
    vec2 uv = v_texcoord;
    uv = vec2(snap(uv.x, px), snap(uv.y, px));

    // Sample original image
    vec3 col = texture2D(u_texture, uv).rgb;

    // Posterize original colors to make them more like pixel art
    col = posterize(col, 4); // 4 levels per channel (adjust for more/less)

    // Then apply snapColor as before
    // col = snapColor(col, 4.0);

    col = clamp(col, 0.0, 1.0);

    gl_FragColor = vec4(col, 1.0);
}