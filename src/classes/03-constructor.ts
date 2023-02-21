class Vehicle {
  // private createdAt()
  constructor(private createdAt: Date) {}
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
    console.log("Vehicle has changed speed to ", speed, this.createdAt);
  }
  // модификатор protected доступен дочерним классам, но недоступен экземплярам класса (car1)
  protected alternativeLog(text: string) {
    console.log(text.toUpperCase());
  }
}

export class Car extends Vehicle {
  // public color: string;
  // public maxSpeed: number;

  // если в аргументах конструктора заранее указать модификаторы доступа - в конструкторе не нужно повторно описывать эти переменные
  constructor(public readonly color: string, public maxSpeed: number) {
    // поскольку метод createdAt в классе-родителе приватен, в методе super нужно явно его указать
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log(this.color, this.maxSpeed);
  }
}

const car1 = new Car("red", 200);
// car1.color = 'blue'
