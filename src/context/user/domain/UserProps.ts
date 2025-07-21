import { EmailValueObject } from '../../shared/domain/value-object/email/EmailValueObject'
import { StringValueObject } from '../../shared/domain/value-object/string/StringValueObject'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'

export interface UserProps {
    id: Uuid
    email: EmailValueObject
    password: StringValueObject
    urlProfile?: StringValueObject
}
