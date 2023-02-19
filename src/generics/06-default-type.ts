interface AnyObject {
  [key: string]: unknown;
}

export async function request<T = AnyObject>(url: string): Promise<T> {
  const response = await fetch(url);

  return response.json();
}

// создаем интерфейс одного todo
interface Todo {
  id: string;
  completed: boolean;
  title: string;
}

// ответом от сервера будет массив с todo-шками
const data =
  request<Todo[]>("test_url"); /* as 'можно создать какой-то интерфейс' */
