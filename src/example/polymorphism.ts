export class MathOperation {
  public _value1: number;
  public _value2: number;

  constructor(_value1: number, _value2: number) {
    this._value1 = _value1;
    this._value2 = _value2;
  }

  public addOperation(): number {
    return this._value1 + this._value2;
  }

  public minusOperation(): number {
    return this._value1 - this._value2;
  }
}
