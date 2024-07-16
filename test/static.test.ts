describe("Static", () => {
  class Configuration {
    static NAME: string = "Learn OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Lalu Akhadi Rizki";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.AUTHOR);
    console.info(Configuration.VERSION);
  });

  it("should support math util", () => {
    console.info(MathUtil.sum(1, 2, 3));
  });
});
