"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Vehicle {
    // private createdAt()
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    // модификатор public могут использовать дочерние классы(Car) и экзмепляры классов(car1)
    drive(speed) {
        console.log("Let us to go with speed ", speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log("Stopped");
    }
    // модификатор private может использовать только класс, в котором есть этот метод
    log(speed) {
        console.log("Vehicle has changed speed to ", speed, this.createdAt);
    }
    // модификатор protected доступен дочерним классам, но недоступен экземплярам класса (car1)
    alternativeLog(text) {
        console.log(text.toUpperCase());
    }
}
class Car extends Vehicle {
    // public color: string;
    // public maxSpeed: number;
    // если в аргументах конструктора заранее указать модификаторы доступа - в конструкторе не нужно повторно описывать эти переменные
    constructor(color, maxSpeed) {
        // поскольку метод createdAt в классе-родителе приватен, в методе super нужно явно его указать
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.color = color;
        // this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(this.color, this.maxSpeed);
    }
}
exports.Car = Car;
const car1 = new Car("red", 200);
// car1.color = 'blue'
