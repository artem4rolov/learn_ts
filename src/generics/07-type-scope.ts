// замыкания
export function tuplePairCreator<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second];
  };
}

// сначала выполняем первую функцию, возвращаем в перменную toTupleWith1 вторую функцию
const toTupleWith1 = tuplePairCreator(1);
// затем выполняем вторую функцию, возвращаем массив из конкретных типов в переменную val1
const val1 = toTupleWith1("two");
