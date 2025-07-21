import { NextFunction, Request, Response } from 'express'

export interface PostController {
    save(
        request: Request,
        response: Response,
        next?: NextFunction
    ): Promise<void>
}
