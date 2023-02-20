export {};

////////////////
interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: number;
}

// утилита Readonly делает все значения тольько для чтения
type ReadOnlyTodo = Readonly<Todo>;

/////////////////

// утилита Partial делает поля объектов необязательными
type PartialTodo = Partial<Todo>;
// теперь можем обновить поля в объекте todo (иммутабельность)
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}

// утилита Required делает все поля обязательными
type ReqiredTodo = Required<Todo>;
