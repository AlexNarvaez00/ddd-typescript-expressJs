import { Router } from 'express'
import { TaskController } from '../../../controllers/v1/task/TaskController'

export const register = (router: Router) => {
    const taskController = new TaskController()

    router.get('/api/v1/task', taskController.run)
}
