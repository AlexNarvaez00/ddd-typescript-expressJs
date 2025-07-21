import { StringValueObject } from '../string/StringValueObject'
import { EmailValueObjectIsInvalidError } from './EmailValueObjectIsInvalidError'

export class EmailValueObject extends StringValueObject {
    constructor(value: string) {
        super(value)
        this.ensureEmailIsValid(value)
    }

    private ensureEmailIsValid(email: string) {
        const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

        if (regex.test(email) === false) {
            throw new EmailValueObjectIsInvalidError(email)
        }
    }
}
