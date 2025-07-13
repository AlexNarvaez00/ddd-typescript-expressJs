import { Request, Response } from 'express'
import { Controller } from '../../Controller'
import { ResponseHandler } from '../../../routes/shared/ResponseHandler'
import { Task } from '../../../../context/task/domain/Task'

interface TaskControllerRequest extends Request {}
interface TaskControllerResponse extends Response {}

export class TaskController
    implements Controller<TaskControllerRequest, TaskControllerResponse>
{
    public async run(
        request: TaskControllerRequest,
        response: TaskControllerResponse
    ): Promise<void> {
        ResponseHandler.ok(
            [
                Task.fromPrimitives({
                    title: 'title',
                    authors: ['autohor 1'],
                    content: 'sdafsadf',
                    priority: 10,
                }).toPrimitives(),
            ],
            response
        )
    }
}
