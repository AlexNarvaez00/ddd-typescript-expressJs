import { ArrayValueObject } from '../../shared/domain/value-object/array/ArrayValueObject'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'

export class RolePermissions extends ArrayValueObject<string> {
    public ensureValueIsValid(value: string): void {
        new Uuid(value)
    }
}
