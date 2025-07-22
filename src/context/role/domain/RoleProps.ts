import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { RoleName } from './RoleName'
import { RolePermissions } from './RolePermissions'

export interface RoleProps {
    id?: Uuid
    name: RoleName
    permissions: RolePermissions
}
