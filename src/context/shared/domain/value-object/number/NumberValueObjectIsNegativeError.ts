import { DomainError } from '../../error/DomainError'

export class NumberValueObjectIsNegativeError extends DomainError {
    public type: string = 'type.domain.value-object.number.is-negative-error'
    public message: string

    constructor(value: number) {
        super()
        this.message = `Value must be a positive number, but received: ${value}`
    }
}
