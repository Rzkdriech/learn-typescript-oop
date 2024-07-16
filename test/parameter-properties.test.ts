describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person: Person = new Person("Rizki");
    console.info(person.name);

    person.name = "Akhadi";
    console.info(person.name);
  });
});


