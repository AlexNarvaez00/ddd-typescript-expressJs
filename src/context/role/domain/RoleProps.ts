import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { RoleName } from './RoleName'

export interface RoleProps {
    id?: Uuid
    name: RoleName
}
