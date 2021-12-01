import { Dot } from "../../interfaces/dot";
import {PI2} from "../../consts";

export class CircleDot implements Dot {
    blue: number
    gapSize: number;
    green: number;
    red: number;
    size: number;
    x: number;
    y: number;


    constructor(x: number, y: number, size: number, gapSize: number, red:number, green:number, blue: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.gapSize = gapSize;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    draw(context: CanvasRenderingContext2D, ...args: any[]): void {
        const startX = this.x - this.gapSize / 2;
        context.beginPath();
        context.fillStyle = `rgb(${this.red}, ${this.blue}, ${this.green})`;
        context.arc(this.x + (this.gapSize + this.size) / 2, this.y + (this.gapSize, this.size) / 2, (this.size) / 2, 0, PI2, false);
        context.fill();
        context.closePath();
    }
}