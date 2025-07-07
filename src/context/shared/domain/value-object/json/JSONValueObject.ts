import { ValueMustBeOfTypeError } from '../../error/ValueMustBeOfTypeError'
import { ValueObject } from '../ValueObject'

export class JSONValueObject extends ValueObject<object> {
    constructor(value: object) {
        super(value)
        this.ensureValueIsValidJSON()
    }

    private ensureValueIsValidJSON(): void {
        const value = this.value

        if (typeof value !== 'object') {
            throw new ValueMustBeOfTypeError(value, 'object')
        }

        try {
            JSON.stringify(value)
        } catch (error) {
            throw new Error(`Value is not a valid JSON object: ${error}`)
        }
    }
}
