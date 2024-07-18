import {
  Circle,
  Rectangle,
  Shape,
  Product,
  Food,
} from "../src/example/abstraction";

describe("abstraction", () => {
  function printShapeDetails(shape: Shape) {
    console.info("Area:", shape.getArea());
    console.info("Perimeter", shape.getPerimeter());
  }

  function printFoodProduct(product: Product) {
    console.info("Name", product.getName());
    console.info("Price", product.getPrice());
    console.info("Category", product.getCategory());
  }

  it("should support", () => {
    const circle: Circle = new Circle(5);
    const rectangle: Rectangle = new Rectangle(4, 6);

    printShapeDetails(circle);
    printShapeDetails(rectangle);
  });

  it("should support", () => {
    const food: Food = new Food("Goodtime", 5500, "Snack", 2);

    printFoodProduct(food);
  });
});
