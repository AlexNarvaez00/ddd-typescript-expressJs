import { DomainError } from '@/context/shared/domain/error/DomainError'
import { Task } from '@/context/task/domain/Task'
import { Router } from 'express'
import { ResponseHandler } from '../shared/ResponseHandler'

const routeTask = Router()

routeTask.get('/api/v1/task', (req, res) => {
    try {
        ResponseHandler.ok(
            [
                Task.fromPrimitives({
                    title: 'Task 1',
                    content: 'Task 1 content',
                    priority: 1,
                    authors: ['author 1'],
                }).toPrimitives(),
            ],
            res
        )
    } catch (error: unknown) {
        if (error instanceof DomainError) {
            ResponseHandler.error(error.toPrimitives(), res)
            return
        }

        ResponseHandler.error({ message: (error as Error).message }, res)
    }
})

export { routeTask }
