
import { Player } from './player.js';

const player = new Player(0, 0, 50, 50, 'player.png');

export function initGame() {
    player.setSpeed(4);
}