describe("Instance of", () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const rizki = new Manager();

  it("should support", () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);

    expect(rizki instanceof Employee).toBe(false);
    expect(rizki instanceof Manager).toBe(true);
  });
});
