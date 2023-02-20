export {};

function f1(arg: { a: number; b: string }) {
  return arg.a + arg.b;
}

// ReturnType возвращает тип, который возвращает функция
type T0 = ReturnType<typeof f1>;

//////////////////

// утилита Parameters возвращает типы аргументов в функции
type T1 = Parameters<typeof f1>;

type T2 = ConstructorParameters<ErrorConstructor>;

class Car {
  constructor(brand: string, model: string) {}
}

// утилита ConstructorParameters возвращает тип аргументов конструктора класса
type T3 = ConstructorParameters<typeof Car>;
