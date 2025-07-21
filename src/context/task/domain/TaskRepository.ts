import { BaseRepository } from '../../shared/domain/BaseRepository'
import { Task } from './Task'

export interface TaskRepository extends BaseRepository<Task> {
    save(task: Task): Promise<void>
}
