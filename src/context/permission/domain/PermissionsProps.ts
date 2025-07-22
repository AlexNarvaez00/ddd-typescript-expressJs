import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { PermissionName } from './PermissionName'

export interface PermissionsProps {
    id?: Uuid
    name: PermissionName
}
