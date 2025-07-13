import { DomainError } from '../../error/DomainError'

export class EmailValueObjectIsInvalidError extends DomainError {
    public type: string = "'type.domain.value-object.email.is-not-valid"
    public message: string

    constructor(value: string) {
        super()
        this.message = `Value must be an email, received: ${value}`
    }
}
