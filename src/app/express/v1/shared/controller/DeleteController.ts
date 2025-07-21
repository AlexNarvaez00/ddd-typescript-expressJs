import { NextFunction, Request, Response } from 'express'

export interface DeleteController {
    destroy(
        request: Request,
        response: Response,
        next?: NextFunction
    ): Promise<void>
}
