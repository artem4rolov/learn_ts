function example1(x?: number | string) {
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x.toFixed(2);
  } else if (x === undefined) {
    console.log("no value");
  } else {
    x;
  }
}

function example2(strs: string | string[] | null) {
  // if (typeof strs === 'object') {}
  // чтобы избежать null - проверяем, что strs вообще существует (null будет false) и если strs - объект, тогда идем дальше
  // if (Array.isArray(strs)) {
  if (strs && typeof strs === "object") {
    strs.join(" ");
  } else if (typeof strs === "string") {
    strs.toLocaleLowerCase();
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getDay();
  } else {
    x.join();
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

export function move(animal: Fish | Bird) {
  // если есть ключ swim - typescript подскажет какие методы доступны объекту animal
  if ("swim" in animal) {
    return animal.swim();
  }
  // в противном случае typescript покажет другие доступные методы
  return animal.fly();
}
