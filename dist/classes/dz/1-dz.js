"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        const area = this.height * this.width;
        return this.log(area);
    }
    log(area) {
        console.log(`new Rectangle was create at ${new Date()}, area = ${area}`);
    }
}
exports.Rectangle = Rectangle;
class Square extends Rectangle {
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
const square = new Square(100, "red");
square.area();
square.paint("green");
console.log(square);
