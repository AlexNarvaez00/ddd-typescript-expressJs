import { ToPrimitives } from '../../shared/domain/ToPrimitives'
import { PermissionsProps } from './PermissionsProps'

export interface PermissionPrimitives extends ToPrimitives<PermissionsProps> {
    id?: string
}
