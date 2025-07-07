import { ValueMustBeOfTypeError } from '../../error/ValueMustBeOfTypeError'
import { ValueObject } from '../ValueObject'

export class BooleanValueObject extends ValueObject<boolean> {
    constructor(value: boolean) {
        super(value)
        this.ensureValueIsValidValue()
    }

    private ensureValueIsValidValue(): void {
        const value = this.value

        if (typeof value !== 'boolean') {
            throw new ValueMustBeOfTypeError(value, 'boolean')
        }
    }
}
