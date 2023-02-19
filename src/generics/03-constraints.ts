// на входные параметры мы требуем тип, свойство (.length) которого может работать
// то строки, массивы и объекты, но у объектов обязательным ключом должно быть length со значением типа number
function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len("abc");
len(["abc"]);
len({ length: 12 });
// len(123); -> нельзя
// len(true); -> нельзя

const obj1 = { a: 1, length: 2 };

len(obj1);
