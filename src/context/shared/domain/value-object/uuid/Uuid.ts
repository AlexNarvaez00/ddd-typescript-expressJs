import { StringValueObject } from '../string/StringValueObject'
import { randomUUID } from 'node:crypto'

export class Uuid extends StringValueObject {
    constructor(value: string) {
        super(value)
        this.ensureIsValidUuid(value)
    }

    private ensureIsValidUuid(value: string): void {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

        if (uuidRegex.test(value) === false) {
            throw new Error(`Invalid UUID <${value}>`)
        }
    }

    static random() {
        return new Uuid(randomUUID())
    }
}
