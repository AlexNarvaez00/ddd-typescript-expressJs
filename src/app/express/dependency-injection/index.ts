import { Container } from 'inversify'
import { TaskController } from '../v1/task/controllers/TaskController'
import { InMemoryTaskRepository } from '../../../context/task/infrastructure/persistence/InMemoryTaskRepository'

const container = new Container()

container.bind(InMemoryTaskRepository).toSelf()
container.bind(TaskController).toSelf()

export default container
