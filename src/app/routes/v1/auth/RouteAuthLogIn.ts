import { Router } from 'express'
import { config } from '../../../../context/shared/infrastructure/config'
import { AuthLogInController } from '../../../controllers/v1/auth/AuthLogInController'

export const register = (route: Router) => {
    const { jwtToken } = config.express
    const userLogInController = new AuthLogInController(
        jwtToken as string,
        'HS256'
    )

    route.post('/login', (req, res) => {
        userLogInController.run(req, res)
        console.log('asfsadfsadfsadf')
    })
}
