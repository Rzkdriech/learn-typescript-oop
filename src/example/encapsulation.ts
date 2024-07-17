export class Arithmetic {
  private _value1: number;
  private _value2: number;

  constructor(_value1: number, _value2: number) {
    this._value1 = _value1;
    this._value2 = _value2;
  }

  public doAdd(): number {
    return this._value1 + this._value2;
  }

  public doMin(): number {
    if (this._value1 > this._value2) {
      return this._value1 - this._value2;
    }

    return this._value2 - this._value1;
  }

  public doDivide(): number {
    if (this._value1 > this._value2) {
      return this._value1 / this._value2;
    }

    return this._value2 / this._value1;
  }

  public doMultiply(): number {
    return this._value1 * this._value2;
  }
}

export class StudentExams {
  private exams: number;

  constructor(exams: number) {
    this.exams = exams;
  }

  public examsResult(): string {
    if(this.exams >= 90) return "bro u are awesome"

    if(this.exams >= 78) return "bro u are good"

    return "bro u are not good enough"
  }

  }


