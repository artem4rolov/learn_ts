// Два варианта объектов с помощью alias и interface

// interfaces
interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: Date;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

const prod1: ICar = {
  brand: "Skoda",
  isNew: true,
  isSale: true,
  model: "Superb",
  price: 50_000,
  title: "New generation",
  type: "liftback",
  wheels: 4,
  year: new Date(2023),
};

// aliases
type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: Date;
  brand: string;
};

type Car = {
  type: string;
  model: string;
} & Product &
  Vehicle;

const prod2: Car = {
  brand: "Skoda",
  isNew: true,
  isSale: true,
  model: "Kodiaq",
  price: 45_000,
  title: "New generation of crossover",
  type: "crossover",
  wheels: 4,
  year: new Date(2023),
};
