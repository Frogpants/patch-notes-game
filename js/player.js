
import { Sprite } from './gameObject.js';

export class Player extends Sprite {
    constructor(x, y, width, height, img) {
        super(x, y, width, height, img);
        this.speed = 5;
    }

    // move(key) {
    //     switch (key) {
    //         case 'ArrowUp' || 'w':

    // }

    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    setFrame(frame) {
        this.frame = frame;
    }
}