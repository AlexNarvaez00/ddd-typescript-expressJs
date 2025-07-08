import { ArrayValueObject } from '../../shared/domain/value-object/array/ArrayValueObject'
import { StringValueObject } from '../../shared/domain/value-object/string/StringValueObject'

export class TaskAuthors extends ArrayValueObject<string> {
    public ensureValueIsValid(value: string): void {
        new StringValueObject(value)
    }
}
