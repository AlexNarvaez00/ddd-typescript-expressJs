import { DomainError } from './DomainError'

export class ValueMustBeOfTypeError<T> extends DomainError {
    public type: string = 'type.domain.error.value-must-be-of-type'
    public message: string

    constructor(value: T, expectedType: string) {
        super()
        this.message = `Value must be of type ${expectedType}, but received: ${typeof value}`
    }
}
