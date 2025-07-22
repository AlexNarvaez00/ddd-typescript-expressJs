import { NextFunction, Request, Response } from 'express'
import { Criteria } from '../../../../../context/shared/domain/criteria/Criteria'
import { Filters } from '../../../../../context/shared/domain/criteria/Filters'
import { Order } from '../../../../../context/shared/domain/criteria/Order'
import { TaskMatch } from '../../../../../context/task/application/TaskMatch'
import { TaskRepository } from '../../../../../context/task/domain/TaskRepository'
import { GetController } from '../../shared/controller/GetController'
import { ResponseHandler } from '../../shared/handler/ResponseHandler'

interface TaskControllerRequest extends Request {}
interface TaskControllerResponse extends Response {}

export class TaskController implements GetController {
    constructor(private readonly taskRepository: TaskRepository) {}

    public async index(
        request: TaskControllerRequest,
        response: TaskControllerResponse,
        next?: NextFunction
    ): Promise<void> {
        const { ok } = ResponseHandler
        const taskMatch = new TaskMatch(this.taskRepository)
        const result = await taskMatch.run(
            new Criteria(Filters.none(), Order.none())
        )

        try {
            ok(result, response)
        } catch (error) {
            console.log(error)
            if (next) {
                next(error)
            }
        }
    }
}
