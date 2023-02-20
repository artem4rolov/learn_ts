export {};

// утилита Exclude убирает (отнимает) указанные значения после запятой
// если после запятой указаны значения, которых нет - утилита игнорирует их
type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Exclude<"a" | "b" | "c", "a" | "b" | "d">;
// в этом примере утилита убирает функцию
type T2 = Exclude<string | number | (() => void), Function>;

//
type Status = "success" | "clientError" | "serverError" | 200 | 401 | 504;
// здесь утилита удалит все строковые статусы, оставит только цифры
type NumberStatus = Exclude<Status, string>;

///////////////////////

// утилита Extract извлекает указанные значения после запятой
// если после запятой указаны значения, которых нет - утилита игнорирует их
type T00 = Extract<"a" | "b" | "c", "a">;
// третьего значения не существует - оставляем два
type T11 = Extract<"a" | "b" | "c", "a" | "b" | "d">;
// в этом примере утилита оставляет только функцию
type T22 = Extract<string | number | (() => void), Function>;

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: "male" | "female";
  country: string;
  education: string;
  skills: string[];
}

// используем только имена (fullName там не будет, поскольку такого ключа в интерфейсе Person нет)
type PersonNames = Extract<keyof Person, "firstName" | "lastName" | "fullName">;

///////////////////
// утилита NonNullable отбрасывает пустые значения
type T000 = NonNullable<string | number | undefined>;
type T002 = NonNullable<string[] | null | undefined>;
