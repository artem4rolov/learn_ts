// перегрузка
function head(value: string): string;
// вместо конкретики указания всех типов входных данных - используем generic
// для динамического формирования входных данных и выходных
// если входной массив пуст - мы не можем никак с ним взаимодействовать
function head<T>(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
// function head(value: number[]): number;
// function head(value: string[]): string;
// function head(value: boolean[]): boolean;
// function head(value: Date[]): Date;

// исходная функция
function head(value: any): any {
  return value[0];
}

const head1 = <T>(value: T[]): T => value[0];

interface ModelData<T> {
  title: string;
  value: T;
}

export const obj1: ModelData<number> = {
  title: "as",
  value: 12,
};

// obj1.value = "a"; -> false, поскольку мы указали generic как number

const obj2: ModelData<Array<number>> = {
  title: "sdasd",
  value: [123],
};
