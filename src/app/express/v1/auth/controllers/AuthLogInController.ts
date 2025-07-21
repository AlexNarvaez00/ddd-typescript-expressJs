import { Request, Response } from 'express'
import jwt, { Algorithm } from 'jsonwebtoken'
import { Controller } from '../../shared/controller/Controller'

interface AuthLogInControllerRequestBody {
    email: string
    password: string
}

interface AuthLogInControllerRequest extends Request {
    body: AuthLogInControllerRequestBody
}

interface AuthLogInControllerResponse extends Response {}

export class AuthLogInController
    implements
        Controller<AuthLogInControllerRequest, AuthLogInControllerResponse>
{
    constructor(
        private readonly secretKey: string,
        private readonly algorithm: Algorithm
    ) {}

    async run(
        request: AuthLogInControllerRequest,
        response: AuthLogInControllerResponse
    ): Promise<void> {
        const { email } = request.body
        const { secretKey, algorithm } = this
        const tokenId = jwt.sign(
            {
                email,
            },
            secretKey,
            {
                expiresIn: '1h',
                algorithm,
            }
        )

        response.json({
            tokenId,
        })
    }
}
