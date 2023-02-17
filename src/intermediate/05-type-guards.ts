type Fish = { swim: () => void };
type Bird = { fly: () => void };

// предикат (функция - защитник)
function isFish(pet: Fish | Bird): pet is Fish {
  // используя утверждение (что-то as что-то) говорим typescript, что наше животное не может быть undefined
  // еоли условие тела функции вернет true, возвращаем true
  return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  // если есть ключ swim - typescript подскажет какие методы доступны объекту animal
  if (isFish(animal)) {
    return animal.swim();
  }
  // в противном случае typescript покажет другие доступные методы
  return animal.fly();
}
