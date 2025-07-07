import { ValueMustBeOfTypeError } from '../../error/ValueMustBeOfTypeError'
import { ValueObject } from '../ValueObject'

export class DateValueObject extends ValueObject<Date> {
    constructor(value: Date) {
        super(value)
        this.ensureValueIsValidDate()
    }

    private ensureValueIsValidDate(): void {
        const value = this.value

        if (value instanceof Date === false || isNaN(value.getTime())) {
            throw new ValueMustBeOfTypeError(value, 'Date')
        }
    }
}
