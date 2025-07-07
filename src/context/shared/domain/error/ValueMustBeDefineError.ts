import { DomainError } from './DomainError'

export class ValueMustBeDefineError<T> extends DomainError {
    public type: string = 'type.domain.error.value-must-be-defined'
    public message: string

    constructor(value: T) {
        super()
        this.message = `Value must be defined, but received: ${JSON.stringify(
            value
        )}`
    }
}
