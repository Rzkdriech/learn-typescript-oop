describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    console.info(`Hello ${employee.name}`);
  }

  it("should support", () => {
    let employee: Employee = new Employee("Rizki");
    console.info(employee);

    employee = new Manager("Rizki");
    console.info(employee);

    employee = new VicePresident("Rizki");
    console.info(employee);
  });

  it("it should support polymorphism method", () => {
    sayHello(new Employee("Rizki"));
    sayHello(new Manager("Akhadi"));
    sayHello(new VicePresident("Lalu"));
  });
});
