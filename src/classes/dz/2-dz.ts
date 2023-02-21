export class Temperature {
  constructor(public celsius: number) {}

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }

  public static fromFahrenheit(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}

const temp1 = new Temperature(25);
temp1.fahrenheit = 21;

class Test extends Temperature {
  constructor(public celsius: number) {
    super(celsius);
    Temperature.fromFahrenheit(12);
  }
}
