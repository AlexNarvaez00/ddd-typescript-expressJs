import { Criteria } from '../../shared/domain/criteria/Criteria'
import { Task } from '../domain/Task'
import { TaskRepository } from '../domain/TaskRepository'

export class TaskMatch {
    constructor(private readonly taskRepository: TaskRepository) {
        console.log('TaskMatch')
    }

    public async run(criteria: Criteria): Promise<Task[]> {
        return await this.taskRepository.match(criteria)
    }
}
