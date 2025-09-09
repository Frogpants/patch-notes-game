export function initWebGL(canvas) {
  const gl = canvas.getContext("webgl");
  if (!gl) throw new Error("WebGL not supported");
  return gl;
}

export async function loadShaderSource(url) {
  const res = await fetch(url);
  return await res.text();
}

export function compileShader(gl, source, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw new Error("Could not compile shader:\n" + info);
  }

  return shader;
}

export function createProgram(gl, vertexSrc, fragmentSrc) {
  const vShader = compileShader(gl, vertexSrc, gl.VERTEX_SHADER);
  const fShader = compileShader(gl, fragmentSrc, gl.FRAGMENT_SHADER);

  const program = gl.createProgram();
  gl.attachShader(program, vShader);
  gl.attachShader(program, fShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    throw new Error("Could not link program:\n" + info);
  }

  return program;
}