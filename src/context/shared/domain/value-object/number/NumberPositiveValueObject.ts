import { NumberValueObject } from "./NumberValueObject";
import { NumberValueObjectIsNegativeError } from "./NumberValueObjectIsNegativeError";

export class NumberPositiveValueObject extends NumberValueObject {
  constructor(value: number) {
    super(value);
  }

  private ensureValueIsPositive(): void {
    const value = this.value;

    if (value < 0) {
      throw new NumberValueObjectIsNegativeError(value);
    }
  }
}
