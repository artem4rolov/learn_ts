// перегрузка
function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;

// исходная функция
function head(value: any): any {
  return value[0];
}

export const num = head([1, 3, 5]);
num.toFixed(2);

const str = head("a");
str.length;

const bool = head([true, false]);
bool.valueOf();
