interface ICar {
  // метод go, который ничего не делает
  go(speed: number): void;
  // опциональные ключи ? не имеют смысла здесь
}

// класс имплементируется (исполняется) от интерфейса ICar
export class Car implements ICar {
  // здесь обязательно нужно описать метод go
  // аргумент нужно повторно типизировать
  // типизация должна совпадать с типизацией в интерфейсе
  go(speed: number) {
    console.log("Let us go with speed", speed.toFixed());
  }
  // метод, которого нет в интерфейсе, также будет работать
  stop() {
    console.log("Stopped");
  }
}

const car = new Car();
car.go(12);
