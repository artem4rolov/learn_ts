const numbers = [1, 2, 3, 4];

const strs: string[] = [];
// то же самое объявление типа массива со строками
const strs2: Array<string> = [];
strs.push("strs");

export interface Car {
  wheels: number;
  brand: string;
}

const cars: Car[] = [];
cars.push({ brand: "Audi", wheels: 3, type: "" });

const arrOfArr: string[][] = [];
arrOfArr.push(["", ""]);

function printArr(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index);
  });
}
