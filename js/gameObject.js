
export class GameObject {
    constructor(x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    rotate(angle) {
        // Rotation logic can be implemented here if needed
    }

    scale(sx, sy) {
        this.width *= sx;
        this.height *= sy;
    }

    collidesWith(other) {
        return !(
            this.x > other.x + other.width ||
            this.x + this.width < other.x ||
            this.y > other.y + other.height ||
            this.y + this.height < other.y
        );
    }

    draw(ctx, img) {
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
}