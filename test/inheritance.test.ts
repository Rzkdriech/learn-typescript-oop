describe("Inheritance", () => {
  // Parent
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support Inheritance", () => {
    const employee: Employee = new Employee("Eko");
    console.info(employee.name);

    const manager: Manager = new Manager("Budi");
    console.info(manager.name);

    const director: Director = new Director("Joko");
    console.info(director.name);
  });
});
