describe("Error handling", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function doubleIt(value: number) {
    if (value < 0) {
      throw new ValidationError("Value cannot be less than 0");
    }
    return value * 2;
  }

  it("should support", () => {
    try {
      const result = doubleIt(5);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.info(error.message);
      }
    }
  });
});
