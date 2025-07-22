import { NextFunction, Request, Response } from 'express'
import { Criteria } from '../../../../../context/shared/domain/criteria/Criteria'
import { CriteriaFilters } from '../../../../../context/shared/domain/criteria/CriteriaFilters'
import { CriteriaOrder } from '../../../../../context/shared/domain/criteria/CriteriaOrder'
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
            new Criteria(CriteriaFilters.none(), CriteriaOrder.none())
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
