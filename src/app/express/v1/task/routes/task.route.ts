import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'
import container from '../../../dependency-injection'

export const register = (router: Router) => {
    const taskController = container.get(TaskController)
    router.get('/api/v1/task', taskController.index)
}
