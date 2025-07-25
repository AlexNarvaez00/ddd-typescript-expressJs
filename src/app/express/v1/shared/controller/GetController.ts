import { NextFunction, Request, Response } from 'express'

export interface GetController {
    index(
        request: Request,
        response: Response,
        next?: NextFunction
    ): Promise<void>
}
