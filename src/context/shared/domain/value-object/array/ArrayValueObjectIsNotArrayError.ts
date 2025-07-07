import { DomainError } from '../../error/DomainError'

export class ArrayValueObjectIsNotArrayError<T> extends DomainError {
    public type: string = 'type.domain.value-object.array.is-not-array'
    public message: string

    constructor(value: T) {
        super()
        this.message = `Value must be an array, received: ${JSON.stringify(value)}`
    }
}
