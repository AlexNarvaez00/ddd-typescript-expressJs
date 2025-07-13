import { ToPrimitives } from '@/context/shared/domain/ToPrimitives'
import { UserProps } from './UserProps'

export interface UserPrimitives extends ToPrimitives<UserProps> {
    urlProfile?: string
}
