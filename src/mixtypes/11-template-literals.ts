export {};

type Side = "top" | "right" | "bottom" | "left";

// мутируем тип Side
// утилита Capitalzie делает camalCase из string
type Margin = `margin${"" | Capitalize<Side>}`;
type Padding = `padding${Side}`;

////////////////////
// генерируем классы анимации
type Direction = "down" | "left" | "right" | "up";
type Position = "top" | "bottom";
type Entry = "in" | "out";
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<
  "" | Direction | Position
>}`;

///////////////////////
interface Car {
  brand: string;
  model: string;
  year: number;
}

// динамически меняем имена ключей в объекте
type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void;
};
