describe("Class", () => {
  class Customer {
    constructor() {
      console.info("Create new customer");
    }
  }

  class Order {}

  class Deliver {} 
  
  it("Should can create class", () => {
    const customer: Customer = new Customer();
    const order: Order = new Order();
  });

  it("Should can create constructors", () => {
    new Customer();
    new Customer();
  });
});
