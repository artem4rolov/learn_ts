// экзмепляры абстрактных классов невозможно создать
// от них можно только наследоваться
abstract class Vehicle {
  // абстрактное свойство также должен описывать дочерний класс
  abstract color: string;
  // абстрактный метод описывается в дочернем классе
  public abstract drive(speed: number): void;
  public stop() {
    console.log("Stopped");
  }
}

export class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }
  drive(speed: number) {
    console.log(speed);
  }
}

// экзмепляры абстрактных классов невозможно создать
// от них можно только наследоваться
// const v1 = new Vehicle();
const v1 = new Car("red");
// v1.color
