describe("Super Method", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      super.sayHello(name);
      console.info("and, i am your manager");
    }
  }

  it("should support", () => {
    const employee: Employee = new Employee("Budi");
    employee.sayHello("Rizki");

    const manager: Manager = new Manager("Andi");
    manager.sayHello("Rizki");
  });
});
