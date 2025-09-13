
attribute vec2 a_position;
attribute vec2 a_texcoord;

uniform mat3 u_matrix;

varying vec2 v_texcoord;

void main() {
    vec3 pos = u_matrix * vec3(a_position, 1.0);

    gl_Position = vec4(pos.xy, 0.0, 1.0);

    v_texcoord = a_texcoord;
}
