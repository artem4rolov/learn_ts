export function keys<T extends object>(obj: T): string[] {
  const currentKeys: string[] = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

export function values<T extends object>(obj: T): T[keyof T][] {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}

// const obj1 = { a: 2, b: "d" };

// values(obj1);

const obj1 = {
  a: 123,
  b: "srt",
};

const obj2 = {
  c: true,
  b: ["1, 2, 3"],
};

// console.log(keys(obj1));
console.log(values(obj2));
