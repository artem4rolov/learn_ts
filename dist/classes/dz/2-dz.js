"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}
exports.Temperature = Temperature;
const temp1 = new Temperature(25);
temp1.fahrenheit = 21;
class Test extends Temperature {
    constructor(celsius) {
        super(celsius);
        this.celsius = celsius;
        Temperature.fromFahrenheit(12);
    }
}
