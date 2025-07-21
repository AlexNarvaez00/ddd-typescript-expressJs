import { Request, Response } from 'express'

export interface Controller<Req extends Request, Res extends Response> {
    run(request: Req, response: Res): Promise<void>
}
