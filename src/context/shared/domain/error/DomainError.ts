export abstract class DomainError extends Error {
    public abstract readonly type: string
    public abstract readonly message: string

    public toPrimitives() {
        return {
            type: this.type,
            message: this.message,
        }
    }
}
