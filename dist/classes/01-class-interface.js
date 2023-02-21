"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    // здесь обязательно нужно описать метод go
    // аргумент нужно повторно типизировать
    // типизация должна совпадать с типизацией в интерфейсе
    go(speed) {
        console.log("Let us go with speed", speed.toFixed());
    }
    // метод, которого нет в интерфейсе, также будет работать
    stop() {
        console.log("Stopped");
    }
}
exports.Car = Car;
const car = new Car();
car.go(12);
