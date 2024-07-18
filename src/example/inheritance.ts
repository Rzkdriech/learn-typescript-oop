export class Animal {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log("sounds of this animal");
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

export class Wolf extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Awuuuu awuuu");
  }

  getInfo(): string {
    return `${super.getInfo()}, breed: ${this.breed}`;
  }
}
