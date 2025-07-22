import { DomainError } from '../../shared/domain/error/DomainError'

export class PermissionNotFoundError extends DomainError {
    public type: string = `type.domain.permission.not-found.error`
    public message: string

    constructor(value: string) {
        super()
        this.message = `The permission not found <${value}>`
    }
}
