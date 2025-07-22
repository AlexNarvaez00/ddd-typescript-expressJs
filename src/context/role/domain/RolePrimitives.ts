import { ToPrimitives } from '../../shared/domain/ToPrimitives'
import { RoleProps } from './RoleProps'

export interface RolePrimitives extends ToPrimitives<RoleProps> {
    id?: string
}
