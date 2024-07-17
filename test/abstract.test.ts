import { Circle, Rectangle, Shape } from "../src/example/abstraction";

describe("abstraction", () => {
  function printShapeDetails(shape: Shape) {
    console.info("Area:", shape.getArea());
    console.info("Perimeter", shape.getPerimeter());
  }

  it("should support", () => {
    const circle: Circle = new Circle(5);
    const rectangle: Rectangle = new Rectangle(4, 6);

    printShapeDetails(circle);
    printShapeDetails(rectangle);
  });
});
