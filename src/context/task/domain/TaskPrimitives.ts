import { ToPrimitives } from '@/context/shared/domain/ToPrimitives'
import { TaskProps } from './TaskProps'

export interface TaskPrimitives extends ToPrimitives<TaskProps> {
    id?: string
}
