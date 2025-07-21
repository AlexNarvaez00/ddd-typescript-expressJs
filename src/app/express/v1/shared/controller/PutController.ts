import { NextFunction, Request, Response } from 'express'

export interface PutController {
    update(
        request: Request,
        response: Response,
        next?: NextFunction
    ): Promise<void>
}
