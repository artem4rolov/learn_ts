// Array<string>
// string[]
// Promise<number>

// динамически принимаем тип данных
type TypeFactory<T> = T;

// динамически создаем тип string
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

// динамически принимаем массив конкретных данных
function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray<number>(1, 2, 3);
toArray("2", "df");
