import { ValueMustBeOfTypeError } from '../../error/ValueMustBeOfTypeError'
import { ValueObject } from '../ValueObject'
import { NumberValueObjectIsNaNError } from './NumberValueObjectIsNaNError'

export class NumberValueObject extends ValueObject<number> {
    constructor(value: number) {
        super(value)
        this.ensureValueIsValidValue()
    }

    private ensureValueIsValidValue(): void {
        const value = this.value

        if (typeof value !== 'number') {
            throw new ValueMustBeOfTypeError(value, 'number')
        }

        if (Number.isNaN(value)) {
            throw new NumberValueObjectIsNaNError(value)
        }
    }
}
