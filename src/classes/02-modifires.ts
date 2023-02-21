// модификаторы доступа методов при наследовании класса от класса
export class Vehicle {
  // модификатор public могут использовать дочерние классы(Car) и экзмепляры классов(car1)
  public drive(speed: number): void {
    console.log("Let us to go with speed ", speed.toFixed());
    this.log(speed);
  }
  public stop() {
    console.log("Stopped");
  }
  // модификатор private может использовать только класс, в котором есть этот метод
  private log(speed: number) {
    console.log("Vehicle has changed speed to ", speed);
  }
  // модификатор protected доступен дочерним классам, но недоступен экземплярам класса (car1)
  protected alternativeLog(text: string) {
    console.log(text.toUpperCase());
  }
}

class Car extends Vehicle {
  changeSpeed(speed: number) {
    this.drive(speed);
    this.alternativeLog("speed was changed");
  }
}

const car1 = new Car();
car1.drive(120);
car1.stop();
// car.log(123);
// метод log приватен
