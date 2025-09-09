
import { GameObject } from './gameObject.js';

export class Player extends GameObject {
    constructor(x, y, width, height, img) {
        super(x, y, width, height, img);
        this.speed = 5;
    }

    move(key) {
        if (key === 'w' || key === 'ArrowUp') {
            this.translate(0, this.speed);
            if (this.collidesWith(this)) {
                this.translate(0, -this.speed);
            }
        } else if (key === 's' || key === 'ArrowDown') {
            this.translate(0, -this.speed);
            if (this.collidesWith(this)) {
                this.translate(0, this.speed);
            }
        } else if (key === 'a' || key === 'ArrowLeft') {
            this.translate(-this.speed, 0);
            if (this.collidesWith(this)) {
                this.translate(this.speed, 0);
            }
        } else if (key === 'd' || key === 'ArrowRight') {
            this.translate(this.speed, 0);
            if (this.collidesWith(this)) {
                this.translate(-this.speed, 0);
            }
        }
    }

    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    setFrame(frame) {
        this.frame = frame;
    }
}