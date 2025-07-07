import { ValueMustBeOfTypeError } from '../../error/ValueMustBeOfTypeError'
import { ValueObject } from '../ValueObject'
import { StringValueObjectEmptyError } from './StringValueObjectEmptyError'

export class StringValueObject extends ValueObject<string> {
    constructor(value: string) {
        super(value)
        this.ensureValueIsValidValue()
    }

    private ensureValueIsValidValue(): void {
        const value = this.value

        if (typeof value !== 'string') {
            throw new ValueMustBeOfTypeError(value, 'string')
        }

        if (value.trim() === '') {
            throw new StringValueObjectEmptyError()
        }
    }
}
