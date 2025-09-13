
class Transform {
  constructor(x = 0, y = 0, scaleX = 1, scaleY = 1, rotation = 0) {
    this.position = { x, y };
    this.scale = { x: scaleX, y: scaleY };
    this.rotation = rotation; // I hate radians sm
  }
}

export class Sprite {
  constructor(gl, texture, x, y, width, height) {
    this.gl = gl;
    this.texture = texture;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.transform = new Transform(x, y, 1, 1, 0);
  }

  draw(program) {
    const gl = this.gl;

    // Bind texture
    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    // Compute vertex data for this sprite
    const x1 = this.x;
    const y1 = this.y;
    const x2 = this.x + this.width;
    const y2 = this.y + this.height;

    // Quad with UVs (0–1 for full image)
    const vertices = new Float32Array([
      x1, y1, 0, 0,
      x2, y1, 1, 0,
      x1, y2, 0, 1,
      x2, y2, 1, 1,
    ]);

    // Upload vertices
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const a_position = gl.getAttribLocation(program, "a_position");
    const a_texcoord = gl.getAttribLocation(program, "a_texcoord");

    gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(a_position);

    gl.vertexAttribPointer(a_texcoord, 2, gl.FLOAT, false, 16, 8);
    gl.enableVertexAttribArray(a_texcoord);

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}
