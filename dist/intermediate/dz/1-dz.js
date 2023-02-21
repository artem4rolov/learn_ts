"use strict";
// Два варианта объектов с помощью alias и interface
Object.defineProperty(exports, "__esModule", { value: true });
const prod1 = {
    brand: "Skoda",
    isNew: true,
    isSale: true,
    model: "Superb",
    price: 50000,
    title: "New generation",
    type: "liftback",
    wheels: 4,
    year: new Date(2023),
};
const prod2 = {
    brand: "Skoda",
    isNew: true,
    isSale: true,
    model: "Kodiaq",
    price: 45000,
    title: "New generation of crossover",
    type: "crossover",
    wheels: 4,
    year: new Date(2023),
};
