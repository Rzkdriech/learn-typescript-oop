import Arithmetic from "../src/example/encapsulation";

describe("Arithmetic", () => {
  it("should support math", () => {
    const math: Arithmetic = new Arithmetic(1, 5);

    console.info(math.doAdd());
    console.info(math.doMin());
    console.info(math.doDivide())
    console.info(math.doMultiply())
  });
});
