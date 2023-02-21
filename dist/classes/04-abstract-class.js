"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// экзмепляры абстрактных классов невозможно создать
// от них можно только наследоваться
class Vehicle {
    stop() {
        console.log("Stopped");
    }
}
class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log(speed);
    }
}
exports.Car = Car;
// экзмепляры абстрактных классов невозможно создать
// от них можно только наследоваться
// const v1 = new Vehicle();
const v1 = new Car("red");
// v1.color
