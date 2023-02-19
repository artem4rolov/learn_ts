export function createMap<T>(list: T[]) {
  return function <U>(cb: (x: T) => U): U[] {
    const result = [];

    for (let el of list) {
      result.push(cb(el));
    }

    return result;
  };
}

// сначала создаем массив с определенным типом данных
const mapNums = createMap([1, 2, 3]);
// затем в callBack по очереди попадает значение (x) из нашего массива ([1, 2, 3])
const result = mapNums((num) => num + 2);
