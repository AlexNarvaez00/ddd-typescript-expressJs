import { Router } from 'express'
import { ResponseHandler } from '../shared/ResponseHandler'
import { Task } from '../../../context/task/domain/Task'
import { DomainError } from '../../../context/shared/domain/error/DomainError'
import { auth } from '../auth/MiddlewareAuth'

const routeTask = Router()
routeTask.use(auth)

routeTask.get('/api/v1/task', (req, res) => {
    ResponseHandler.ok(
        [
            Task.fromPrimitives({
                title: '',
                content: 'Task 1 content',
                priority: 1,
                authors: ['author 1'],
            }).toPrimitives(),
        ],
        res
    )
})

export { routeTask }
