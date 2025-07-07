import { DomainError } from '../../error/DomainError'

export class NumberValueObjectIsNaNError extends DomainError {
    public type: string = 'type.domain.value-object.number.is-nan-error'
    public message: string

    constructor(value: number) {
        super()
        this.message = `Value must be a valid number, but received: ${value}`
    }
}
