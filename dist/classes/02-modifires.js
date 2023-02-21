"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
// модификаторы доступа методов при наследовании класса от класса
class Vehicle {
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
        console.log("Vehicle has changed speed to ", speed);
    }
    // модификатор protected доступен дочерним классам, но недоступен экземплярам класса (car1)
    alternativeLog(text) {
        console.log(text.toUpperCase());
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        this.alternativeLog("speed was changed");
    }
}
const car1 = new Car();
car1.drive(120);
car1.stop();
// car.log(123);
// метод log приватен
