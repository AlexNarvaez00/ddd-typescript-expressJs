import { expressjwt } from 'express-jwt'
import { config } from '../../../../../context/shared/infrastructure/config'

export const auth = expressjwt({
    secret: config.express.jwtTokenSecret as string,
    algorithms: ['HS256'],
    getToken: function (req) {
        const {
            headers: { authorization },
        } = req

        if (authorization && authorization.split(' ')[0] === 'Bearer') {
            return authorization.split(' ')[1]
        }

        throw new Error('Auth is required')
    },
})
