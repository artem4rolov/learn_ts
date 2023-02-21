export class Rectangle {
  constructor(public width: number, public height: number) {}

  area() {
    const area = this.height * this.width;
    return this.log(area);
  }

  private log(area: number) {
    console.log(`new Rectangle was create at ${new Date()}, area = ${area}`);
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
  }

  paint(newColor: string) {
    this.color = newColor;
  }
}

const square = new Square(100, "red");
square.area();
square.paint("green");
console.log(square);
