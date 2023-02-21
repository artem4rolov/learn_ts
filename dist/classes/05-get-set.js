"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        // тип выводимого значения при get здесь будет readonly number
        return this.height * this.width;
    }
}
exports.Rectangle = Rectangle;
const rect1 = new Rectangle(123, 23);
// геттер позволяет без вызова метода обращаться к результату
// по аналогии длины массивов - Array.length вызывается без ()
// rect1.area()
// геттер не позволяет устанавливать значение
// react1.area = 123 -> error
rect1.area;
class Car {
    constructor(color, _maxSpeed) {
        this.color = color;
        this._maxSpeed = _maxSpeed;
    }
    get speed() {
        return this._maxSpeed;
    }
    set maxSpeed(speed) {
        if (speed > 0)
            this._maxSpeed = speed;
    }
}
exports.Car = Car;
const c1 = new Car("green", 250);
// дали доступ к maxSpeed через геттер
c1.speed;
// maxSpeed в этом случае не применится
c1.maxSpeed = 0;
// вернет предыдущее значение, поскольку скорость должна быть > 0
c1.maxSpeed;
