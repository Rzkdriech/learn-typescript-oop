export class MathOperation {
  public _value1: number;
  public _value2: number;

  constructor(_value1: number, _value2: number) {
    this._value1 = _value1;
    this._value2 = _value2;
  }

  public operation(): number {
    throw new Error("this method should be overridden by subclass")
  }
}

export class AdditionalOps extends MathOperation {
  public operation(): number {
    return this._value1 + this._value2
  }
}

export class SubstractionOps extends MathOperation {
  public operation(): number {
    return this._value1 - this._value2
  }
}


