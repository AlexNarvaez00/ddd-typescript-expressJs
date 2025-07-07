import { DomainError } from '../../error/DomainError'

export class StringValueObjectEmptyError extends DomainError {
    public type: string = 'type.domain.value-object.string.empty-error'
    public message: string

    constructor() {
        super()
        this.message = `Value cannot be an empty string`
    }
}
