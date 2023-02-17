// перегрузка
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// выше описаны все возможные варианты перегрузки, поэтому мы можем указать аргументы как any
function add(a: any, b: any): any {
  return a + b;
}

add(1, 2);
add("1", "2");
// add(1, "2") -> false

type asyncCb = (res: number) => number;

// перегрузка
function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;

// функция
function asyncSum(a: number, b: number, cb?: asyncCb): any {
  const result = a + b;
  if (cb) {
    return cb(result);
  }

  return Promise.resolve(result);
}

asyncSum(1, 2);
