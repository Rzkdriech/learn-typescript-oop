import { Wolf } from "../src/example/inheritance";

describe("Inheritance", () => {
  it("should support inheritance", () => {
    const wolf1: Wolf = new Wolf("Agus", 7, "Labrador");
    console.info(wolf1.getInfo());
    wolf1.makeSound();
  });
});
