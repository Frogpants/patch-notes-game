
precision mediump float;

varying vec2 v_texcoord;
uniform sampler2D u_texture;

void main() {
    vec4 color = texture2D(u_texture, v_texcoord);

    // Example glitch effect
    float glitch = step(0.95, fract(sin(v_texCoord.y*100.0 + u_time*10.0)*1000.0));
    color.r += glitch * 0.3;
    color.g += glitch * 0.2;
    color.b += glitch * 0.1;

    gl_FragColor = color;
}