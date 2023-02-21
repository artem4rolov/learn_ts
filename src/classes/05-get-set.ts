export class Rectangle {
  constructor(public width: number, public height: number) {}

  get area(): number {
    // тип выводимого значения при get здесь будет readonly number
    return this.height * this.width;
  }
}

const rect1 = new Rectangle(123, 23);
// геттер позволяет без вызова метода обращаться к результату
// по аналогии длины массивов - Array.length вызывается без ()
// rect1.area()
// геттер не позволяет устанавливать значение
// react1.area = 123 -> error
rect1.area;

export class Car {
  constructor(public color: string, private _maxSpeed: number) {}

  get speed(): number {
    return this._maxSpeed;
  }

  set maxSpeed(speed: number) {
    if (speed > 0) this._maxSpeed = speed;
  }
}

const c1 = new Car("green", 250);
// дали доступ к maxSpeed через геттер
c1.speed;

// maxSpeed в этом случае не применится
c1.maxSpeed = 0;
// вернет предыдущее значение, поскольку скорость должна быть > 0
c1.maxSpeed;
