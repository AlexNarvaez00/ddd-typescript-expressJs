import { Request, Router } from 'express'
import jwt, { Algorithm } from 'jsonwebtoken'
import { config } from '../../../context/shared/infrastructure/config'

const ALGORITHM: Algorithm = 'HS256'
const routeAuth = Router()

interface AuthLoginRequest extends Request {
    body: {
        email: string
        password: string
    }
}

routeAuth.post('/login', (req: AuthLoginRequest, res) => {
    const { email, password } = req.body
    const tokenId = jwt.sign(
        {
            email,
        },
        config.express.jwtToken as string,
        {
            expiresIn: '1h',
            algorithm: ALGORITHM,
        }
    )

    res.json({
        tokenId,
    })
})

export { routeAuth }
