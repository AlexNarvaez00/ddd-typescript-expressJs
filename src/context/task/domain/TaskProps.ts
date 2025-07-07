import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { TaskContent } from './TaskContent'
import { TaskPriority } from './TaskPriority'
import { TaskTitle } from './TaskTitle'

export interface TaskProps {
    id?: Uuid
    priority: TaskPriority
    title: TaskTitle
    content: TaskContent
}
