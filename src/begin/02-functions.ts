function sum(a: number, b: number): number {
  return a + b;
}
// стрелочные
const sum2 = (a: number, b: number) => a + b;
// функциональное выражение
const sum3 = function (a: number, b: number): number {
  return a + b;
};

sum(2, 4);

// void говорит о том, что функция завершится (ничего не вернет, но завершится)
// userId - необязательный аргумент, который предполагает тип строки и undefined (если нет аргумента)
function log(name: string, userId?: string): void {
  console.log("hello", name, "with id", userId || "anonym");
}

log("Artem");

// never говорит о том, что функция никогда не завершится (поскольку там ошибка в теле - функция всегда будет ломаться)
function crash(): never {
  throw new Error("crash");
}

function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}
