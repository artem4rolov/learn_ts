interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  // для добавления других неизвестных ключей (динамические свойства)
  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: "BMW",
  type: "Sedan",
  isNew: false,
};

// car.brand = 12 -> error

const car2: Car = {
  wheels: 4,
  brand: "Mazda",
  type: "Sedan",
};

// car.go = 1;
// car["go"] = true -> true
