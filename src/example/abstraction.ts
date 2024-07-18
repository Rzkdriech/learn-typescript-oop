export abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

export class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

export abstract class Product {
  abstract getName(): string;
  abstract getPrice(): number;
  abstract getCategory(): string;
}

export class Food extends Product {
  private name: string;
  private price: number;
  private category: string;
  private discount?: number;

  constructor(name: string, price: number, category: string, discount: number) {
    super();
    this.name = name;
    this.price = price;
    this.category = category;
    this.discount = discount;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    if (this.discount) {
      let disc: number = this.price * (this.discount / 100);
      return this.price - disc;
    }

    return this.price;
  }

  getCategory(): string {
    return this.category;
  }
}
