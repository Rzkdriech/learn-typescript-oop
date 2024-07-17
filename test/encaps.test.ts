import {Arithmetic, StudentExams} from "../src/example/encapsulation"

describe("Arithmetic", () => {
  it("should support math", () => {
    const math: Arithmetic = new Arithmetic(1, 5);

    console.info(math.doAdd());
    console.info(math.doMin());
    console.info(math.doDivide())
    console.info(math.doMultiply())
  });

  it("should support student exams", () => {
    const student: StudentExams = new StudentExams(90)

    console.info(student.examsResult())
  })
});
