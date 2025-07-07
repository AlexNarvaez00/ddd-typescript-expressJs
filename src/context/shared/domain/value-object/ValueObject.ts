import { ValueMustBeDefineError } from '../error/ValueMustBeDefineError'

export class ValueObject<T> {
    constructor(public readonly value: T) {
        this.ensureValueIsDefined()
    }

    private ensureValueIsDefined(): void {
        const value = this.value

        if (value === undefined || value === null) {
            throw new ValueMustBeDefineError(value)
        }
    }
}
