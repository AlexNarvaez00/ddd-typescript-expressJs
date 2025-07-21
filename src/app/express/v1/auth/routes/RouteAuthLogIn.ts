import { Router } from 'express'
import { config } from '../../../../../context/shared/infrastructure/config'
import { AuthLogInController } from '../controllers/AuthLogInController'

export const register = (route: Router) => {
    const { jwtTokenSecret: jwtToken } = config.express
    const userLogInController = new AuthLogInController(
        jwtToken as string,
        'HS256'
    )

    route.post('/login', async (req, res) => {
        await userLogInController.run(req, res)
    })
}
