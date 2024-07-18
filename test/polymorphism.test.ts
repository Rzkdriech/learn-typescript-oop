import { MathOperation } from "../src/example/polymorphism";

describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
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

  it("should support overloading", () => {
    class AdditionOps extends MathOperation {
      public operation(): number {
        return this._value1 + this._value2;
      }
    }

    class SubstractionOps extends MathOperation {
      public operation(): number {
        return this._value1 - this._value2;
      }
    }

    function operation(op: MathOperation): number {
      return op.operation();
    }

    const add: MathOperation = new AdditionOps(2, 4);

    console.info(operation(add));

    const substr: MathOperation = new SubstractionOps(3, 5);

    console.info(operation(substr));
  });
});
