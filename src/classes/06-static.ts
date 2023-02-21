// статичесике методы и свойства классов
export class Circle {
  protected static pi: number = 3.14;

  private static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  constructor(public radius: number) {}

  get area() {
    return Circle.pi * this.radius * this.radius;
  }
}

const c1 = new Circle(12);
c1.radius;
c1.area;
// c1.pi -> error
// статические методы и свойства работают при обращении к самому классу, а не его экзмепляру (instance)
// Circle.pi;
// Circle.calculateArea(10);
///////////////////////////////
// модификатор protected не даст экземплярам класса и другим классам обратиться к защищенному свойству / методу, за исключением дочерних классов
// Circle.pi;
// модификатор private также не даст обратиться к защищенному свойству / методу
// Circle.calculateArea(10);

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius);
    // модификатор protected дает возможность обратиться к свойству pi родительского класса
    Circle.pi;
  }
}
