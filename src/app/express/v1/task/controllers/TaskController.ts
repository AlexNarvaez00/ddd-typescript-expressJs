import { NextFunction, Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { TaskRepository } from '../../../../../context/task/domain/TaskRepository'
import { InMemoryTaskRepository } from '../../../../../context/task/infrastructure/persistence/InMemoryTaskRepository'
import { GetController } from '../../shared/controller/GetController'
import { ResponseHandler } from '../../shared/handler/ResponseHandler'
import { TaskMatch } from '../../../../../context/task/application/TaskMatch'
import { Criteria } from '../../../../../context/shared/domain/criteria/Criteria'
import { CriteriaFilter } from '../../../../../context/shared/domain/criteria/CriteriaFilter'
import { CriteriaFilters } from '../../../../../context/shared/domain/criteria/CriteriaFilters'
import { CriteriaOrder } from '../../../../../context/shared/domain/criteria/CriteriaOrder'

interface TaskControllerRequest extends Request {}
interface TaskControllerResponse extends Response {}

@injectable()
export class TaskController implements GetController {
    constructor(
        @inject(InMemoryTaskRepository)
        private readonly taskRepository: TaskRepository
    ) {
        console.log(this.taskRepository)
    }

    public async index(
        request: TaskControllerRequest,
        response: TaskControllerResponse,
        next?: NextFunction
    ): Promise<void> {
        const { ok } = ResponseHandler
        console.log('asfdasdfasdfasdfasdf///////////')
        console.log(
            'asdfasdfqwe231234122352353245',
            JSON.stringify(this.taskRepository)
        )
        const taskMatch = new TaskMatch(this.taskRepository)
        console.log('asfdasdfasdfasdfasdf0080808080')
        const result = await taskMatch.run(
            new Criteria(CriteriaFilters.none(), CriteriaOrder.none())
        )

        try {
            console.log('1111asfdasdfasdfasdfasdf')
            ok(result, response)
        } catch (error) {
            console.log(error)
            if (next) {
                next(error)
            }
        }
    }
}
