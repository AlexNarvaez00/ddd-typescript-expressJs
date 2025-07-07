import { ValueObject } from '../ValueObject'
import { ArrayValueObjectIsNotArrayError } from './ArrayValueObjectIsNotArrayError'

export abstract class ArrayValueObject<T> extends ValueObject<Array<T>> {
    constructor(value: Array<T>) {
        super(value)
        this.ensureValueIsArray()
        this.value.forEach((item) => this.ensureValueIsValid(item))
    }

    private ensureValueIsArray(): void {
        const value = this.value

        if (Array.isArray(value) === false) {
            throw new ArrayValueObjectIsNotArrayError(value)
        }
    }

    public abstract ensureValueIsValid(value: T): void
}
