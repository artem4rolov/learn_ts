export {};

// создаем объект, где ключи только типа string, а значения только типа number
type Names = Record<string, number>;

type WellKnownBrands =
  | "apple"
  | "lenovo"
  | "hp"
  | "dell"
  | "microsoft"
  | "huawei";

type BrandNames = Record<WellKnownBrands, string>;

// const myBrands: BrandNames = {
//   apple: "",
// };

////////////////
interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// достаем только нужные нам ключи с помощью утилиты Pick
type SimpleTodo = Pick<Todo, "id" | "title" | "completed">;

const todo1: SimpleTodo = {
  completed: false,
  id: "dasda",
  title: "test",
};

/////////////////
// утилита Omit выбрасывает ненужные ключи, указанные нами
type SimpleTodo2 = Omit<Todo, "description" | "createdAt">;

// создаем туду с нужными нам ключами (id, createdAt задает сервер, completed создадим динамически)
type NewTodo = Pick<Todo, "title" | "description">;
